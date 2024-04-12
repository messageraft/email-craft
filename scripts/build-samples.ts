// Note: This script builds the preview app for deploy to https://samples.emailcraft.dev against
// apps/demo/emails

import { resolve } from 'path';

import { build } from 'vite';

(async () => {
  const { viteConfig } = await import('../packages/email-craft/src/cli/commands/vite');
  await build({
    ...viteConfig,
    build: {
      outDir: '/tmp/samples.emailcraft.dev',
      target: 'esnext'
    },
    configFile: false,
    define: {
      'process.platform': null,
      'process.version': null
    },
    resolve: {
      alias: {
        '@': resolve('../apps/demo/emails'),
        ...viteConfig.resolve?.alias
      }
    }
  });
})();
