import React from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ThemeSwitch from "./theme-switcher";

const motionProps = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="border-b border-divider bg-background/70 backdrop-blur-md"
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <motion.div {...motionProps} className="flex items-center gap-2">
            <Icon icon="lucide:focus" className="text-2xl text-primary" />
            <p className="text-xl font-bold">Focusly</p>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.1 + index * 0.1 }}>
              <Link color="foreground" href={item.href} className="text-sm font-medium">
                {item.name}
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <motion.div {...motionProps} className = 'flex gap-3 items-center' transition={{ ...motionProps.transition, delay: 0.2 }}>
          <NavbarItem className="">
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="">
            <Link href="#" color="foreground" className="text-sm font-medium">
              Log in
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              className="font-medium"
              startContent={<Icon icon="lucide:log-in" />}
            >
              Sign Up
            </Button>
          </NavbarItem>
        </motion.div>
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color="foreground"
              className="w-full py-2 text-lg"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link color="foreground" className="w-full py-2 text-lg" href="#">
            Log in
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
};

