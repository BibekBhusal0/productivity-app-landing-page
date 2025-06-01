import React from "react";
import { Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="newsletter" className="section-padding bg-content1">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Stay <span className="gradient-text">Updated</span>
          </h2>
          <p className="mb-8 text-foreground-600">
            Join 10,000+ productivity enthusiasts and get tips, tricks, and early access to new
            features
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              radius="md"
              isInvalid={!!error}
              errorMessage={error}
              startContent={<Icon icon="lucide:mail" className="text-foreground-400" />}
              variant = 'faded'
              className="flex-grow"
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              isLoading={isSubmitting}
              className="font-medium"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          {isSuccess && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-success"
            >
              Thank you for subscribing! Check your inbox soon.
            </motion.p>
          )}

          <p className="mt-4 text-xs text-foreground-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
