import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
	
@Component({
    selector: 'app-root',
		templateUrl: './tvshow.component.html'
})
export class TvShowComponent{
    apiUrl:string = "http://api.tvmaze.com/shows/";
	showId?:number; //nullable
    showName: string = "";
    showImg: string = "";
    showRating?:number;
    cast:any;
    constructor(private http : HttpClient) {} 
    loadShow() : void {
        if (this.showId) {
            this.http.get<any>(this.apiUrl + this.showId)
                .subscribe((data: any) => {
                    this.showName = data.name;
                    //this.showId = data.id;
                    this.showImg = data.image.medium;
                    this.showRating = data.rating.average;
                });
                this.http.get<any[]>(`http://api.tvmaze.com/shows/${this.showId}/cast`)
                .subscribe((data: any[]) => this.cast = data);
                
        }
        
    }
    
    
}