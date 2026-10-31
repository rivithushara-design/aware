# Aware

Open-source personal finance tracker for people whose banks don't offer open APIs.

Aware reads bank SMS alerts on your device and turns them into transactions, so you can track spending, income, budgets and savings across multiple accounts and cards in one place. It is read-only. No payments, no transfers, no money movement.

> Status: early development. Expect rough edges and breaking changes.

## Why

Many banks, including most in Sri Lanka, have poor apps and no public APIs. There is no way to see all your accounts together. But almost every bank sends an SMS for each transaction. Aware uses those alerts as the data source, so it works without any bank integration.

## Principles

- **Read-only.** Aware never moves money.
- **On-device first.** SMS content is parsed on your phone. Raw messages are not uploaded anywhere.
- **Extensible.** Each bank is a small, documented parser module. Adding a bank should take under an hour.
- **Works worldwide.** Starting with Sri Lankan banks, built for any country.

## Features (planned)

- [ ] SMS capture and transaction parsing
- [ ] Multi-account and multi-card overview
- [ ] Budgets and savings goals
- [ ] AI-assisted categorization
- [ ] Parser modules for Sri Lankan banks
- [ ] Contributor tooling for adding new banks

## Tech stack

- React Native with NativeWind
- TypeScript
- Bank parsers as isolated TypeScript modules in `parsers/`

## Getting started

```bash
git clone https://github.com/rivithushara-design/aware.git
cd aware
cp .env.example .env
# install and run steps will be added as the app scaffold lands
```

## Contributing

The easiest way to help is to add a parser for your bank. See [docs/adding-a-bank.md](docs/adding-a-bank.md) and [CONTRIBUTING.md](CONTRIBUTING.md).

**Never post real SMS messages.** Always redact account numbers, names and balances before sharing a sample.

## Roadmap

1. App scaffold and design system
2. SMS capture and the parser interface
3. First Sri Lankan bank parsers
4. Budgets and categorization
5. Public beta

## Security

See [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE)
