const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0');

//Create list command 

yargs.command({
    command: 'list',
    describe: 'Listing Note',
    handler: function(){
        console.log('Listing a note!!');
    }
})

//Create remove command 

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function(){
        console.log('Reading a note!!');
    }
})

// add, remove, read, list


console.log(yargs.argv);


