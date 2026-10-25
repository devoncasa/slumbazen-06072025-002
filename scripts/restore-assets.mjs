import fs from 'node:fs';import path from 'node:path';
for(const f of fs.readdirSync('asset-source'))for(const [dest,data] of Object.entries(JSON.parse(fs.readFileSync('asset-source/'+f,'utf8')))){fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,Buffer.from(data,'base64'));}
