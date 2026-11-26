import { ConnectClient } from "@/components/docs/sections";
import type { Client, Content } from "@/content";

/** 1 — Timeline: the production presentation, as the baseline. */
export function TimelineVariant({ client, c }: { client: Client; c: Content }) {
  return <ConnectClient client={client} c={c} />;
}
