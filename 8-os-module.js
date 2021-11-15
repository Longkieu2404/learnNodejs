const os = require('os')

//info about curent user 
const user = os.userInfo()



// method returns the system uptime in secounds

console.log(`the system uptime is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);