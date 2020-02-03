const yargs = require('yargs');

 // Craete test command (add)

 yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        author:{
            describe: "Note Author",
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'Note title',
            demandOption: false,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: '+ argv.title,'\n','Author: '+ argv.author);
    }
})

yargs.parse();