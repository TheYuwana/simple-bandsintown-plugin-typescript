!function t(n,e,r){function i(s,a){if(!e[s]){if(!n[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=e[s]={exports:{}};n[s][0].call(d.exports,function(t){var e=n[s][1][t];return i(e?e:t)},d,d.exports,t,n,e,r)}return e[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,n,e){"use strict";var r=function(){function t(t,n){this.tourDates=[],this.baseUrl="http://api.bandsintown.com/artists/",this.artist=t,this.devKey=n;var e={name:"Rotown",city:"Rotterdam",region:"Zuid Holland",country:"Netherlands"},r={id:123,title:"This event",date:"01-01-2017",description:"This is an awesome description",rsvpUrl:"http://someurl.com",venue:e};this.tourDates.push(r)}return t.prototype.getTourDatesInRange=function(t,n){var e=t.toString(),r=n.toString();this.baseUrl+this.artist+"/events.json?api_version=2.0&date="+e+"-01-01,"+r+"&app_id="+this.devKey;return this.tourDates},t}();e.Bandsintown=r},{}],2:[function(t,n,e){"use strict";var r=t("./Bandsintown"),i=new r.Bandsintown("DEFAZER","test"),o=i.getTourDatesInRange(2015,2018);console.log(o)},{"./Bandsintown":1}]},{},[1,2]);
//# sourceMappingURL=bundle.js.map
