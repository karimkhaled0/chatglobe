"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

type Props = {
  isSubscribed?: boolean;
};

const UploadButton = ({ isSubscribed }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button variant={"default"}>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
        {/* <UploadDropzone isSubscribed={isSubscribed} /> */}
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
