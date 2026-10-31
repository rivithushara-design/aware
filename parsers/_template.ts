import type { BankParser, ParsedTransaction } from "./types";

/**
 * Template for a new bank parser.
 * Copy this file, rename it to <country>-<bank>.ts and fill in the TODOs.
 *
 * Example message shape (FAKE, for illustration only):
 *   "Acc XXXX1234 debited LKR 1,500.00 at EXAMPLE STORE on 01/01/26. Bal LKR 20,000.00"
 */

// TODO: adjust patterns to match your bank's real format.
const DEBIT = /debited\s+([A-Z]{3})\s+([\d,]+(?:\.\d{1,2})?)/i;
const CREDIT = /credited\s+([A-Z]{3})\s+([\d,]+(?:\.\d{1,2})?)/i;
const ACCOUNT = /(?:acc(?:ount)?|card)\s+([X*]*\d{3,4})/i;

function toMinor(value: string): number {
  return Math.round(parseFloat(value.replace(/,/g, "")) * 100);
}

export const templateParser: BankParser = {
  id: "xx-template", // TODO: e.g. "lk-examplebank"
  name: "Template Bank", // TODO
  country: "XX", // TODO: ISO country code
  senders: ["TEMPLATE"], // TODO: SMS sender IDs

  parse(sms: string): ParsedTransaction | null {
    const debit = sms.match(DEBIT);
    const credit = sms.match(CREDIT);
    const hit = debit ?? credit;
    if (!hit) return null; // OTPs, promos and unknown formats

    return {
      type: debit ? "debit" : "credit",
      currency: hit[1].toUpperCase(),
      amountMinor: toMinor(hit[2]),
      account: sms.match(ACCOUNT)?.[1],
    };
  },
};
