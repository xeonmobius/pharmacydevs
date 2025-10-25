"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is this community just for developers, or can I join if I'm learning?",
    answer: "Anyone serious about the transition is welcome. We have members in various roles: Software Engineers, Product Managers, Data Analysts, and those still in pharmacy and exploring the switch. Our primary focus is on bridging clinical knowledge and tech skills.",
  },
  {
    question: "I'm worried my pharmacy background won't be valued in tech. Will it?",
    answer: "Absolutely. Your clinical expertise is our community's core differentiator. Tech companies need experts who understand medication safety, patient workflows, and regulatory constraints. We focus on teaching you how to translate that unique domain knowledge into technical value.",
  },
  {
    question: "What roles do most former pharmacists transition into?",
    answer: "The most common paths are Product Manager (leveraging clinical workflow expertise), Software Engineer (building digital health tools), and Data Analyst (interpreting patient and prescription data). We help you explore and prepare for all of them.",
  },
  {
    question: "How much does it cost to join?",
    answer: "(Insert your price here, or say it's free.)",
  },
  {
    question: "Are all events held in Toronto, or are there virtual options?",
    answer: "While our roots are in Toronto, our community is global. We host a mix of virtual events, online workshops, and in-person meetups to ensure everyone can participate regardless of location.",
  },
];
