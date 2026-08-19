# User Stories: Tiny Hello API

## User Story 1: Print the expected output

**As a** user running the Tiny Hello API CLI  
**I want** the CLI to print exactly `ok`  
**So that** I can confirm the tool completed its intended task.

### Acceptance Criteria

- Running `node index.js` writes exactly `ok` to standard output.
- The output contains no extra words, labels, or diagnostic text.
- The output ends with a normal line ending and contains no unintended extra output.

## User Story 2: Exit successfully after one execution

**As a** script or automation that invokes the Tiny Hello API CLI  
**I want** the CLI to exit with status code `0` after printing the result  
**So that** automation can reliably detect a successful run.

### Acceptance Criteria

- `node index.js` exits with status code `0`.
- The process terminates after printing `ok`.
- The CLI does not start a long-running server or wait for additional input.

## User Story 3: Run with minimal Node.js setup

**As a** developer using the Tiny Hello API CLI  
**I want** it to run as a single, dependency-free Node.js file  
**So that** I can use it without framework setup or package installation.

### Acceptance Criteria

- The implementation is contained in `index.js`.
- The CLI uses no framework and has zero runtime dependencies.
- Running it requires only Node.js and does not require `npm start` or `npm install`.
