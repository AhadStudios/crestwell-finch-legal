import "@/styles/philosophy.css";

const SERVICES = [
  {
    num: "01",
    title: "Consultation",
    text: "In-depth analysis of your legal standing, risks, obligations, and immediate options.",
  },
  {
    num: "02",
    title: "Strategy",
    text: "Bespoke legal roadmaps designed for personal, commercial, and high-stakes outcomes.",
  },
  {
    num: "03",
    title: "Review",
    text: "Detailed examination of contracts, agreements, documents, claims, and legal exposure.",
  },
  {
    num: "04",
    title: "Representation",
    text: "Focused advocacy in negotiations, disputes, filings, arbitration, and litigation.",
  },
];

export default function Philosophy() {
  return (
    <section className="philosophy" id="about">
      <div className="philosophy__container">
        <div className="philosophy__top">
          <div className="philosophy__left">
            <div className="philosophy__eyebrow">
              <span className="philosophy__eyebrow-text">Our Philosophy</span>
              <span className="philosophy__eyebrow-dash" aria-hidden="true">
                —
              </span>
              <span className="philosophy__eyebrow-rule" aria-hidden="true" />
            </div>

            <h2 className="philosophy__headline">
              <span className="philosophy__headline-line">
                Strong counsel does not
              </span>
              <span className="philosophy__headline-line">
                come from saying more.
              </span>
              <span className="philosophy__headline-line">
                It comes from knowing
              </span>
              <span className="philosophy__headline-line">what matters.</span>
            </h2>
          </div>

          <div className="philosophy__right">
            <div className="philosophy__intro-content">
              <p className="philosophy__body">
                Crestwell &amp; Finch operates with discipline, restraint, and
                strategic pressure. We identify the legal issues that matter,
                remove what creates noise, and execute with precision.
              </p>

              <a href="#firm" className="philosophy__link">
                <span className="philosophy__link-text">
                  Learn More About Our Firm
                </span>
                <span className="philosophy__link-line" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <hr className="philosophy__divider" />

        <div className="philosophy__services">
          <div className="philosophy__services-eyebrow">
            <span className="philosophy__eyebrow-text">What We Do</span>
            <span className="philosophy__eyebrow-dash" aria-hidden="true">
              —
            </span>
            <span className="philosophy__eyebrow-rule" aria-hidden="true" />
          </div>

          <div className="philosophy__grid">
            {SERVICES.map((service) => (
              <article key={service.num} className="philosophy__service">
                <span className="philosophy__service-num">{service.num}</span>
                <h3 className="philosophy__service-title">{service.title}</h3>
                <p className="philosophy__service-text">{service.text}</p>
                <span className="philosophy__service-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
