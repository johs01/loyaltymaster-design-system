import { Image } from "./CloudinaryImage";

const awards = [
  { path: "/sendpush/Awards1-3.svg", order: 0 },
  { path: "/sendpush/Awards%204-6.svg", order: 1 },
  { path: "/sendpush/Awards%207-9.svg", order: 2 },
];

export default function AwardsStrip() {
  return (
    <section className="wf-section wf-bg-peach wf-awards-strip" aria-hidden="true">
      <div className="wr-container--main">
        <div className="wf-awards-row">
          {awards.map(({ path, order }) => (
            <div
              key={path}
              className="wf-award-badge reveal"
              data-reveal-order={String(order)}
            >
              <Image
                className="wf-award-image"
                src={path}
                alt=""
                loading="lazy"
                transformation={[{ quality: 90 }]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
