const fs = require("fs"); //File system module, read, write, manipulate files

exports.writehtml5public = writeHtml5;//Exports writeHtml5 so it can be used in other modules under name writehtml5public
exports.peeppublic = peep;
function writeHtml5(){

   try{
        if (process.argv.length >4)
        {
            throw new Error('Too many Command Line Arguments');
        }
        if(process.argv[2] === '-t')
        {
            if (!process.argv[3].includes(".html"))
            {
                throw new Error('Invalid File Name')
            }
            const filename = process.argv[3];
            const myHtml5 = fs.readFileSync(`${__dirname}/template.html`); //dirname is this directory
            const css = `body{ 
        background-color: #333;
        text-align: center;
    }`;
            const js = `console.log("Hello World");`
            fs.writeFileSync(`${process.cwd()}/${filename}`, myHtml5);
            fs.writeFileSync(`${process.cwd()}/${'style.css'}`, css);
            fs.writeFileSync(`${process.cwd()}/${'index.js'}`, js);
        }
        else{
            if (!process.argv[2].includes(".html"))
                {
                    throw new Error('Invalid File Name');
                }
            const filename = process.argv[2];
            const html5 = fs.readFileSync(`${__dirname}/single.html`); //dirname is this directory
            fs.writeFileSync(`${process.cwd()}/${filename}`, html5); //cwd() is directory where touch5 is called  
        }
}
    catch(error)
    {
        console.error(error.message);
    }
}

function peep(){
    try{
        if (process.argv.length >3)
            {
                throw new Error('Too many Command Line Arguments');
            }
        const readFile = fs.readFileSync(`${process.cwd()}/${process.argv[2]}`, 'utf-8');
        if (!readFile)
        {
            throw new Error('File Does Not Exist');
        }
        console.log(readFile);
    }
    catch(error)
    {
        console.error(error.message);
    }
}