#!/bin/bash

# This script sets up an independent environment for testing the preview app, outside of this monorepo
# That's important because how pnpm arranges node_modules within the monorepo give false positives
# when Vite is loading imports and setting up the preview app for a development mode run. Setting this
# up in a separate directory alleviates those differences and more closesly represents a user's machine
# which provides a more accurate test environment

rm -rf /tmp/email-craft-test
REPO_DIR=$(pwd)
pnpm exec create-email-craft email-craft-test --yes
mv -f email-craft-test /tmp
cd /tmp/email-craft-test
pnpm i

# The dependencies below are required for fixtures
pnpm add unocss

# The dependencies below have to be pointed back to the repo
pnpm add "@email-craft/studio@file:$REPO_DIR/apps/preview"
pnpm add "@email-craft/minify-preset@file:$REPO_DIR/packages/minify-preset"

# We have to link this due to the workspace dependency
pnpm link "$REPO_DIR/packages/email-craft"

rm -rf templates
cp -r $REPO_DIR/apps/test/fixtures .
