const {readFile, writeFile} = require('fs');
const { isBuffer } = require('util');
console.log('start');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result) =>{
        if(err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './content/result-sync.txt',
            `here is the result: ${first} , ${second}`,
            (err,result)=>{
                if(err)
                {
                    console.log(err);
                    return
                }
                console.log('ket thuc');
            })
    })
})
console.log('bat dau cai khac');