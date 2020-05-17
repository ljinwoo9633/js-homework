let electron = require('electron');
let { ipcRenderer } = electron;

let ul = document.querySelector('ul');
let videoContainer = document.querySelector('.video__container')
let videoHeader = document.querySelector(".video__header");
let videoInVideoContainer = document.querySelector('.video_container__video');
let videoBtn = document.querySelector(".video__btn");
let infoContainer = document.querySelector(".info__container")
let infoVideo = document.querySelector(".info_container__video");

let mineralResult = document.querySelector('.mineral__result');
let supplyResult = document.querySelector('.supply__result')

infoVideo.pause();
GetZergData();
GetUnitsUsingHugeMineral();
GetSumOfSupply();
PrintLoadingHeader();

function GetUnitsUsingHugeMineral()
{
    ipcRenderer.on('mineral-reply', (event, arg) => {
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let name = document.createElement('p');

        h2.textContent = 'Huge Mineral Unit'
        img.src = arg.profile;
        img.classList.add('result__img');
        name.textContent = arg.name;

        mineralResult.appendChild(h2);
        mineralResult.appendChild(img);
        mineralResult.appendChild(name);
        
    });
    ipcRenderer.send('mineral', 200);
}

function GetSumOfSupply()
{
    ipcRenderer.on('supply-reply', (event, arg) => {
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let sum = document.createElement('h2');

        h2.textContent = 'Sum of Supply'
        img.src = 'https://media.tenor.com/images/8e01a37f988b22d8408c6ab8232271ab/tenor.gif';
        img.classList.add('result__img');
        sum.textContent = arg;

        supplyResult.appendChild(h2);
        supplyResult.appendChild(img);
        supplyResult.appendChild(sum);
    });
    ipcRenderer.send('supply', 200);
}

function GetZergData()
{
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
        arg.map((zerg, index) => {
            let li = document.createElement("li");
            li.classList.add(`${index}`);
            let img = document.createElement("img");
            let name = document.createElement('h2');
            let description = document.createElement('p');
            let cardBody = document.createElement('div');
            let cardDescriptionPart = document.createElement('div');
            
            let resourcePart = document.createElement('div');
            let mineralImg = document.createElement('img');
            let mineral = document.createElement('p');
            let gasImg = document.createElement('img');
            let gas = document.createElement('p');
            let supplyImg = document.createElement('img');
            let supply = document.createElement('p');

            name.textContent = zerg.name;
            description.textContent = `Description: ${zerg.description}`;
            img.src = zerg.profile;
            img.classList.add('zergProfile__img');
            
            mineralImg.src = 'https://media1.tenor.com/images/5b89e02be2b6002db6fc408f9e887437/tenor.gif?itemid=16151295';
            mineralImg.classList.add("resource__img");
            gasImg.src = 'https://media1.tenor.com/images/6b1898c300b7e3d815c39387b55a0888/tenor.gif?itemid=16151297';
            gasImg.classList.add('resource__img');
            supplyImg.src = 'https://media.tenor.com/images/8e01a37f988b22d8408c6ab8232271ab/tenor.gif';
            supplyImg.classList.add("resource__img");
            
            cardBody.classList.add("cardBody");
            cardBody.appendChild(img);

            //Mineral
            let mineralPart = document.createElement('div');
            mineralPart.classList.add("resource__frame");

            mineralPart.appendChild(mineralImg);
            mineral.textContent = zerg.mineral;
            mineralPart.appendChild(mineral);

            //Gas
            let gasPart = document.createElement('div');
            gasPart.classList.add("resource__frame");

            gasPart.appendChild(gasImg);
            gas.textContent = zerg.gas;
            gasPart.appendChild(gas);

            //supplyPart
            let supplyPart = document.createElement('div');
            supplyPart.classList.add("resource__frame");

            supplyPart.appendChild(supplyImg);
            supply.textContent = zerg.supply;
            supplyPart.appendChild(supply);

            //Get Resource Part
            resourcePart.classList.add('resourcePart__frame');
            resourcePart.appendChild(mineralPart);
            resourcePart.appendChild(gasPart);
            resourcePart.appendChild(supplyPart);
            
            cardDescriptionPart.classList.add('cardDescription__frame');
            cardDescriptionPart.appendChild(description);
            cardDescriptionPart.appendChild(resourcePart);

            cardBody.appendChild(cardDescriptionPart);


            li.appendChild(name);
            li.appendChild(cardBody);

            ul.appendChild(li);
        })
    })
    ipcRenderer.send('asynchronous-message', 200);
}

function sleep (time)
{
    return new Promise((resolve) => setTimeout(resolve, time));
}

function PrintComment(arrayComment, time)
{
    for(let index = 0; index < arrayComment.length; index++)
    {
        sleep(time).then(() => {
            videoHeader.textContent = videoHeader.textContent + arrayComment[index];
        });
        time = time + 50;
    }
    return time;
}

function ClearComment(time)
{
    time = time + 5000;
    sleep(time).then(() => {
        videoHeader.textContent = '';
    });
    return time;
}

async function PrintLoadingHeader()
{
    let time = 1000;
    let firstComment = 'Booting System...';
    let secondComment = 'login --id=Lee Yoo Hwan --password=**********';
    let thirdComment = 'Checking Username and password...';
    let fourthComment = '[-] Wrong to check id and password';
    let fifthComment = 'Detected Malicious data name: Lee Yoo Hwan Virus...';
    let sixthComment = 'Deleting Security System name: Lee Yoo Hwan Virus...';
    let seventhComment = 'Making New User id: Lee Yoo Hwan password: **********';
    let eightComment = '[+]Success to delete Security System';
    let ninethComment = '[+]Success to make new user --id: Lee Yoo Hwan';
    let tenthComment = '[+]Success to Login Hello Lee Yoo Hwan :)';
    let eleventhComment = 'Getting root authorization...';
    let twelvethComment = '[+]Success to get root authorization';
    let thirteenComment = 'get --data=Zerg';
    let fourteenComment = 'Getting Zerg Data...';

    let firstCommentArray = firstComment.split("");
    let secondCommentArray = secondComment.split("");
    let thirdCommentArray = thirdComment.split("");
    let fourthCommentArray = fourthComment.split("");
    let fifthCommentArray = fifthComment.split("");
    let sixthCommentArray = sixthComment.split("");
    let seventhCommentArray = seventhComment.split("");
    let eightCommentArray = eightComment.split("");
    let ninethCommentArray = ninethComment.split("");
    let tenthCommentArray = tenthComment.split("");
    let eleventhCommentArray = eleventhComment.split("");
    let twelvethCommentArray = twelvethComment.split("");
    let thirteenCommentArray = thirteenComment.split("");
    let fourteenCommentArray = fourteenComment.split("");
    

    time = await PrintComment(firstCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(secondCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(thirdCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(fourthCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(fifthCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(sixthCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(seventhCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(eightCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(ninethCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(secondCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(thirdCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(tenthCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(eleventhCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(twelvethCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(thirteenCommentArray, time);
    time = await ClearComment(time);
    time = await PrintComment(fourteenCommentArray, time);

    sleep(time + 70000).then(() => {
        videoContainer.classList.add('disappear');
        infoContainer.classList.remove('disappear');
        infoVideo.play();
    });
}

