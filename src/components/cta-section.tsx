import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const CtaSection: React.FC = () => {
  return (
    <section
      id="cta"
      className="section-padding bg-gradient-to-r from-primary-800 to-primary-600 text-white dark:from-primary-200 dark:to-primary-400"
    >
      <div className="container-custom relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5"
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
          className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/5"
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
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to take control of your time?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Join thousands of professionals who have transformed their productivity with Focusly.
            Start your 14-day free trial today.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              color="warning"
              variant="solid"
              startContent={<Icon icon="lucide:zap" />}
            >
              Start Free Trial
            </Button>

            <Button
              size="lg"
              variant="light"
              color = 'warning'
              startContent={<Icon icon="lucide:calendar" />}
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/60">No credit card required. Cancel anytime.</p>
        </motion.div>
      </div>
    </section>
  );
};
