#!/usr/bin/env node
const typing = console.typing = async (value, speed = 375) => {
    if(value == undefined)
        return 1;
    let words = '';
    process.stdout.write('\x1b[s');
    for(let word of value + '\n') {
        words += word;
        process.stdout.write('\x1b[u' + words);
        await new Promise(n => setTimeout(n, speed));
        process.stdout.write('\x1b[K');
    };
};
const deleting = console.deleting = async (value, speed = 250) => {
    if(value == undefined)
        return 1;
    let words = value + ' ';
    process.stdout.write('\x1b[s');
    for(let index in value + ' ') {
        words = words.slice(0, words.length - 1);
        await new Promise(n => setTimeout(n, speed));
        process.stdout.write('\x1b[u' + words);
        process.stdout.write('\x1b[K');
    };
    process.stdout.write('\n');
};
export { typing, deleting };