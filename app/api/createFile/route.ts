import { db } from "@/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  // endpoint for asking a question to a pdf file

  const body = await req.json();
  const { file, metadata } = body;
  const createdFile = await db.file.create({
    data: {
      key: file.key,
      name: file.name,
      userId: metadata.userId,
      url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
      uploadStatus: "PROCESSING",
    },
  });
  if (!createdFile) return new Response("Failed", { status: 400 });

  // return createdFile
  return new Response(JSON.stringify(createdFile), { status: 200 });
};
