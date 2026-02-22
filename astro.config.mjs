// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',        // SSG mode
    build: { format: 'file' },
    site: 'https://digitlib.github.io',
    base: '/aip'
});
