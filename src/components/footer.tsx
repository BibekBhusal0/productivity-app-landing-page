import React from "react";
import { Link } from "@heroui/react";
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
    { name: "Twitter", icon: "logos:twitter", href: "#" },
    { name: "LinkedIn", icon: "logos:linkedin-icon", href: "#" },
    { name: "Instagram", icon: "logos:instagram-icon", href: "#" },
    { name: "GitHub", icon: "logos:github-icon", href: "#" },
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
    <footer className="bg-background border-t border-divider pt-16 pb-8">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:focus" className="text-primary text-2xl" />
              <span className="font-bold text-xl">Focusly</span>
            </div>
            <p className="text-foreground-600 mb-6 max-w-xs">
              The all-in-one productivity app that helps you focus, organize
              tasks, and achieve more in less time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} aria-label={social.name}>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-content2 hover:bg-content3 transition-colors">
                    <Icon icon={social.icon} className="text-xl" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div key={columnIndex} variants={item}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-foreground-600 hover:text-foreground transition-colors text-sm"
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
          className="mt-16 pt-6 border-t border-divider flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-foreground-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Focusly. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-foreground-500 hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground-500 hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground-500 hover:text-foreground"
            >
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
