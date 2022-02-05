import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],  
})
export class DialogComponent implements OnInit {
  items: string[];
  selectedItem : string = '';
  filteredItems : string[];
  constructor() {
    this.items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);
    this.filteredItems = this.items;
   }
  ngOnInit(): void {
  }

  filterList(text: string): void{
   this.filteredItems = text != '' ? this.items.filter((item : string) => item.toLowerCase().includes(text.toLowerCase())) : this.items;
  }

  onItemSelect(newItem: string) {
    this.selectedItem = newItem;
    console.log('selected changed');
  }

}
