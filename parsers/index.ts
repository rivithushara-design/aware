import type { BankParser } from "./types";

// Register bank parsers here.
// import { exampleBankParser } from "./lk-examplebank";

export const parsers: BankParser[] = [
  // exampleBankParser,
];

/** Finds the parser for a sender and parses the message. */
export function parseSms(sender: string, sms: string) {
  const parser = parsers.find((p) =>
    p.senders.some((s) => s.toLowerCase() === sender.toLowerCase())
  );
  return parser ? parser.parse(sms) : null;
}
