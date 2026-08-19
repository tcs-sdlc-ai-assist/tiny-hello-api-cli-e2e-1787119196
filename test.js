const { execFileSync } = require('child_process');

try {
  const stdout = execFileSync(process.execPath, ['index.js'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (stdout !== 'ok\n') {
    process.exit(1);
  }

  process.exit(0);
} catch {
  process.exit(1);
}
