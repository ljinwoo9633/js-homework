export class Book
{
    private name: String = '';
    private price: Number = 0;
    private author: String = '';
    private ISBN: String = '';
    private page: Number = 0;

    constructor(name: String, price: Number, author: String, ISBN: String, page: Number)
    {
        this.name = name;
        this.price = price;
        this.author = author;
        this.ISBN = ISBN;
        this.page = page;
    }

    SetName = (name: String): void => {
        this.name = name;
    }

    GetName = ():String => {
        return this.name;
    }

    SetPrice = (price: Number):void => {
        this.price = price
    }

    GetPrice = ():Number => {
        return this.price;
    }

    SetAuthor = (author: String):void => {
        this.author = author;
    }

    GetAuthor = ():String => {
        return this.author;
    }

    SetISBN = (ISBN: String):void => {
        this.ISBN = ISBN;
    }

    GetISBN = ():String => {
        return this.ISBN;
    }

    SetPage = (page: Number):void => {
        this.page = page;
    }

    GetPage = ():Number => {
        return this.page;
    }
}