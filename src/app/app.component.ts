import { Component } from "@angular/core";
import { CloudinaryImage } from "@cloudinary/url-gen";
import {
  lazyload,
  responsive,
  accessibility,
  placeholder
} from "@cloudinary/angular";

/**
 * This sample Angular project showcases how to use
 * @cloudinary/base along with our React SDK to render CloudinaryImage
 *
 * In addition, we will showcase how to use our advanced features
 * in the form of plugins. For more information on the SDK and
 * plugins, please see- https://staging.cloudinary.com/documentation/sdks/js/frontend-frameworks/index.html
 *
 *Note: The following order or plugins should remain- 
 plugins=[lazyload(),responsive(), accessibility(), placeholder()] 
 */

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cloudinaryImage = new CloudinaryImage("sample", { cloudName: "demo" });
  brownSheep = new CloudinaryImage("brown_sheep", { cloudName: "demo" });
  woman = new CloudinaryImage("woman", { cloudName: "demo" });
  cat = new CloudinaryImage("fat_cat", { cloudName: "demo" });
  largeImage = new CloudinaryImage("oil", { cloudName: "rcstraus" });

  accessibility = [accessibility()];
  colorBlind = [accessibility("colorblind")];
  responsive = [responsive(100)];
  lazyload = [lazyload()];
  lazyloadWithPlaceholder = [lazyload(), placeholder()];
}
