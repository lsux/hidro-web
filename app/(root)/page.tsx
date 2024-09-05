"use client"

import { Button } from "@/components/ui/button";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);
  
  return (
    <div className="p-4">
          <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
            Children
          </Modal>
    </div>
  );
}

export default SetupPage;
