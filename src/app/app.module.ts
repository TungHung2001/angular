import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TvShowComponent } from "./tvshow.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { StarComponent } from "./shared/star.component";


@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    declarations: [TvShowComponent, StarComponent],
    bootstrap:[TvShowComponent]
})


export class AppModule{

}