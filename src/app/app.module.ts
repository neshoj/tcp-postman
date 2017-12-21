import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { ResponseComponent } from './response/response.component';
import { ProcessorService } from './processor.service';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule
  ],
  providers: [ProcessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
