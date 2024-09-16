import { Component } from '@angular/core';
import {FooterContentComponent} from "../footer-content/footer-content.component";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    FooterContentComponent
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

}
