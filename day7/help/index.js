let fs = require('fs');

let WriteTextFile = async (fileName, data) => {
    try
    {
        await fs.writeFile(`${fileName}.txt`, data, 'utf-8', (error) => {
            if(error)
            {
                console.log(error.message);
                return false;
            }
            else
            {
                console.log(`[+]Complete to write data!`);
                return true;
            }
        })
    }
    catch(error)
    {
        console.log(error);
        return false;
    }
}

let ReadTextFile = async (fileName) => {
    try
    {
        await fs.readFile(`${fileName}.txt`, 'utf-8', (error, data) => {
            if(error)
            {
                console.log(error.message);
                return false;
            }
            else
            {
                console.log(data);
                return true;
            }
        })
    }
    catch(error)
    {
        console.log(error);
        return false;
    }
}
