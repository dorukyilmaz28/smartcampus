#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Smart Campus Solutions development server...\n');

const devProcess = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit',
  shell: true
});

devProcess.on('close', (code) => {
  console.log(`\n📱 Development server exited with code ${code}`);
});

devProcess.on('error', (err) => {
  console.error('❌ Failed to start development server:', err);
});
