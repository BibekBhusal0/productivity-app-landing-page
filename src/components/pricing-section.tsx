import React from "react";
import { Card, CardBody, CardHeader, CardFooter, Button, Tabs, Chip, Tab, cn } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, } from "framer-motion";

export const PricingSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("monthly");
  const isYearly = selectedTab === "yearly";

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started with basic productivity tools.",
      features: [
        "Basic task management",
        "Standard focus timer",
        "Calendar view",
        "Mobile app access",
        "5 projects",
      ],
      cta: "Get Started",
      color: "default",
      popular: false,
    },
    {
      name: "Pro",
      price: { monthly: 9.99, yearly: 7.99 },
      description: "For professionals who need advanced productivity features.",
      features: [
        "Advanced task management",
        "Custom focus timers",
        "Time tracking & reports",
        "Unlimited projects",
        "Team collaboration (up to 3)",
        "Priority support",
      ],
      cta: "Start Free Trial",
      color: "primary",
      popular: true,
    },
    {
      name: "Team",
      price: { monthly: 19.99, yearly: 16.99 },
      description: "For teams that want to boost collective productivity.",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Team analytics dashboard",
        "Admin controls",
        "Advanced permissions",
        "API access",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      color: "default",
      popular: false,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>

          <div className="mb-8 flex items-center justify-center gap-3">
            <Tabs selectedKey={selectedTab} onSelectionChange={(e) => setSelectedTab(e as string)}>
              <Tab value="monthly" key="monthly" title="Monthly" />
              <Tab
                value="yearly"
                key="yearly"
                title={
                  <>
                    Yearly
                    <Chip color="success" variant="flat" className="ml-2 text-xs">
                      Save 20%
                    </Chip>
                  </>
                }
              />
            </Tabs>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={item} className="pricing-card">
              <Card
                className={`h-full overflow-visible border pt-5 ${plan.popular ? "border-primary shadow-lg" : "border-divider shadow-sm"}`}
                isHoverable
              >
                {plan.popular && (
                  <Chip
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-8"
                    color="primary"
                  >
                    Most Popular
                  </Chip>
                )}

                <CardHeader className="flex flex-col gap-2 pb-0">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="mb-1 text-sm text-foreground-500">/month</span>
                  </div>
                  {isYearly && plan.price.yearly > 0 && (
                    <p className="text-xs text-success">
                      Billed annually (${(plan.price.yearly * 12).toFixed(2)})
                    </p>
                  )}
                  <p className="mt-2 text-sm text-foreground-600">{plan.description}</p>
                </CardHeader>

                <CardBody className="py-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon icon="lucide:check" className="mt-0.5 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>

                <CardFooter>
                  <Button
                    fullWidth
                    color={plan.color as any}
                    variant={plan.popular ? "solid" : "flat"}
                    className={`font-medium ${plan.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90" : ""}`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}

          <Pricing outerRadius="rounded"
            padding="large"
            plans={[
              {
                monthlyPrice: '$0.00',
                name: 'Free',
                yearlyPrice: '$0.00'
              },
              {
                monthlyPrice: '$9.99',
                name: 'Starter',
                popular: true,
                yearlyPrice: '$99.99'
              },
              {
                monthlyPrice: '$19.99',
                name: 'Pro',
                yearlyPrice: '$199.99'
              }
            ]} />
        </motion.div>
      </div>
    </section>
  );
};


interface Plan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  popular?: boolean;
}

interface PricingProps {
  plans: Plan[];
  onPlanSelect?: (plan: string) => void;
  onCycleChange?: (cycle: "Monthly" | "Yearly") => void;
  width?: "sm" | "md" | "lg" | "xl";
  outerRadius?: "normal" | "rounded" | "moreRounded";
  padding?: "small" | "medium" | "large";
}

const widthClasses = {
  sm: "w-full sm:w-[300px]",
  md: "w-full sm:w-[300px] md:w-[500px]",
  lg: "w-full sm:w-[300px] md:w-[500px] lg:w-[768px]",
  xl: "w-full sm:w-[300px] md:w-[500px] lg:w-[768px] xl:w-[1024px]",
};

const outerRadiusClasses = {
  normal: "rounded-[16px]",
  rounded: "rounded-[24px]",
  moreRounded: "rounded-[32px]",
};

const paddingClasses = {
  small: "p-2",
  medium: "p-3",
  large: "p-4",
};

const innerRadiusClasses = {
  normal: "rounded-xl",
  rounded: "rounded-2xl",
  moreRounded: "rounded-3xl",
};

export default function Pricing({
  plans,
  width = "lg",
  outerRadius = "rounded",
  padding = "medium",
}: PricingProps) {
  const [selectedPlan, setSelectedPlan] = React.useState("Basic");
  const [billing, setBilling] = React.useState<"Monthly" | "Yearly">("Monthly");

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleBillingChange = (cycle: "Monthly" | "Yearly") => {
    setBilling(cycle);
  };

  return (
    <div
      className={cn(
        "mx-auto bg-white shadow-lg",
        widthClasses[width],
        outerRadiusClasses[outerRadius],
        paddingClasses[padding],
      )}
    >
      <div className="mb-3 flex justify-center bg-green-900">
        <div className="relative w-3/4 rounded-full bg-zinc-300 p-1 pb-2">
          <motion.div
            className="absolute h-[38px] w-[calc(50%-6px)] rounded-full bg-green-900"
            layoutId="cycleBackground"
            initial={billing === "Monthly" ? { x: 2 } : { x: "calc(100% + 2px)" }}
            animate={billing === "Monthly" ? { x: 2 } : { x: "calc(100% + 2px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <div className="relative z-10 flex">
            {["Monthly", "Yearly"].map((cycle) => (
              <motion.button
                key={cycle}
                className={cn(
                  "z-20 w-1/2 rounded-full py-1 text-lg font-extrabold transition-colors duration-200",
                  billing === cycle ? "text-zinc-800" : "text-zinc-500",
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  handleBillingChange(cycle as "Monthly" | "Yearly");
                }}
                whileTap={{ scale: 0.95 }}
              >
                {cycle}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {plans.map((plan) => (
        <motion.div
          key={plan.name}
          className={cn(
            "relative mb-3 cursor-pointer border-2 border-zinc-200 p-4",
            innerRadiusClasses[outerRadius],
            selectedPlan === plan.name ? "bg-zinc-100" : "bg-white",
          )}
          onClick={() => handlePlanSelect(plan.name)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          layout
        >
          <AnimatePresence>
            {selectedPlan === plan.name && (
              <motion.div
                className={cn(
                  "absolute inset-0 border-4 border-zinc-900",
                  innerRadiusClasses[outerRadius],
                )}
                layoutId="selectedPlanBorder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <span className="font-bold">{plan.name}</span>
              {plan.popular && (
                <span className="ml-2 rounded bg-yellow-300 px-2 py-1 text-xs">Popular</span>
              )}
            </div>
            <motion.div
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full border-2",
                selectedPlan === plan.name ? "border-zinc-900 bg-zinc-900" : "border-zinc-300",
              )}
              animate={{ scale: selectedPlan === plan.name ? 1 : 0.8 }}
            >
              {selectedPlan === plan.name && (
                <motion.div
                  className="h-3 w-3 rounded-full bg-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
              )}
            </motion.div>
          </div>
          <div className="relative z-10 mt-2">
            <AnimatedPrice
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
              billingCycle={billing}
            />
          </div>
        </motion.div>
      ))}

      <motion.button
        className={cn("w-full bg-black py-3 font-bold text-white", innerRadiusClasses[outerRadius])}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </div>
  );
}
interface AnimatedPriceProps {
  monthlyPrice: string;
  yearlyPrice: string;
  billingCycle: "Monthly" | "Yearly";
}

function AnimatedPrice({
  monthlyPrice,
  yearlyPrice,
  billingCycle,
}: AnimatedPriceProps): React.JSX.Element {
  const [price, setPrice] = React.useState(monthlyPrice);
  const animationRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const targetPrice = billingCycle === "Monthly" ? monthlyPrice : yearlyPrice;
    const startValue = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    const endValue = parseFloat(targetPrice.replace(/[^0-9.-]+/g, ""));
    const duration = 50; // Animation duration in milliseconds
    const startTime = Date.now();

    const animatePrice = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = startValue + (endValue - startValue) * progress;

      setPrice(`$${currentValue.toFixed(2)}`);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animatePrice);
      } else {
        setPrice(targetPrice);
      }
    };

    animatePrice();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [price, billingCycle, monthlyPrice, yearlyPrice]);

  return (
    <div>
      <span className="text-2xl font-bold">{price}</span>
      <span className="text-zinc-500">/{billingCycle.toLowerCase().slice(0, -2)}</span>
    </div>
  );
}

