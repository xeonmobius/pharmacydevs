import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function ComingSoon({ title = "Coming Soon!" }) {
  return (
    <Container>
      <SectionTitle
        preTitle={title}
        title={`More ${title.toLowerCase()} coming your way`}
      >
        We&apos;re working hard to bring you this content. Please check back later!
      </SectionTitle>
      
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 dark:bg-trueGray-800 dark:border-trueGray-700" />
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          This section is under construction. We appreciate your patience as we build out these features for the Pharma Devs community.
        </p>
      </div>
    </Container>
  );
}