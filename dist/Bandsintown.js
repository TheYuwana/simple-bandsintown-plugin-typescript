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
