(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Bandsintown
"use strict";
var Bandsintown = (function () {
    function Bandsintown(artist, devKey) {
        this.tourDates = [];
        this.baseUrl = "http://api.bandsintown.com/artists/";
        this.artist = artist;
        this.devKey = devKey;
        var venue = {
            name: "Rotown",
            city: "Rotterdam",
            region: "Zuid Holland",
            country: "Netherlands"
        };
        var tourDate = {
            id: 123,
            title: "This event",
            date: "01-01-2017",
            description: "This is an awesome description",
            rsvpUrl: "http://someurl.com",
            venue: venue
        };
        this.tourDates.push(tourDate);
    }
    Bandsintown.prototype.getTourDatesInRange = function (past, future) {
        var pastYear = past.toString();
        var futureYear = future.toString();
        // Should be done without jquery
        var url = this.baseUrl + this.artist + "/events.json?api_version=2.0&date=" + pastYear + "-01-01," + futureYear + "&app_id=" + this.devKey;
        // $.ajax({
        //     method: "GET",
        //     url: url,
        //     dataType: "json"
        // }).done(function(response){
        //     console.log(response);
        //     return this.tourDates;
        // });
        return this.tourDates;
    };
    return Bandsintown;
}());
exports.Bandsintown = Bandsintown;
},{}],2:[function(require,module,exports){
"use strict";
var Bandsintown_1 = require("./Bandsintown");
var defazer = new Bandsintown_1.Bandsintown("DEFAZER", "test");
var tourDates = defazer.getTourDatesInRange(2015, 2018);
console.log(tourDates);
},{"./Bandsintown":1}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQmFuZHNpbnRvd24udHMiLCJzcmMvTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLGNBQWM7O0FBdUJkO0lBT0kscUJBQW1CLE1BQWMsRUFBRSxNQUFjO1FBRTdDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcscUNBQXFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxLQUFLLEdBQVU7WUFDZixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxXQUFXO1lBQ2pCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLE9BQU8sRUFBRSxhQUFhO1NBQ3pCLENBQUM7UUFFRixJQUFJLFFBQVEsR0FBYTtZQUNyQixFQUFFLEVBQUUsR0FBRztZQUNQLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxZQUFZO1lBQ2xCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsT0FBTyxFQUFFLG9CQUFvQjtZQUM3QixLQUFLLEVBQUUsS0FBSztTQUNmLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0seUNBQW1CLEdBQTFCLFVBQTJCLElBQVcsRUFBRSxNQUFhO1FBQ2pELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsZ0NBQWdDO1FBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQ0FBb0MsR0FBRyxRQUFRLEdBQUcsU0FBUyxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzSSxXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsTUFBTTtRQUVOLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTCxrQkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksa0NBQVc7OztBQ3ZCeEIsNkNBQTBDO0FBRzFDLElBQUksT0FBTyxHQUFHLElBQUkseUJBQVcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIEJhbmRzaW50b3duXHJcblxyXG4vLyBHZXQgdXBjb21pbmcgc2hvd3NcclxuLy8gaHR0cDovL2FwaS5iYW5kc2ludG93bi5jb20vYXJ0aXN0cy9ERUZBWkVSL2V2ZW50cy5qc29uP2FwaV92ZXJzaW9uPTIuMCZhcHBfaWQ9dGVzdFxyXG5cclxuLy8gR2V0IHBhc3Qgc2hvd3NcclxuLy8gaHR0cDovL2FwaS5iYW5kc2ludG93bi5jb20vYXJ0aXN0cy9ERUZBWkVSL2V2ZW50cy5qc29uP2FwaV92ZXJzaW9uPTIuMCZkYXRlPTIwMTUtMDEtMDEsMjAxNy0wMS0wMSZhcHBfaWQ9dGVzdFxyXG5leHBvcnQgaW50ZXJmYWNlIFZlbnVlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNpdHk6IHN0cmluZztcclxuICAgIHJlZ2lvbjogc3RyaW5nO1xyXG4gICAgY291bnRyeTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvdXJEYXRlIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGF0ZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHJzdnBVcmw6IHN0cmluZztcclxuICAgIHZlbnVlOiBWZW51ZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhbmRzaW50b3due1xyXG5cclxuICAgIHByaXZhdGUgdG91ckRhdGVzOiBUb3VyRGF0ZVtdO1xyXG4gICAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGFydGlzdDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkZXZLZXk6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXJ0aXN0OiBzdHJpbmcsIGRldktleTogc3RyaW5nKXtcclxuXHJcbiAgICAgICAgdGhpcy50b3VyRGF0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSBcImh0dHA6Ly9hcGkuYmFuZHNpbnRvd24uY29tL2FydGlzdHMvXCI7XHJcbiAgICAgICAgdGhpcy5hcnRpc3QgPSBhcnRpc3Q7XHJcbiAgICAgICAgdGhpcy5kZXZLZXkgPSBkZXZLZXk7XHJcblxyXG4gICAgICAgIGxldCB2ZW51ZTogVmVudWUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUm90b3duXCIsXHJcbiAgICAgICAgICAgIGNpdHk6IFwiUm90dGVyZGFtXCIsXHJcbiAgICAgICAgICAgIHJlZ2lvbjogXCJadWlkIEhvbGxhbmRcIixcclxuICAgICAgICAgICAgY291bnRyeTogXCJOZXRoZXJsYW5kc1wiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHRvdXJEYXRlOiBUb3VyRGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IDEyMyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiVGhpcyBldmVudFwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjAxLTAxLTIwMTdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhbiBhd2Vzb21lIGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIHJzdnBVcmw6IFwiaHR0cDovL3NvbWV1cmwuY29tXCIsXHJcbiAgICAgICAgICAgIHZlbnVlOiB2ZW51ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudG91ckRhdGVzLnB1c2godG91ckRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3VyRGF0ZXNJblJhbmdlKHBhc3Q6bnVtYmVyLCBmdXR1cmU6bnVtYmVyKTpUb3VyRGF0ZVtde1xyXG4gICAgICAgIGxldCBwYXN0WWVhciA9IHBhc3QudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgZnV0dXJlWWVhciA9IGZ1dHVyZS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIFNob3VsZCBiZSBkb25lIHdpdGhvdXQganF1ZXJ5XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIHRoaXMuYXJ0aXN0ICsgXCIvZXZlbnRzLmpzb24/YXBpX3ZlcnNpb249Mi4wJmRhdGU9XCIgKyBwYXN0WWVhciArIFwiLTAxLTAxLFwiICsgZnV0dXJlWWVhciArIFwiJmFwcF9pZD1cIiArIHRoaXMuZGV2S2V5O1xyXG4gICAgICAgIC8vICQuYWpheCh7XHJcbiAgICAgICAgLy8gICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAvLyAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgLy8gICAgIGRhdGFUeXBlOiBcImpzb25cIlxyXG4gICAgICAgIC8vIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLnRvdXJEYXRlcztcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG91ckRhdGVzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYW5kc2ludG93bn0gZnJvbSBcIi4vQmFuZHNpbnRvd25cIjtcclxuXHJcblxyXG5sZXQgZGVmYXplciA9IG5ldyBCYW5kc2ludG93bihcIkRFRkFaRVJcIiwgXCJ0ZXN0XCIpO1xyXG5sZXQgdG91ckRhdGVzID0gZGVmYXplci5nZXRUb3VyRGF0ZXNJblJhbmdlKDIwMTUsIDIwMTgpO1xyXG5cclxuY29uc29sZS5sb2codG91ckRhdGVzKTsiXX0=
