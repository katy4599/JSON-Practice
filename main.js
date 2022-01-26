import fs from 'fs/promises'
import { existsSync } from 'fs';

async function load() {
    const data = await fs.readFile('data.json');
    const str = data.toString();
    return JSON.parse(str);
}  

async function save(data) {
    const stringified = JSON.stringify(data);
    await fs.writeFile('./data.json', stringified);
}

async function main() {
    const exists = existsSync('/data.json');
    
    if (exists) {
        const data = await load ();
        console.log(data);
    } else {
        const data = {
            name: 'Katy Millard',
            age: 41,
            gender: 'female'
        }
        await save(data);
        console.log('New data saved.');
    }
}

main();