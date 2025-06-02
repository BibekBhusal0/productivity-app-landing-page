import React from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#integrations" },
        { name: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Help Center", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Media Kit", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "lucide:twitter", href: "#" },
    { name: "Instagram", icon: "lucide:instagram", href: "#" },
    { name: "GitHub", icon: "lucide:github", href: "#" },
    { name: "Linked In", icon: "lucide:linkedin", href: "#" },
    { name: "Facebook", icon: "lucide:facebook", href: "#" },
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

  return (
    <footer className="border-t border-divider bg-background pb-8 pt-16">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Icon icon="lucide:focus" className="text-2xl text-primary" />
              <span className="text-xl font-bold">Focusly</span>
            </div>
            <p className="mb-6 max-w-xs text-foreground-600">
              The all-in-one productivity app that helps you focus, organize tasks, and achieve more
              in less time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  as={Link}
                  href={social.href}
                  isIconOnly
                  color="primary"
                  radius="full"
                  variant="light"
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="text-xl" />
                </Button>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div key={columnIndex} variants={item}>
              <h3 className="mb-4 font-semibold">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-600 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between border-t border-divider pt-6 md:flex-row"
        >
          <p className="mb-4 text-sm text-foreground-500 md:mb-0">
            © {new Date().getFullYear()} Focusly. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
