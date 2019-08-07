import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocalApiService } from './services/local-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RadioGroupComponent } from './common/radio-group/radio-group.component';
import { NgbTypeaheadComponent } from './common/ngb-typeahead/ngb-typeahead.component';
import { NgbDateAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './common/date-picker/date-picker.component';
import { DateStringAdapterService } from './services/date-string-adapter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RadioGroupComponent,
    NgbTypeaheadComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [LocalApiService,
    { provide: NgbDateAdapter, useClass: DateStringAdapterService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
