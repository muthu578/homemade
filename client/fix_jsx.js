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
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Fix / loading="lazy" or / >
    let newContent = content.replace(/\/ loading="lazy">/g, 'loading="lazy" />');
    newContent = newContent.replace(/\/ >/g, '/>');

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Fixed syntax in', file);
    }
});
