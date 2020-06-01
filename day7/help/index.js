let fs = require('fs');


// txt파일을 작성하는데 사용하는 함수입니다!
// fileName에 '파일명'을 적고 data에 적고싶은 데이터를 적어주세요!
// ex) WriteTextFile("Helloworld", "Hello!") => Helloworld이름을 가지고 데이터 Hello!를 가지는 txt파일을 만들어준다.
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


//txt 파일을 읽는 함수입니다
//fileName에 txt파일명(.txt 적지마시고!)을 적으면 읽어요!
//ex) ReadTextFile("Helloworld") => Helloworld.txt에 있는 데이터를 읽는다.
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
