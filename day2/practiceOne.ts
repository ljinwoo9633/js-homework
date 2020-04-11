let PrintTower = (floor: number): void => {
    let emptyNumber = floor;
    for(let i = 1; i <= floor ; i++)
    {
        let dotNumber = (2 * i);
        let empty = new Array(emptyNumber).join(' ');
        let dots = new Array(dotNumber).join('*');

        console.log(empty, dots);
        emptyNumber = emptyNumber - 1;
    }
}


PrintTower(8);