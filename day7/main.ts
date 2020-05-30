import Homework from './Homework';

let main = (): Number => {
    const HOMEWORK = new Homework(process.argv[3], process.argv[4]);
    if(process.argv[2] === 'read')
    {
        HOMEWORK.ReadData();
        return 0;
    }
    else if(process.argv[2] === 'write')
    {
        HOMEWORK.WriteData();
        return 0;
    }
    else if(process.argv[2] === 'help')
    {
        HOMEWORK.Help();
        return 0;
    }
    else
    {
        HOMEWORK.Help();
        return 0;
    }
}

main();