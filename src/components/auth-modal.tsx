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
  Link,
} from "@heroui/react";
import { Icon } from "@iconify/react";

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  initialMode?: "login" | "signup";
  showTabs?: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onOpenChange,
  initialMode = "login",
  showTabs = true,
}) => {
  const [selected, setSelected] = React.useState(initialMode);

  React.useEffect(() => {
    if (isOpen) setSelected(initialMode);
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
              <div className="mb-2 flex justify-center">
                <Icon icon="lucide:focus" className="text-2xl text-primary" />
              </div>
              <h2 className="text-xl font-bold">Welcome to Focusly</h2>
              <p className="text-sm text-foreground-500">
                {selected === "login"
                  ? "Sign in to continue to your account"
                  : "Create an account to get started"}
              </p>
            </ModalHeader>
            <ModalBody className="px-6 py-4">
              {showTabs && (
                <Tabs
                  selectedKey={selected}
                  onSelectionChange={setSelected as any}
                  aria-label="Authentication options"
                >
                  <Tab key="login" title="Login" />
                  <Tab key="signup" title="Sign Up" />
                </Tabs>
              )}
              <div className="flex flex-col gap-2 py-4">
                <SocialButtons />

                <div className="flex items-center gap-2">
                  <Divider className="flex-1" />
                  <span className="text-xs text-foreground-500">OR</span>
                  <Divider className="flex-1" />
                </div>
                {selected === "login" ? (
                  <LoginForm onClose={onClose} />
                ) : (
                  <SignupForm onClose={onClose} />
                )}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const SocialButtons: React.FC = () => {
  return (
    <div className="mb-4 mt-2 flex w-full flex-col gap-3">
      <Button
        startContent={<Icon icon="logos:google-icon" />}
        variant="bordered"
        size="lg"
        className="w-full"
      >
        Continue with Google
      </Button>
      <Button
        startContent={<Icon icon="logos:facebook" />}
        size="lg"
        variant="bordered"
        className="w-full"
      >
        Continue with Facebook
      </Button>
    </div>
  );
};

const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

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
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
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
        type={isPasswordVisible ? "text" : "password"}
        endContent={
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsPasswordVisible((prev) => !prev);
            }}
          >
            <Icon className="text-xl" icon={isPasswordVisible ? "lucide:eye-off" : "lucide:eye"} />
          </button>
        }
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
  );
};

const SignupForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

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
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
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
        type={isPasswordVisible ? "text" : "password"}
        endContent={
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsPasswordVisible((prev) => !prev);
            }}
          >
            <Icon className="text-xl" icon={isPasswordVisible ? "lucide:eye-off" : "lucide:eye"} />
          </button>
        }
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="bordered"
        isRequired
        startContent={<Icon icon="lucide:lock" className="text-foreground-400" />}
      />

      <p className="text-xs text-foreground-500">
        By signing up, you agree to our{" "}
        <Link href="#" size="sm">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#" size="sm">
          Privacy Policy
        </Link>
        .
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
  );
};
