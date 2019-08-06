import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  date: NgbDate;
  @Output() selectedDate: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectedDateChange(date: NgbDate): void {
    const dateString: string = date.month + '/' + date.day + '/' + date.year;
    this.selectedDate.emit(dateString);
  }

}
