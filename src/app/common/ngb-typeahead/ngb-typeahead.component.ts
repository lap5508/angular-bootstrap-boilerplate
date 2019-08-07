import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-ngb-typeahead',
  templateUrl: './ngb-typeahead.component.html',
  styleUrls: ['./ngb-typeahead.component.css']
})
export class NgbTypeaheadComponent implements OnInit {
  @Input() displayCount = 3;
  items = ['itemOne', 'itemTwo', 'dropdownOne', 'dropdownTwo', 'optionOne', 'optionTwo'];
  selectedItem: string;
  @Output() selectedDropdownItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  typeaheadSearch = (text$: Observable<string>) =>
    text$.pipe(
      // debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.items.filter(item => item.toLowerCase().indexOf(term) > -1).slice(0, this.displayCount))
    )

  selectedDropdownChange(): void {
    setTimeout(() => {
      this.selectedDropdownItem.emit(this.selectedItem);
    }, 200);
  }

}
