# Epic: Tiny Hello API CLI

## Summary
Deliver a minimal, dependency-free Node.js CLI that prints exactly `ok`, exits successfully after one execution, and requires no framework, server, or package installation.

## Stories

- **User Story 1: Print the expected output** — Ensure `node index.js` writes exactly `ok` with no extra output and a normal line ending.
- **User Story 2: Exit successfully after one execution** — Ensure the CLI exits with status code `0` and terminates immediately without starting a long-running server or waiting for input.
- **User Story 3: Run with minimal Node.js setup** — Ensure the implementation is contained in `index.js`, uses no framework or runtime dependencies, and runs with only Node.js.
