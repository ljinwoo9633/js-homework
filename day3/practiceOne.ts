class HomeworkMath
{
    GetPower = (number: number, exp?: number):number => {
        if(exp)
        {
            let result = 1;
            for(let index = 0; index < exp; index++)
            {
                result = result * number;
            }

            return result;
        }
        else
        {
            return number * number;
        }
    }

    GetMultiply():number
    {
        let result = 1;
        for(let index = 0; index < arguments.length; index++)
        {
            result = result * arguments[index];
        }
        return result;
    }
}

const HOMEWORK_CLASS = new HomeworkMath();

console.log(HOMEWORK_CLASS.GetPower(2));
console.log(HOMEWORK_CLASS.GetPower(2, 3));
console.log(HOMEWORK_CLASS.GetMultiply(1, 2, 3, 4, 5));
