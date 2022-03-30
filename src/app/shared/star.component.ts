import { Component, Input } from "@angular/core";
@Component({
    selector: 'star-rating',
    templateUrl: './star.component.html'
})
export class StarComponent { 
    @Input() rating: number = 6;
	
	//return [0..9] to generate list of <span>
    ratingSequence(n: number): number[] {
        return Array.from(Array(n).keys()); //[0, 1, 2, 3, ..., 9]  
    }
   
    getStarClasses(i: number):string{
		// i is the index of stars
        if (i+1 <= this.rating){
            return "fas fa-star"; // full star
        } else if (i < this.rating && this.rating < i + 1){
            return "fas fa-star-half-alt"; // half star
        } else {
            return "far fa-star"; // blank star
        }
    }
}