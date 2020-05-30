import * as fs from 'fs';

class Homework
{
    private fileName:String = '';
    private data:string = '';

    constructor(fileName:String, data:string)
    {
        this.fileName = fileName;
        this.data = data;
    }

    public Help = async () => {
        console.log('***** Homework *****')
        console.log('command: node [file] [mode] [file name] [file data]');
        console.log('[mode]: read, write, help');
        console.log('Created By: Lee Yoo Hwan\'s Student Who is bad at studying computer science and all of subjects');
    }

    public ReadData = async () => {
        try
        {
            await fs.readFile(`${this.fileName}.txt`, 'utf-8', (error, data) => {
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

    public WriteData = async () => {
        try
        {
            await fs.writeFile(`${this.fileName}.txt`, this.data, 'utf-8', (error) => {
                if(error)
                {
                    console.log(error.message);
                    return false;
                }
                else
                {
                    console.log(`[+] Complete to write data!`);
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
}

export default Homework;