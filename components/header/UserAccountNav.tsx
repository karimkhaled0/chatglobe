import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Image from "next/image";
import { Icons } from "./Icons";
import Link from "next/link";
import { Gem } from "lucide-react";
import { cn } from "@/lib/utils";
type Props = {
  name: string;
  email: string;
  imageUrl: string;
};

const UserAccountNav = ({ name, email, imageUrl }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button
          variant={"ghost"}
          className="rounded-full h-8 w-8 aspect-square"
        >
          <Avatar className={cn("")}>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={name || "User Name"}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback delayMs={1000} className=" text-lg">
              <span className="sr-only">{name}</span>
              <Icons.user className="h-4 w-4 " />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            {name && <p className="font-medium text-sm ">{name}</p>}
            {email && <p className="w-[200px] truncate text-xs">{email}</p>}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          {/* {subscriptionPlan?.isSubscribed ? (
            <Link href="/dashboard/billing">Manage Subscription</Link>
          ) : (
            <Link href="/pricing">
              Upgrade <Gem className="text-blue-600 h-4 w-4 ml-1.5" />
            </Link>
          )} */}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          <LogoutLink>Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
