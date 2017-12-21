import { Component, OnInit } from '@angular/core';

// Custom classes
import { Request } from '../../app/request';
import { ProcessorService } from '../processor.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  timeOuts = ['120', '90', '60', '45', '30'];
  submitted = true;
  request = new Request(this.timeOuts[0], '127.0.0.1', '0.0.0.0', '');
  results = '';

  constructor(private processorService: ProcessorService) { }

  ngOnInit() {
  }

  postRequest() {
    this.submitted = false;
    // Forward the reques to middleware service
    this.processorService.sendRequest(this.request)
      .subscribe(resp => {
        this.results = resp;
        this.submitted = true;
      });
  }

}
