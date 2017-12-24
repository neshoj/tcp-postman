import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import { ProcessorService } from '../processor.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  constructor(public processorService: ProcessorService) {}

  clear() {
    this.processorService.response = '';
    this.processorService.responsePresent = false;
    this.processorService.isError = false;
  }
}
