import { Component, OnInit } from '@angular/core';
import { LocalApiService } from './services/local-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-bootstrap-boilerplate';
  contacts = [];

  constructor(private localApiService: LocalApiService) {}

  ngOnInit() {
    console.log(this.localApiService.getContacts());
  }
}
