import React from "react";
import { Card,   Tabs, Chip, Tab, cn, CardHeader, CardFooter, Button } from "@heroui/react";
import { AnimatePresence, motion, } from "framer-motion";

export const PricingSection: React.FC = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className = 'flex-center w-full'><Pricing 
            className ="lg:w-[768px] xl:w-[1024px]"
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
            ]} /></div>
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
  className? : string
}

export default function Pricing({ plans, className }: PricingProps) {
  const [selectedPlan, setSelectedPlan] = React.useState("Basic");
  const [billing, setBilling] = React.useState<"Monthly" | "Yearly">("Monthly");

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <Card
      className={cn(
        "mx-auto p-5 rounded-lg w-full",className
      )}
    >
      
      <CardHeader className = 'justify-center pb-8'><Tabs classNames ={{tabList : 'p-1.5', tabContent : "text-xl py-3 px-5"}} selectedKey={billing} onSelectionChange={(e) => setBilling(e as any)} size ='lg' radius = 'full'>
        {["Monthly", "Yearly"].map((duration) => (
          <Tab key={duration} title ={ duration } />
        ))}
      </Tabs></CardHeader>

      {plans.map((plan) => (
        <motion.div
          key={plan.name}
          className={cn(
            "relative mb-3 cursor-pointer border-2 border-divider p-4",
            'rounded-lg',
            selectedPlan === plan.name ? "bg-content2" : "bg-default-50",
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
                  "absolute inset-0 border-4 border-primary",
                  'rounded-lg',
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
                <Chip color = 'primary' className = 'ml-4' size= 'sm' >Popular</Chip>
              )}
            </div>
            <motion.div
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full border-2",
                selectedPlan === plan.name ? "border-primary bg-primary" : "border-default-500",
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

      <CardFooter>
        <Button variant = 'shadow' size = 'lg' color = 'primary' className = 'w-full'>Get Started</Button>
      </CardFooter>
    </Card>
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
      <span className="text-default-500">/{billingCycle.toLowerCase().slice(0, -2)}</span>
    </div>
  );
}

