let GetGradePoint = (level) => {
    console.log(`당신은 ${level}학년 입니다.`)
    switch(level)
    {
        case 1:
            console.log("수강해야 하는 전공 학점: 12학점");
            break;
        case 2:
            console.log("수강해야 하는 전공 학점: 18학점");
            break;
        case 3:
            console.log("수강해야 하는 전공 학점: 10학점");
            break;
        case 4:
            console.log("수강해야 하는 전공 학점: 18학점");
            break;
        default:
            console.log("[-] 잘못 된 학년 입니다.")
    }
    console.log();
}

let index = 0;
while(index < 5)
{
    GetGradePoint(index);
    index = index + 1;
}