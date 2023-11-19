import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker';
// import path from 'path'

export default {
  plugins: [
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    }),
    checker({
      typescript: true,
      overlay: false,
      eslint: {
        lintCommand: 'eslint --ext .js,.ts .',
      }
    }),
  ],
  envPrefix: 'APP_',
  /* resolve: {
    alias: {
      '@': '/src/assets', // path.resolvew(__dirname, 'src/assets')
    },
  } */
};