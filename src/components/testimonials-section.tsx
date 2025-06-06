import React from "react";
import { CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Card } from "./customCard";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=1",
      quote:
        "Focusly transformed how our team manages projects. The focus timer and task management features have boosted our productivity by at least 30%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      company: "Self-employed",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=2",
      quote:
        "As a freelancer juggling multiple clients, Focusly helps me stay organized and meet deadlines. The Pomodoro timer is a game-changer for my workflow.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthLabs",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=3",
      quote:
        "Our marketing team has become significantly more efficient since adopting Focusly. The intuitive interface and smart reminders keep everyone on track.",
      rating: 4,
    },
    {
      name: "David Kim",
      role: "Software Engineer",
      company: "CodeWave",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=4",
      quote:
        "I've tried dozens of productivity apps, but Focusly strikes the perfect balance between features and simplicity. The deep work timer is exactly what I needed.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Content Creator",
      company: "CreativeMinds",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=5",
      quote:
        "Focusly helped me organize my content calendar and stick to deadlines. The daily planner feature is intuitive and keeps me accountable.",
      rating: 5,
    },
    {
      name: "Thomas Wilson",
      role: "Startup Founder",
      company: "InnovateLabs",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=6",
      quote:
        "Running a startup means wearing many hats. Focusly helps me prioritize tasks and maintain focus on what truly matters for our growth.",
      rating: 4,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const [activeIndex, setActiveIndex] = React.useState(0);
  const maxVisibleTestimonials = 3;

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev + maxVisibleTestimonials >= testimonials.length ? 0 : prev + maxVisibleTestimonials
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev - maxVisibleTestimonials < 0
        ? Math.max(0, testimonials.length - maxVisibleTestimonials)
        : prev - maxVisibleTestimonials
    );
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    Math.min(activeIndex + maxVisibleTestimonials, testimonials.length)
  );

  return (
    <section id="testimonials" className="section-padding bg-content2">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What Our <span className="gradient-text">Users</span> Say
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Join thousands of satisfied users who have transformed their productivity with Focusly
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 gap-6 md:h-60 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            key={activeIndex} // Force re-render on index change
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div key={index} variants={item}>
                <Card hover className="h-full">
                  <CardBody className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={testimonial.avatar}
                        name={testimonial.name}
                        size="lg"
                        isBordered
                        color="primary"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-foreground-500">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="my-1 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon={
                            i < testimonial.rating
                              ? "fluent:star-24-filled"
                              : "fluent:star-24-regular"
                          }
                          className="text-warning"
                        />
                      ))}
                    </div>

                    <p className="italic text-foreground-600">"{testimonial.quote}"</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {testimonials.length > maxVisibleTestimonials && (
            <div className="mt-8 flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="rounded-full border border-divider bg-content1 p-2"
                aria-label="Previous testimonials"
              >
                <Icon icon="lucide:chevron-left" className="text-foreground" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="rounded-full border border-divider bg-content1 p-2"
                aria-label="Next testimonials"
              >
                <Icon icon="lucide:chevron-right" className="text-foreground" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
