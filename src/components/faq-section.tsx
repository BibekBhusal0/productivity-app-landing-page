import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "How does Focusly differ from other productivity apps?",
      answer:
        "Focusly combines task management, focus timers, and smart analytics in one seamless experience. Unlike other apps that focus on just one aspect of productivity, Focusly provides a comprehensive solution with AI-powered insights to help you work smarter, not harder.",
    },
    {
      question: "Can I use Focusly on multiple devices?",
      answer:
        "Yes! Focusly is available on web, iOS, and Android. Your data syncs automatically across all your devices, so you can stay productive wherever you are.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Absolutely! We offer a 14-day free trial on all paid plans with no credit card required. You can also use our Free plan indefinitely with limited features.",
    },
    {
      question: "How secure is my data with Focusly?",
      answer:
        "We take data security seriously. Focusly uses bank-level encryption to protect your data, and we never sell your information to third parties. You can export or delete your data at any time.",
    },
    {
      question: "Can I collaborate with my team using Focusly?",
      answer:
        "Yes! Our Pro and Team plans include collaboration features that allow you to share tasks, projects, and progress with team members. You can assign tasks, track team productivity, and coordinate schedules all in one place.",
    },
    {
      question: "What if I need help getting started?",
      answer:
        "We offer comprehensive documentation, video tutorials, and a helpful support team. Pro and Team plans also include priority support to help you get the most out of Focusly.",
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Find answers to common questions about Focusly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Accordion variant="bordered" selectionMode="multiple">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.question}
                aria-label={faq.question}
                className="text-foreground"
              >
                <p className="text-foreground-600">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
