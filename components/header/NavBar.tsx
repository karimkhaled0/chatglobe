import Link from "next/link";
import MaxWidthWrapper from "../providers/MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import UserAccountNav from "./UserAccountNav";
import DarkModeToggle from "./DarkModeToggle";

type Props = {};

const NavBar = (props: Props) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <nav className="sticky h-20 inset-x-0 top-0 dark:bg-black/75 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between border-b border-zinc-200">
          <Logo />

          {/* <MobileNav isAuth={!!user} /> */}

          <div className="hidden items-center space-x-4 sm:flex">
            <DarkModeToggle />
            {!user ? (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <LoginLink
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sign in
                </LoginLink>
                <RegisterLink
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                </RegisterLink>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>

                <UserAccountNav
                  name={
                    !user.given_name || !user.family_name
                      ? "Your Account"
                      : `${user.given_name} ${user.family_name}`
                  }
                  email={user.email ?? ""}
                  imageUrl={user.picture ?? ""}
                />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
