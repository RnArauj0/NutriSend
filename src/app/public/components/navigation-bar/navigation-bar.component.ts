import { Component } from '@angular/core';
import {FooterContentComponent} from "../footer-content/footer-content.component";
import {HomeComponent} from "../../../nutri-send/components/home/home.component";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    FooterContentComponent,
    HomeComponent
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

}
