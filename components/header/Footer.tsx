import Link from "next/link";
import Logo from "./Logo";
import { Button } from "../ui/button";

type Props = {};

const Footer = (props: Props) => {
  const footerNavs = [
    {
      href: "/terms",
      name: "Terms",
    },
    {
      href: "/license",
      name: "License",
    },
    {
      href: "/privacy",
      name: "Privacy",
    },
    {
      href: "/about",
      name: "About us",
    },
  ];
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <p className="text-gray-800 dark:text-gray-400">
            ChatGlobe is a chat application that allows you to chat with People
            or Docs in any language.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
            <Link href="/dashboard">
              <Button variant={"default"}>Let{"'"}s get started</Button>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 dark:text-gray-400 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
            >
              Get access
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2022 Float UI Inc. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-800 dark:text-gray-400 hover:text-gray-500 duration-150"
              >
                <Link href={item.href} target="_blank">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
