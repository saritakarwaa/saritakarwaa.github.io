#!/bin/bash

echo "🔧 Building Vite app..."
npm run build

echo "🧹 Cleaning old static files from root..."
rm -rf assets index.html *.js *.css *.map

echo "📦 Copying new build files to root..."
cp -r dist/* ./

echo "🗑️ Removing dist folder..."
rm -rf dist

echo "✅ Deployment files are ready in root!"
