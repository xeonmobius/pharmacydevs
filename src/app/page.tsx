import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Pharma Devs Benefits"
        title="Translate your clinical knowledge into tech impact with us."
      >
        Join our community of healthcare professionals transforming their expertise into innovative solutions.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <div style={{ display: 'none' }}>
        <SectionTitle
          preTitle="Watch a video"
          title="Learn how to fullfil your needs"
        >
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate. So,
          don&apos;t forget to add one. Just like this.
        </SectionTitle>

        <Video videoId="fZ0D0cnR88E" />
      </div>

      <div style={{ display: 'none' }}>
        <SectionTitle
          preTitle="Hear from Members Who Made the Leap"
          title="See the Results: What Clinical Tech Builders Are Saying"
        >
        </SectionTitle>

        <Testimonials />
      </div>

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>

      <Faq />
    </Container>
  );
}
