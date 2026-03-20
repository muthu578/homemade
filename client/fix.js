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
    let newContent = content
        .replace(/py-24 md:py-48/g, 'py-12 md:py-20')
        .replace(/py-32 md:py-64/g, 'py-16 md:py-24')
        .replace(/py-20 md:py-32/g, 'py-10 md:py-16')
        .replace(/text-4xl md:text-6xl lg:text-\[75px\]/g, 'text-2xl md:text-4xl lg:text-5xl')
        .replace(/text-[34]xl md:text-[56]xl lg:text-[67]xl/g, 'text-2xl md:text-4xl lg:text-5xl')
        .replace(/text-3xl md:text-5xl lg:text-6xl/g, 'text-2xl md:text-4xl lg:text-5xl')
        .replace(/text-\[75px\]/g, 'text-5xl')
        .replace(/text-5xl md:text-7xl/g, 'text-3xl md:text-5xl')
        .replace(/min-\[1200px\]:text-\[50px\] 2xl:text-\[75px\]/g, 'min-[1200px]:text-4xl 2xl:text-5xl');

    // add loading lazy to img if not present
    newContent = newContent.replace(/<img([^>]*)>/g, (match, p1) => {
        if (!p1.includes('loading="lazy"')) {
            return '<img' + p1 + ' loading="lazy">';
        }
        return match;
    });

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Fixed', file);
    }
});
