import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";

export default function Membership() {
  return (
    <Container>
      <SectionTitle
        preTitle="Membership"
        title="Join Our Community"
      >
        Become a member of the Pharma Devs community and access exclusive resources, networking events, and career support.
      </SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Community Benefits</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600 dark:text-gray-300">Access to exclusive networking events</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600 dark:text-gray-300">Career guidance and mentorship</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600 dark:text-gray-300">Member-only resources and content</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Membership Option</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-bold text-lg text-indigo-600 dark:text-indigo-400">Community Membership</h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Access to our community resources, networking events, and career support.</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <SectionTitle
          title="Frequently Asked Questions"
        >
          Everything you need to know about membership.
        </SectionTitle>
        
        <div className="mt-8 space-y-4">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 className="font-bold text-gray-800 dark:text-white">How do I join the Pharma Devs community?</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Simply sign up using the form above and complete the registration process.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 className="font-bold text-gray-800 dark:text-white">What resources are available to members?</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Members get access to networking events, career guidance, mentorship, and exclusive content related to transitioning from pharmacy to tech.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 className="font-bold text-gray-800 dark:text-white">Is there a cost to join?</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Our community membership is free to join and participate in.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}