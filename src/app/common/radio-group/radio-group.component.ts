import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent implements OnInit {
  label = 'Radio Group';
  options: any = {};
  @Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectedItemChange(item: string): void {
    this.selectedItem.emit(item);
  }

}
