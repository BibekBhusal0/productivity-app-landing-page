import React from "react";
import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center overflow-hidden">

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <motion.h1
              className="gradient-text text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Master Your Time with Focusly
            </motion.h1>

            <motion.p
              className="max-w-lg text-xl text-foreground-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              The only productivity app you'll ever need. Streamline your workflow, eliminate
              distractions, and achieve more in less time.
            </motion.p>

            <motion.div
              className="mt-4 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Button
                size="lg"
                color="primary"
                className="text-base font-medium"
                startContent={<Icon icon="lucide:zap" />}
              >
                Start Free Trial
              </Button>

              <Button
                size="lg"
                variant="bordered"
                color="primary"
                className="text-base font-medium"
                startContent={<Icon icon="lucide:play" />}
              >
                See it in Action
              </Button>
            </motion.div>

            <motion.div
              className="mt-4 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src={`https://img.heroui.chat/image/avatar?w=64&h=64&u=${i}`}
                    alt={`User ${i}`}
                    className="h-8 w-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground-600">
                <span className="font-semibold">10,000+</span> productivity pros trust Focusly
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-xl border border-white/20 shadow-2xl backdrop-blur-sm">
              <Image
                src="https://img.heroui.chat/image/dashboard?w=800&h=600&u=1"
                alt="Focusly App Dashboard"
                className="h-auto w-full rounded-xl"
              />

              <motion.div
                className="absolute -bottom-4 -right-4 rounded-lg bg-white p-3 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:trending-up" className="text-xl text-primary" />
                  <div>
                    <p className="text-xs text-foreground-500">Productivity</p>
                    <p className="text-sm font-semibold">+27% this week</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 top-4 rounded-lg bg-white p-3 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-xl text-success" />
                  <div>
                    <p className="text-xs text-foreground-500">Tasks completed</p>
                    <p className="text-sm font-semibold">12/15 today</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-radial from-primary-200/30 to-transparent blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
