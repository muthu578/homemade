const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Remove loading="lazy" from the first occurrence of <img ...> 
    let firstImgReplaced = false;
    let newContent = content.replace(/<img([^>]*)>/, (match, p1) => {
        if (!firstImgReplaced && p1.includes('loading="lazy"')) {
            firstImgReplaced = true;
            return '<img' + p1.replace('loading="lazy"', '') + '>';
        }
        return match;
    });

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Fixed LCP for', file);
    }
});
