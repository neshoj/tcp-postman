import { Component, OnInit } from '@angular/core';
import { ProcessorService } from '../app/processor.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Processedtnx } from './processedtnx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'POS Request Simulator';
  description = 'This application simulates Point Of Sale mobile terminal requests to the Alpha Middleware Service';
  year = new Date().getFullYear();
  constructor(public processorService: ProcessorService) { }

  ngOnInit() {
    this.getProcessedTnx();
  }

  getProcessedTnx(): void {
    console.log('Running statistics');
    this.processorService.findProcessedTransactions()
      .subscribe(tnxstatistics => console.log(tnxstatistics['processedCount']));
  }
}
