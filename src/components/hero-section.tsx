import React from "react";
import { Avatar, AvatarGroup, Button,  cn } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ThemeAwareSparkles } from "./ui/sparkles";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className={cn("relative flex min-h-[90vh] items-center overflow-hidden")}>
      <div
        className={cn(
          "absolute size-full",
          "[mask-image:radial-gradient(50%_50%,white,transparent)]",
          "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100",
          "after:absolute after:-left-1/2 after:top-1/3 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-2 after:border-b after:border-default after:bg-default-50"
        )}
      >
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 top-0 -z-20",
            "bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"
          )}
        />

        <ThemeAwareSparkles
          density={500}
          direction="up"
          minSize={1.4}
          size={4}
          className="absolute inset-x-0 top-0 -z-30 h-3/4 w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>

      <motion.div
        className="container-custom flex-center relative z-10 flex flex-col gap-6 pt-28 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-center mt-6 size-20 origin-center rounded-full bg-primary-700 text-xl"
        >
          <Icon icon="lucide:focus" width={50} className="text-primary" />
        </motion.div>
        <motion.h1
          className="gradient-text text-4xl font-bold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Focusly
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
          <AvatarGroup 
            isBordered
            color= 'primary'
            className="pb-1">
            {[1, 2, 3, 4].map((i) => (
              <Avatar
                key={i}
                src={`https://img.heroui.chat/image/avatar?w=64&h=64&u=${i}`}
                alt={`User ${i}`}
              />
            ))}
          </AvatarGroup>
          <p className="text-sm text-foreground-600">
            <span className="font-semibold">10,000+</span> productivity pros trust Focusly
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
