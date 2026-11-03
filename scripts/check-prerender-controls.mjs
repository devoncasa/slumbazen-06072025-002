// Exercise preview-only indexing controls in isolation from the production build.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
const temporary=fs.mkdtempSync(path.join(os.tmpdir(),'slumbazen-preview-'));
try{
 fs.mkdirSync(path.join(temporary,'dist'));
 fs.copyFileSync('index.html',path.join(temporary,'dist/index.html'));
 const result=spawnSync(process.execPath,[path.resolve('.prerender.mjs')],{cwd:temporary,env:{...process.env,CONTEXT:'deploy-preview'},encoding:'utf8'});
 assert.equal(result.status,0,result.stderr);
 const files=[];function walk(dir){for(const file of fs.readdirSync(dir,{withFileTypes:true})){const dest=path.join(dir,file.name);if(file.isDirectory())walk(dest);else if(file.name.endsWith('.html'))files.push(dest);}}walk(path.join(temporary,'dist'));
 const localized=files.filter(v=>!['index.html','404.html'].includes(path.relative(path.join(temporary,'dist'),v)));
 assert.equal(localized.length,620);
 for(const file of localized)assert(fs.readFileSync(file,'utf8').includes('<meta name="robots" content="noindex, nofollow">'),file);
 assert(fs.readFileSync(path.join(temporary,'dist/_headers'),'utf8').includes('X-Robots-Tag: noindex, nofollow'));
 assert(fs.readFileSync(path.join(temporary,'dist/robots.txt'),'utf8').includes('Disallow: /'));
 console.log(JSON.stringify({previewNoindexPages:620,previewRobotsBlocked:true,previewNoindexHeader:true}));
}finally{fs.rmSync(temporary,{recursive:true,force:true});}
