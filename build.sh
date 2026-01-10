#!/bin/bash
# Custom build script for Cloudflare Pages

# Skip postinstall hooks and install dependencies
echo "Installing dependencies without postinstall scripts..."
npm ci --ignore-scripts

# Manually run nuxt prepare (will fail but that's ok)
echo "Attempting to generate types..."
npm run postinstall || echo "Type generation skipped (optional dependency issue)"

# Build the project
echo "Building project..."
npm run build
