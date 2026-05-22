export type TokenPrimitive = string | number | boolean;

export type TokenValue =
  | TokenPrimitive
  | TokenPrimitive[]
  | {
      [key: string]: TokenValue;
    };

export interface DesignToken<TValue extends TokenValue = TokenValue> {
  $value: TValue;
  $type: string;
  $description?: string;
  $extensions?: Record<string, unknown>;
}

export interface DesignTokenGroup {
  $type?: string;
  $description?: string;
  [key: string]: DesignToken | DesignTokenGroup | string | undefined;
}

export interface DesignTokens {
  $schema: string;
  $description?: string;
  color: DesignTokenGroup;
  fontFamily: DesignTokenGroup;
  typography: DesignTokenGroup;
  dimension: DesignTokenGroup;
  shadow: DesignTokenGroup;
  motion: DesignTokenGroup;
  layout: DesignTokenGroup;
  component: DesignTokenGroup;
}

export declare const designTokens: DesignTokens;
