import { Book } from './Book';

//Print Information using class
let natureOfCodeBook = new Book("Nature of Code", 30000, "다니엘 쉬프만", "9788968481901", 620);

console.log(`이름: ${natureOfCodeBook.GetName()}`);
console.log(`가격: ${natureOfCodeBook.GetPrice()}`);
console.log(`저자: ${natureOfCodeBook.GetAuthor()}`);
console.log(`ISBN: ${natureOfCodeBook.GetISBN()}`);
console.log(`페이지수: ${natureOfCodeBook.GetPrice()}`);

//Print Information using Object
let natureOfCodeBookUsingObject: any = {
    name: "Nature of Code",
    price: 30000,
    author: "다니엘 쉬프만",
    ISBN: "9788968481901",
    page: 620
};

console.log('-----------------')

for(let key in natureOfCodeBookUsingObject)
{
    console.log(`${key}: ${natureOfCodeBookUsingObject[key]}`);
}
