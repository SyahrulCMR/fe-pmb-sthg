"use client";

import { IconButton } from "@/components/components";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
function CopyComponent({ text }) {
  const onCopyText = () => {
    toast("Berhasil disalin");
  };
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <div className="p-5 rounded-md bg-blue-gray-100">{text}</div>

      <CopyToClipboard text={text} onCopy={onCopyText}>
        <IconButton>
          <ClipboardDocumentIcon className="h-5 w-5" />
        </IconButton>
      </CopyToClipboard>
    </div>
  );
}

export default CopyComponent;
