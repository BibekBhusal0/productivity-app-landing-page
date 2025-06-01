import React from "react";
import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="video-background">
        <source
          src="https://cdn.heroui.chat/videos/productivity-bg.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text"
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
              className="text-xl text-foreground-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              The only productivity app you'll ever need. Streamline your
              workflow, eliminate distractions, and achieve more in less time.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-4"
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
                className="font-medium text-base"
                startContent={<Icon icon="lucide:zap" />}
              >
                Start Free Trial
              </Button>

              <Button
                size="lg"
                variant="bordered"
                color="primary"
                className="font-medium text-base"
                startContent={<Icon icon="lucide:play" />}
              >
                See it in Action
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 mt-4"
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
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground-600">
                <span className="font-semibold">10,000+</span> productivity pros
                trust Focusly
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
              <Image
                src="https://img.heroui.chat/image/dashboard?w=800&h=600&u=1"
                alt="Focusly App Dashboard"
                className="w-full h-auto rounded-xl"
              />

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="flex items-center gap-2">
                  <Icon
                    icon="lucide:trending-up"
                    className="text-primary text-xl"
                  />
                  <div>
                    <p className="text-xs text-foreground-500">Productivity</p>
                    <p className="font-semibold text-sm">+27% this week</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-4 -left-4 bg-white rounded-lg p-3 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="flex items-center gap-2">
                  <Icon
                    icon="lucide:check-circle"
                    className="text-success text-xl"
                  />
                  <div>
                    <p className="text-xs text-foreground-500">
                      Tasks completed
                    </p>
                    <p className="font-semibold text-sm">12/15 today</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary-200/30 to-transparent rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
