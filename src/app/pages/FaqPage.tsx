import { Link } from "react-router";
import { ContentPageLayout } from "../components/landing/ContentPageLayout";
import {
  faqItems,
  faqPageDescription,
  faqPageTitle,
  faqPrivacyLead,
} from "../content/faq";

export function FaqPage() {
  return (
    <ContentPageLayout title={faqPageTitle} description={faqPageDescription}>
      <div className="mx-auto max-w-2xl space-y-10 text-landing-muted">
        {faqItems.map((item) => (
          <section key={item.question} className="space-y-3">
            <h2 className="text-xl font-light text-landing-foreground">
              {item.question}
            </h2>
            <p>{item.answer}</p>
          </section>
        ))}

        <p className="landing-caption">
          {faqPrivacyLead}{" "}
          <Link
            to="/privacy"
            className="text-landing-foreground underline decoration-transparent underline-offset-[0.15em] transition-colors hover:decoration-landing-foreground/35"
            data-umami-event="faq-privacy"
          >
            Privacy
          </Link>
          .
        </p>
      </div>
    </ContentPageLayout>
  );
}
