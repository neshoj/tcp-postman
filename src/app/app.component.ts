import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POS Request Simulator';
  description = 'This application simulates Point Of Sale mobile terminal requests to a middleware Service';
   year = new Date().getFullYear();
}
