#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning up and reinstalling dependencies...\n');

try {
  // Remove node_modules and package-lock.json
  if (fs.existsSync('node_modules')) {
    console.log('📁 Removing node_modules...');
    fs.rmSync('node_modules', { recursive: true, force: true });
  }
  
  if (fs.existsSync('package-lock.json')) {
    console.log('📄 Removing package-lock.json...');
    fs.unlinkSync('package-lock.json');
  }

  // Clear npm cache
  console.log('🗑️  Clearing npm cache...');
  execSync('npm cache clean --force', { stdio: 'inherit' });

  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('\n✅ Clean installation completed successfully!');
  console.log('🚀 You can now run: npm run dev');
  
} catch (error) {
  console.error('❌ Error during clean installation:', error.message);
  process.exit(1);
}
