# Contributing

Install dependencies with `npm ci`, then run `npm run lint`, `npm run test:ci`,
and `npm run build` before opening a pull request. Changes to the operation
engine must preserve the public state shape and include assertions for normal,
invalid, and boundary input.

Use conventional commit subjects such as `fix: handle division by zero` and
keep pull requests focused on one behaviour change. Security reports belong in
GitHub's private vulnerability-reporting flow, not a public issue.
