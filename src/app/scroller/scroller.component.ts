import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';


@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollerComponent implements OnInit {
  @Input()items: string[] = [];
  @Input()isMultiple: boolean = true;
  @Output() itemSelected = new EventEmitter<string>();
 private selectedItem: string = '';
 
  constructor() { }

  clickedItem(item : string) {
    this.selectedItem = item === this.selectedItem ? '' : this.selectedItem = item;
     this.itemSelected.emit(this.selectedItem);
  }
  ngOnInit(): void {
  }

}
