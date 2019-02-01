import { Component } from '@angular/core';
import { TableService } from '../table/table.service';
import { TableInterface } from '../table.interface';


@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.scss']
})

export class TableTwoComponent {
  radioBtns: string[] = ["Большой", "Маленький", "Свой"];
  ELEMENT_DATA_BIG: TableInterface[];
  ELEMENT_DATA_SMALL: TableInterface[];
  ELEMENT_DATA_OWN: TableInterface[];
  tableElements;
  rowTable: object = {};
  filterTable: string;


  constructor(private tableService: TableService) { }

  // Radio buttons. При выборе подгружаеться одна из трех таблиц
  changeRadioBtns(event) {
    switch (event.target.value) {
      case ("Большой"):
        this.tableService
          .getBigTable()
          .subscribe(data => {
            this.ELEMENT_DATA_BIG = data,
              this.tableElements = this.ELEMENT_DATA_BIG;
          });
        break;

      case ("Маленький"):
        this.tableService
          .getSmallTable()
          .subscribe(data => {
            this.ELEMENT_DATA_SMALL = data,
              this.tableElements = this.ELEMENT_DATA_SMALL;
          });
        break;

      case ("Свой"):
        this.tableService
          .getOwnTable()
          .subscribe(data => {
            this.ELEMENT_DATA_OWN = data,
              this.tableElements = this.ELEMENT_DATA_OWN;
          });
        break;

      default:
        this.ELEMENT_DATA_BIG = [];
    }
  }
  // Отображение выделенной строки таблицы
  onRowTable(tableElement) {
    this.rowTable = tableElement;
  }
}










