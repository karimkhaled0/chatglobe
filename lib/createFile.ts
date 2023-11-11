import { middleware } from "@/app/api/uploadthing/core";
import { db } from "@/db";

export const createFile = async ({
  file,
  metadata,
}: {
  metadata: Awaited<ReturnType<typeof middleware>>;
  file: {
    key: string;
    name: string;
    url: string;
  };
}) => {
  try {
    const createdFile = await db.file.create({
      data: {
        key: file.key,
        name: file.name,
        userId: metadata.userId,
        url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
        uploadStatus: "PROCESSING",
      },
    });
    return createdFile;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating file");
  }
};
