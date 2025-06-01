import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Tabs,
  Tab,
  Divider,
  Link
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  initialMode: "login" | "signup";
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onOpenChange,
  initialMode
}) => {
  const [selected, setSelected] = React.useState(initialMode);

  React.useEffect(() => {
    if (isOpen) {
      setSelected(initialMode);
    }
  }, [isOpen, initialMode]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900/50 to-zinc-900/30",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
              <div className="flex justify-center mb-2">
                <Icon icon="lucide:focus" className="text-primary text-2xl" />
              </div>
              <h2 className="text-xl font-bold">Welcome to Focusly</h2>
              <p className="text-sm text-foreground-500">
                {selected === "login"
                  ? "Sign in to continue to your account"
                  : "Create an account to get started"
                }
              </p>
            </ModalHeader>
            <ModalBody className="px-6 py-4">
              <Tabs
                selectedKey={selected}
                onSelectionChange={setSelected as any}
                aria-label="Authentication options"
                variant="underlined"
                classNames={{
                  tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                  cursor: "w-full bg-primary",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-primary"
                }}
              >
                <Tab
                  key="login"
                  title="Login"
                >
                  <LoginForm onClose={onClose} />
                </Tab>
                <Tab
                  key="signup"
                  title="Sign Up"
                >
                  <SignupForm onClose={onClose} />
                </Tab>
              </Tabs>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const SocialButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 w-full mt-2 mb-4">
      <Button
        startContent={<Icon icon="logos:google-icon" />}
        variant="bordered"
        className="w-full"
      >
        Continue with Google
      </Button>
      <Button
        startContent={<Icon icon="logos:github-icon" />}
        variant="bordered"
        className="w-full"
      >
        Continue with GitHub
      </Button>
    </div>
  );
};

const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="py-4 flex flex-col gap-4"
    >
      <SocialButtons />

      <div className="flex items-center gap-2">
        <Divider className="flex-1" />
        <span className="text-xs text-foreground-500">OR</span>
        <Divider className="flex-1" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="bordered"
          isRequired
          startContent={<Icon icon="lucide:mail" className="text-foreground-400" />}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="bordered"
          isRequired
          startContent={<Icon icon="lucide:lock" className="text-foreground-400" />}
        />

        <div className="flex justify-end">
          <Link href="#" size="sm" className="text-primary">
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          color="primary"
          className="mt-2 font-medium"
          isLoading={isLoading}
          fullWidth
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </motion.div>
  );
};

const SignupForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="py-4 flex flex-col gap-4"
    >
      <SocialButtons />

      <div className="flex items-center gap-2">
        <Divider className="flex-1" />
        <span className="text-xs text-foreground-500">OR</span>
        <Divider className="flex-1" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="bordered"
          isRequired
          startContent={<Icon icon="lucide:user" className="text-foreground-400" />}
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="bordered"
          isRequired
          startContent={<Icon icon="lucide:mail" className="text-foreground-400" />}
        />

        <Input
          label="Password"
          placeholder="Create a password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="bordered"
          isRequired
          startContent={<Icon icon="lucide:lock" className="text-foreground-400" />}
        />

        <p className="text-xs text-foreground-500">
          By signing up, you agree to our <Link href="#" size="sm">Terms of Service</Link> and <Link href="#" size="sm">Privacy Policy</Link>.
        </p>

        <Button
          type="submit"
          color="primary"
          className="mt-2 font-medium"
          isLoading={isLoading}
          fullWidth
        >
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>
      </form>
    </motion.div>
  );
};
