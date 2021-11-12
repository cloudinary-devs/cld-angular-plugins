import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CloudinaryModule } from "@cloudinary/angular";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CloudinaryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
