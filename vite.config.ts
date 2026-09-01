import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'child_process';

const lastUpdated = execSync(
	'git log -1 --date=format:"%b %Y" --format=%cd'
)
	.toString()
	.trim();

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  define: {
    __LAST_UPDATED__: JSON.stringify(lastUpdated)
  }
});