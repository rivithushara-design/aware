export type TransactionType = "debit" | "credit";

export interface ParsedTransaction {
  type: TransactionType;
  /** Amount in the smallest currency unit (e.g. cents). Always positive. */
  amountMinor: number;
  /** ISO 4217 currency code, e.g. "LKR". */
  currency: string;
  /** Masked account or card identifier if present, e.g. "XXXX1234". */
  account?: string;
  /** Merchant or counterparty if present. */
  merchant?: string;
  /** Balance after the transaction, in minor units, if present. */
  balanceMinor?: number;
  /** ISO 8601 timestamp if the SMS contains one. */
  occurredAt?: string;
}

export interface BankParser {
  /** Unique id, e.g. "lk-examplebank". */
  id: string;
  /** Display name. */
  name: string;
  /** ISO 3166-1 alpha-2 country code. */
  country: string;
  /** Sender IDs or numbers this bank sends SMS from. */
  senders: string[];
  /** Returns a transaction, or null if the message is not a transaction. */
  parse(sms: string): ParsedTransaction | null;
}
