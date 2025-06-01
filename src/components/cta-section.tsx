import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const CtaSection: React.FC = () => {
  return (
    <section
      id="cta"
      className="section-padding bg-gradient-to-br from-primary-900 to-primary-700 text-white"
    >
      <div className="container-custom relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full"
          animate={{
            x: [0, -10, 0],
            y: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to take control of your time?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their
            productivity with Focusly. Start your 14-day free trial today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              color="default"
              variant="solid"
              className="font-medium text-primary bg-white"
              startContent={<Icon icon="lucide:zap" />}
            >
              Start Free Trial
            </Button>

            <Button
              size="lg"
              variant="flat"
              className="font-medium text-white border-white/30"
              startContent={<Icon icon="lucide:calendar" />}
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
