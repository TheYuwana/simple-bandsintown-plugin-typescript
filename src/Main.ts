import {Bandsintown} from "./Bandsintown";


let defazer = new Bandsintown("DEFAZER", "test");
let tourDates = defazer.getTourDatesInRange(2015, 2018);

console.log(tourDates);