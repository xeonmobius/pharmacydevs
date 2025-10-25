import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Why join us",
  desc: "Toronto's largest community of Pharmacists building the future of health-tech.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Translate Clinical Expertise to Code",
      desc: "Leverage your deep knowledge of patient care and medication pathways to build safer, more effective health-tech products.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Accelerate Your Career Pivot",
      desc: "Access career advice, transition roadmaps, and peer support to rapidly secure your first or next role in tech, product, or engineering.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Build Your Health-Tech Network",
      desc: "Connect with accomplished pharmacist-turned-developers and industry leaders to find mentors and collaborators for life.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Go Beyond the Basics: Clinical Impact Meets Code",
  desc: "Leverage the power of our community to bridge the gap between healthcare expertise and high-impact technology careers.",
  image: benefitTwoImg, // Keep your existing image variable
  bullets: [
    {
      title: "Navigate the Tech Landscape",
      desc: "Get clear, honest insights into different tech roles (PM, Dev, Data, Analyst) from peers who successfully made the career transition.",
      icon: <DevicePhoneMobileIcon />, // Keep your existing icon
    },
    {
      title: "Solve Unique Health-Tech Challenges",
      desc: "Join focused discussions to troubleshoot real-world problems and validate product ideas unique to integrating pharmacy workflows.",
      icon: <AdjustmentsHorizontalIcon />, // Keep your existing icon
    },
    {
      title: "Elevate Your Professional Brand",
      desc: "Gain visibility by speaking at community events or contributing to our content, establishing yourself as a recognized expert in health-tech.",
      icon: <SunIcon />, // Keep your existing icon
    },
  ],
};

export { benefitOne, benefitTwo };
