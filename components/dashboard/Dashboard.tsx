"use client";

import { trpc } from "@/app/_trpc/client";
import UploadButton from "./UploadButton";
import { Ghost, Loader2, MessageSquare, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { useState } from "react";
import { getUserSubscriptionPlan } from "@/lib/stripe";
import { Skeleton } from "../ui/skeleton";

interface PageProps {
  subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>;
}

const Dashboard = ({ subscriptionPlan }: PageProps) => {
  const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<
    string | null
  >(null);

  const utils = trpc.useUtils();

  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  const { mutate: deleteFile } = trpc.deleteFile.useMutation({
    onSuccess: () => {
      utils.getUserFiles.invalidate();
    },
    onMutate({ id }) {
      setCurrentlyDeletingFile(id);
    },
    onSettled() {
      setCurrentlyDeletingFile(null);
    },
  });

  return (
    <div className="mx-auto max-w-7xl md:p-10">
      <div
        className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 dark:border-gray-500 pb-5 
      sm:flex-row sm:items-center sm:gap-0"
      >
        <h1 className="mb-3 font-bold text-5xl text-gray-900 dark:text-gray-100">
          My Files
        </h1>

        <UploadButton isSubscribed={subscriptionPlan.isSubscribed} />
      </div>

      {/* display all user files */}

      {files && files?.length !== 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file) => (
              <li
                key={file.id}
                className="col-span-1 rounded-lg border dark:border-gray-500 shadow transition hover:shadow-lg"
              >
                <Link
                  href={`/dashboard/${file.id}`}
                  className="flex flex-col gap-2"
                >
                  <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                    <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-gradient-to-r from-lime-500 to-green-500" />
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-lg font-medium text-zinc-900 dark:text-white first-letter:uppercase">
                          {file.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500 dark:text-white">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    {format(new Date(file.createdAt), "MMM yyyy")}
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {file.messages.length}
                  </div>

                  <Button
                    onClick={() => deleteFile({ id: file.id })}
                    size="sm"
                    className="w-full "
                    variant={"destructive"}
                  >
                    {currentlyDeletingFile === file.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      ) : isLoading ? (
        <div className="flex items-center space-x-5 mt-10">
          <Skeleton className="my-2 h-[100px] w-full skeleton-gradient" />

          <Skeleton className="my-2 h-[100px] w-full skeleton-gradient" />

          <Skeleton className="my-2 h-[100px] w-full skeleton-gradient" />
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-800 dark:text-gray-200">
          <Ghost className="h-8 w-8" />
          <h3 className="font-semibold text-xl">Pretty empty around here</h3>
          <p>Let{"'"}s upload your first PDF.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
