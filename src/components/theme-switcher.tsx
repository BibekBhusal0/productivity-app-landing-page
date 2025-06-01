import React from "react";
import { Switch, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "@heroui/use-theme";
import { motion } from "framer-motion";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Tooltip content={`Switch to ${isDark ? "light" : "dark"} mode`} placement="bottom">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex cursor-pointer items-center gap-2"
        onClick={handleToggle}
      >
        <div className="relative">
          <div className="flex w-16 items-center rounded-full bg-content2 p-1 dark:bg-content3">
            <motion.div
              className="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-primary-800"
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Icon
                icon={isDark ? "lucide:moon" : "lucide:sun"}
                className={`text-sm ${isDark ? "text-primary-300" : "text-warning"}`}
              />
            </motion.div>
            <div className="flex w-full justify-between px-1.5">
              <span className="w-4" />
              <span className="w-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </Tooltip>
  );
};
