import { extendVariants, Card as HeroUICard } from "@heroui/react";

export type allColors = "primary" | "secondary" | "success" | "warning" | "danger" | "default";
export const Card = extendVariants(HeroUICard, {
  variants: {
    color: {
      primary: { base: "border-primary-200 bg-primary-50 text-primary-600" },
      secondary: { base: "border-secondary-200 bg-secondary-50 text-secondary-600" },
      success: { base: "border-success-200 bg-success-50 text-success-600" },
      warning: { base: "border-warning-200 bg-warning-50 text-warning-600" },
      danger: { base: "border-danger-200 bg-danger-50 text-danger-600" },
      default: { base: "border-default-200 bg-default-50 text-default-600" },
    },
    hover: {
      true: { base: ' shadow-sm hover:shadow-lg transition-all translate-y-0 hover:-translate-y-4 scale-100 hover:scale-105 duration-300 motion-reduce:transition-all' },
      false: {},
    }
  }, defaultVariants: {
    color: 'default',
    hover: false
  }
});
