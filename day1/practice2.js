let GetNumber = (x) => {
    if(x > 10 && x < 20)
    {
        console.log(`${x}는 조건에 맞습니다.`)
    }
}

let index = 0;
while(index < 30)
{
    GetNumber(index);
    index = index + 1;
}