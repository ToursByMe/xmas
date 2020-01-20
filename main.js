
let people = ['each and everyone of you'];

const merryXmas = () => people.map(data => data.charAt(0).toUpperCase() + data.substring(1));
    console.log(`${merryXmas()} deserve a great Xmas!`);


let str = 'each and everyone of you';

const simpleXmas = () => str.charAt(0).toUpperCase() + str.substring(1);
    console.log(`${simpleXmas()} deserve a great Xmas!`);


let strSimple = 'each and everyone of you';

const evenSimpler = () => strSimple.replace(/^\w/, a => a.toUpperCase());
    console.log(`${simpleXmas()} deserve a great Xmas!`);

let theSimpliestXmas = () => 'Merry Christmas to all!!';









