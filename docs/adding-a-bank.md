# Adding a bank

Each bank is one parser module in `parsers/`. A parser takes an SMS string and returns a transaction, or `null` if the message is not a transaction.

## Steps

1. Copy `parsers/_template.ts` to `parsers/<country>-<bank>.ts`, for example `parsers/lk-examplebank.ts`.
2. Fill in the bank `id`, `name`, `country` and sender IDs (the name or number the SMS comes from).
3. Write the regex patterns for debit, credit and any other alert types.
4. Add tests with **fake, redacted** sample messages.
5. Register the parser in `parsers/index.ts`.
6. Open a pull request.

## Redaction rules

Before using a real message as a reference, replace:

- Account and card numbers with `XXXX1234` style masks
- Names with `JOHN DOE`
- Phone numbers
- Real balances and amounts with plausible fake ones

Never commit the original message.

## Parser contract

See `parsers/types.ts`. A parser must:

- Be pure: no network, no storage, no side effects.
- Return `null` for anything it does not recognize (OTPs, promotions, balance-only alerts).
- Return amounts as integers in the smallest currency unit (cents) to avoid float errors.
- Include an ISO currency code.

## Testing checklist

- [ ] Debit sample parses correctly
- [ ] Credit sample parses correctly
- [ ] OTP and promo messages return `null`
- [ ] Amounts with thousand separators parse correctly
