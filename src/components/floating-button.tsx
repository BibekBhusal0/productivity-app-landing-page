import { Link } from "@heroui/react";
import { FamilyButton } from "./ui/family-button";

function FloatingButton() {
  return (
    <FamilyButton>
      <div className="text-md size-full p-2">
        This Landing page was build for HeroUI Hackathon 2025, this product is not real. Visit
        source code at{" "}
        <Link href="https://github.com/BibekBhusal0/productivity-app-landing-page" isExternal>
          Github
        </Link>
        .
      </div>
    </FamilyButton>
  );
}

export default FloatingButton;
