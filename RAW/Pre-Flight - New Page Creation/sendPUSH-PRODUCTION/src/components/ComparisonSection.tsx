import { CtaButton } from "./MarketingPrimitives";

const rows = [
  { feature: "Geo-fenced targeting", sf: "Yes", sms: "No", email: "No", manual: "No" },
  { feature: "Behavior automations", sf: "Yes", sms: "Limited", email: "Limited", manual: "No" },
  { feature: "Revenue attribution", sf: "Yes", sms: "No", email: "No", manual: "No" },
  { feature: "Fast setup", sf: "Under 1 hour", sms: "2-3 days", email: "1-2 days", manual: "Ongoing" },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="wf-section wf-bg-cyan">
      <div className="wr-container--main">
        <div className="wf-center reveal" data-reveal-order="0">
          <p className="wf-eyebrow">Comparison</p>
          <h2 className="wr-h2 wf-heading-center">See How sendPUSH Beats Generic Campaign Tools</h2>
        </div>
        <div className="wf-table-wrap reveal" data-reveal-order="1">
          <table className="wf-compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>sendPUSH</th>
                <th>Bulk SMS App</th>
                <th>Email Tool</th>
                <th>Manual Follow-Up</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, sf, sms, email, manual }) => (
                <tr key={feature}>
                  <td data-label="Feature">{feature}</td>
                  <td data-label="sendPUSH">{sf}</td>
                  <td data-label="Bulk SMS App">{sms}</td>
                  <td data-label="Email Tool">{email}</td>
                  <td data-label="Manual Follow-Up">{manual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="wf-center reveal" data-reveal-order="2">
          <CtaButton>See Pricing and Plans</CtaButton>
        </div>
      </div>
    </section>
  );
}
