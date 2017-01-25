"use strict";
var Bandsintown_1 = require("./Bandsintown");
var defazer = new Bandsintown_1.Bandsintown("DEFAZER", "test");
var tourDates = defazer.getTourDatesInRange(2015, 2018);
console.log(tourDates);
