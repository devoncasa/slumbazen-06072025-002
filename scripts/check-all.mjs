import {build} from 'esbuild';
import {spawnSync} from 'node:child_process';
await build({entryPoints:['scripts/check.tsx'],outfile:'.check.mjs',bundle:true,platform:'node',format:'esm',packages:'external'});
await import('../.check.mjs');
const result=spawnSync(process.execPath,['scripts/check-interactions.mjs'],{stdio:'inherit'});if(result.status!==0)process.exit(result.status||1);
