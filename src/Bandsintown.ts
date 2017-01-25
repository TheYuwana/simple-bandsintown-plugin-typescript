// Bandsintown

// Get upcoming shows
// http://api.bandsintown.com/artists/DEFAZER/events.json?api_version=2.0&app_id=test

// Get past shows
// http://api.bandsintown.com/artists/DEFAZER/events.json?api_version=2.0&date=2015-01-01,2017-01-01&app_id=test
export interface Venue {
    name: string;
    city: string;
    region: string;
    country: string;
}

export interface TourDate {
    id: number;
    title: string;
    date: string;
    description: string;
    rsvpUrl: string;
    venue: Venue;
}

export class Bandsintown{

    private tourDates: TourDate[];
    private baseUrl: string;
    private artist: string;
    private devKey: string;

    public constructor(artist: string, devKey: string){

        this.tourDates = [];
        this.baseUrl = "http://api.bandsintown.com/artists/";
        this.artist = artist;
        this.devKey = devKey;

        let venue: Venue = {
            name: "Rotown",
            city: "Rotterdam",
            region: "Zuid Holland",
            country: "Netherlands"
        };

        let tourDate: TourDate = {
            id: 123,
            title: "This event",
            date: "01-01-2017",
            description: "This is an awesome description",
            rsvpUrl: "http://someurl.com",
            venue: venue
        };

        this.tourDates.push(tourDate);
    }

    public getTourDatesInRange(past:number, future:number):TourDate[]{
        let pastYear = past.toString();
        let futureYear = future.toString();
        // Should be done without jquery
        let url = this.baseUrl + this.artist + "/events.json?api_version=2.0&date=" + pastYear + "-01-01," + futureYear + "&app_id=" + this.devKey;
        // $.ajax({
        //     method: "GET",
        //     url: url,
        //     dataType: "json"
        // }).done(function(response){
        //     console.log(response);
        //     return this.tourDates;
        // });

        return this.tourDates;
    }
}