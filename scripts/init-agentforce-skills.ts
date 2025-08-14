#!/usr/bin/env bun

import { existsSync, mkdirSync } from 'fs';
import { cp } from 'fs/promises';
import { join } from 'path';

const sourceDir = join(process.cwd(), 'node_modules', '@agentforce', 'adk', 'lib', '_assets', 'skills');
const targetDir = join(process.cwd(), 'skills');

async function initSkills() {
  try {
    if (!existsSync(sourceDir)) {
      console.error('Error: Source skills directory not found at:', sourceDir);
      console.error('Make sure @agentforce/adk is installed');
      process.exit(1);
    }

    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
      console.log('Created skills directory');
    }

    await cp(sourceDir, targetDir, { 
      recursive: true, 
      force: true 
    });
    
    console.log('Successfully copied Agentforce skills to ./skills');
  } catch (error) {
    console.error('Error copying skills:', error);
    process.exit(1);
  }
}

initSkills();