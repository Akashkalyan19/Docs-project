"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();
  console.log(params.documentId);
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_T3OTMDaC1jPGq9E9gnFGZPrkoTkCvs-yVCykHJGgMjKjMaBga6sP_Pg9FnXi8D1D"
      }
    >
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
