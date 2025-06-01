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
    <Tooltip
      content={`Switch to ${isDark ? "light" : "dark"} mode`}
      placement="bottom"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleToggle}
      >
        <div className="relative">
          <div className="flex items-center bg-content2 dark:bg-content3 rounded-full p-1 w-16">
            <motion.div
              className="absolute bg-white dark:bg-primary-800 w-6 h-6 rounded-full shadow-sm z-10 flex items-center justify-center"
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Icon
                icon={isDark ? "lucide:moon" : "lucide:sun"}
                className={`text-sm ${isDark ? "text-primary-300" : "text-warning"}`}
              />
            </motion.div>
            <div className="flex justify-between w-full px-1.5">
              <span className="w-4" />
              <span className="w-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </Tooltip>
  );
};
