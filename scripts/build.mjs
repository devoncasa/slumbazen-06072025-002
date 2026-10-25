import {build} from 'esbuild';
await build({entryPoints:['scripts/prerender.tsx'],bundle:true,platform:'node',format:'esm',outfile:'.prerender.mjs',packages:'external'});
await import('../.prerender.mjs');
