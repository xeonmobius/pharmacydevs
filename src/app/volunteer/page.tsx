import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function Volunteer() {
  return (
    <Container>
      <SectionTitle
        preTitle="VOLUNTEER"
        title="Help build Toronto's premier Clinical Tech community."
      >
        The Pharma Dev community offers a volunteer program that allows
        individuals to contribute their clinical and technical expertise and
        help build Toronto&apos;s leading pharmacist-to-tech community. The program
        is designed to connect local Pharmacists, Developers, and Product
        Professionals looking to advance their careers in health-tech, build
        their networks, and enrich the entire profession.
      </SectionTitle>

      <div className="mt-12">
        <SectionTitle title="Why volunteer with Pharma Dev?"></SectionTitle>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          The Pharma Dev community offers a volunteer program that allows
          individuals to contribute their clinical and technical expertise and
          help build Toronto&apos;s leading pharmacist-to-tech community. The program
          is designed to connect local Pharmacists, Developers, and Product
          Professionals looking to advance their careers in health-tech, build
          their networks, and enrich the entire profession.
        </p>
      </div>

      <div className="mt-12">
        <SectionTitle title="Volunteer Perks">
          Committed volunteers get access to the following perks:
        </SectionTitle>
        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Free membership and access to Pharma Dev in-person and virtual
            events.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Opportunity to work with and learn from clinical tech leaders who
            have successfully made the career transition.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Contribute to defining the future of digital health in one of North
            America&apos;s largest tech hubs.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Build a professional portfolio and receive a volunteer reference
            that highlights your new tech skills.
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <SectionTitle title="Open Volunteer Opportunities">
          We are growing and are searching for passionate volunteers to embark
          on a journey with us. It&apos;s the spirit and dedication of our volunteer
          community that fuels all the great initiatives we put forward for the
          pharmacist-to-tech community.
        </SectionTitle>
        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-300">
            There are no available positions for now. Please check back later
            for new opportunities.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <SectionTitle title="How to Apply"></SectionTitle>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Are you passionate about making a difference and looking for a
          rewarding volunteer opportunity that accelerates your tech career?
          We&apos;d love to hear from you!
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          If you&apos;re interested in applying for any of our open volunteer roles,
          simply send an email to volunteers@yourwebsite.ca. In your message,
          please share why you are passionate about the intersection of pharmacy
          and technology and why you are enthusiastic about the specific
          position you&apos;re applying for. Don&apos;t forget to include a link to your
          LinkedIn profile as well. We&apos;re excited to learn more about you!
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          To ensure the success of our programs, we require a strong commitment
          from all our volunteers. By signing up, you agree to volunteer for the
          entire duration of the program term.
        </p>
      </div>
    </Container>
  );
}
