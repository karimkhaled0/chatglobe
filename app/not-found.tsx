import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NotFoundImage from "@/images/404.svg";
type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mt-2">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-300 my-12">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Go Home
        </Link>
      </div>
      <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <Image
          src={NotFoundImage}
          alt="404"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default NotFound;
