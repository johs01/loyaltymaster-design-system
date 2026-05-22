"use client";

import { CldImage, type CldImageProps } from "next-cloudinary";
import { useState, type CSSProperties } from "react";
import { resolveCloudinaryPublicId } from "../config/cloudinaryAssets";

type LegacyTransformation = {
  width?: number;
  height?: number;
  quality?: number | string;
};

type CloudinaryImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  style?: CSSProperties;
  transformation?: LegacyTransformation[];
};

const IMAGE_EXTENSION_PATTERN = /\.(avif|gif|jpe?g|png|svg|webp)$/i;
const CLOUDINARY_TRANSFORMATION_PATTERN = /^[a-z]+_[^/]+(?:,[a-z]+_[^/]+)*$/i;

function normalizeCloudinaryPublicId(src: string) {
  const [withoutQuery] = src.split("?");

  if (/^https?:\/\//i.test(withoutQuery)) {
    const url = new URL(withoutQuery);

    if (url.hostname === "res.cloudinary.com") {
      const uploadIndex = url.pathname.split("/").findIndex((part) => part === "upload");
      const parts = url.pathname.split("/").filter(Boolean);
      const publicParts = uploadIndex >= 0 ? parts.slice(uploadIndex + 1) : parts;

      while (
        publicParts[0] &&
        (publicParts[0].startsWith("v") || CLOUDINARY_TRANSFORMATION_PATTERN.test(publicParts[0]))
      ) {
        publicParts.shift();
      }

      return {
        src: decodeURIComponent(publicParts.join("/")).replace(IMAGE_EXTENSION_PATTERN, ""),
      };
    }

    return {
      src: withoutQuery,
      deliveryType: "fetch" as const,
    };
  }

  return {
    src: decodeURIComponent(withoutQuery.replace(/^\/+/, "")).replace(IMAGE_EXTENSION_PATTERN, ""),
  };
}

export function Image({
  src,
  alt,
  className,
  loading = "lazy",
  style,
  transformation,
}: CloudinaryImageProps) {
  const [hasError, setHasError] = useState(false);
  const width = transformation?.find((item) => item.width)?.width ?? 1200;
  const height = transformation?.find((item) => item.height)?.height ?? width;
  const quality = transformation?.find((item) => item.quality)?.quality ?? "auto";
  const resolvedSrc = resolveCloudinaryPublicId(src);
  const normalized = normalizeCloudinaryPublicId(resolvedSrc);
  const imageProps: CldImageProps = {
    src: normalized.src,
    alt,
    width,
    height,
    quality,
    format: "auto",
    crop: "limit",
    className,
    loading,
    style,
    onError: () => setHasError(true),
    ...(normalized.deliveryType ? { deliveryType: normalized.deliveryType } : {}),
  };

  if (hasError) {
    const fallbackStyle: CSSProperties = {
      width: "100%",
      height: "100%",
      minHeight: className?.includes("wf-logo-image") ? 34 : undefined,
      display: "block",
      borderRadius: "inherit",
      background:
        "linear-gradient(135deg, rgba(254, 240, 233, 0.95), rgba(225, 246, 242, 0.95))",
      border: "1px dashed rgba(48, 33, 39, 0.18)",
      ...style,
    };

    return (
      <span
        className={className}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
        style={fallbackStyle}
      />
    );
  }

  return <CldImage {...imageProps} />;
}
