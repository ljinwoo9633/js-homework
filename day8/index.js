let axios = require('axios');
let cheerio = require('cheerio');

let getHTML = async () => {
    try
    {
        let url = 'https://www.uhs.ac.kr/uhs/230/subview.do';
        return await axios.get(url);
    }
    catch(error)
    {
        console.log(error);
    }
}

getHTML()
.then((html) => {
    const $ = cheerio.load(html.data);

    let titles = [];
    let titleLists = $("div.desc").children("h4");
    titleLists.each((index, element) => {
        let title = element.children[0].data;
        titles.push(title);
    });

    let descriptions = [];
    let subDescriptions = [];
    let descriptionLists = $("div.desc").children("p.con-desc");
    
    descriptionLists.each((index, element) => {
        let description = element.children[0].children[0].data;
        let subDescription = element.children[0].next.next.data;
        
        descriptions.push(description);
        subDescriptions.push(subDescription);
    });

    for(let index = 0; index < titles.length; index++)
    {
        console.log();
        console.log('**************************************************');
        console.log(titles[index]);
        console.log(descriptions[index]);
        console.log(subDescriptions[index]);
        console.log("**************************************************")
        console.log();
    }
})