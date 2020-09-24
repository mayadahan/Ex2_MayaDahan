const fs = require('fs');

const source = process.argv[2];
const dest = process.argv[3];

let readWriteFileAsync =  new Promise(function(resolve, reject) {
        fs.readFile(source, (error, data) => {
            if (error) 
                reject(error); 
            else 
                resolve(data);
        });
    }).then(function(data) {
        return new Promise((resolve, reject) => {
            let opposite = data.reverse();
            fs.writeFile(dest, opposite, error => {
                if (error) 
                    reject(error);
                resolve(console.log("File was written successfully!"));
            });
        });
    }).catch(function(error){ console.log("Error reading file");});


