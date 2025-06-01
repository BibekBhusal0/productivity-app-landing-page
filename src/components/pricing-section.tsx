import React from "react";
import { Card, CardBody, CardHeader, CardFooter, Button, Tabs, Chip, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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
                className={`h-full border pt-5 overflow-visible ${plan.popular ? "border-primary shadow-lg" : "border-divider shadow-sm"}`}
                isHoverable
              >
                {plan.popular && (
                  <Chip className="absolute left-1/2 -translate-x-1/2 -translate-y-8" color = 'primary'>
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
        </motion.div>
      </div>
    </section>
  );
};
