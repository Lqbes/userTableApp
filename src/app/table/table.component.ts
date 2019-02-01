import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TableService } from './table.service';
import { TableInterface } from '../table.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  // Захардкодил таблицу, так как не удалось передать данные из сервера в переменную changeTable. 
  // Пробывал реализовать с Angular Material.
  ELEMENT_DATA_BIG: TableInterface[] = [
    { id: 1, name: "Артём", age: 15, nickname: "Aaa" },
    { id: 2, name: "Богдан", age: 23, nickname: "Bbb" },
    { id: 3, name: "Виталий", age: 31, nickname: "Www" },
    { id: 4, name: "Глеб", age: 27, nickname: "Ggg" },
    { id: 5, name: "Дамир", age: 40, nickname: "Ddd" },
    { id: 6, name: "Зигмунд", age: 25, nickname: "Zzz" },
    { id: 7, name: "Илья", age: 35, nickname: "Iii" },
  ];
  ELEMENT_DATA_SMALL: TableInterface[] = [];
  ELEMENT_DATA_OWN: TableInterface[] = [];
  rowTable: object = {};
  radioBtns: string[] = ['Большой', 'Маленький', 'Свой'];
  changeTable = [];


  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.tableService
      .getBigTable()
      .subscribe(data => {
        this.ELEMENT_DATA_BIG = data
        console.log(this.ELEMENT_DATA_BIG);
      });
  }

  // Отображение таблицы
  displayedColumns: string[] = ['id', 'name', 'age', 'nickname', 'select'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA_BIG);
  // dataSource = new MatTableDataSource(changeTable);
  selection = new SelectionModel<TableInterface>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // Сортировка по столбцам
  @ViewChild(MatSort) sort: MatSort;

  // Фильтрация
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Checkbox
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // Отображение выделенной строки таблицы
  onRowTable(row) {
    this.rowTable = row;
  }

  // Radiobuttons
  // changeRadioBtns(event) {
  //   switch (event.target.value) {
  //     case ("Большой"):
  //       this.tableService
  //         .getBigTable()
  //         .subscribe(data => {
  //           this.ELEMENT_DATA_BIG = data
  //         });
  //       break;
  //     case ("Маленький"):
  //       this.tableService
  //         .getSmallTable()
  //         .subscribe(data => {
  //           this.ELEMENT_DATA_SMALL = data
  //         });
  //       break;
  //     case ("Свой"):
  //       this.tableService
  //         .getOwnTable()
  //         .subscribe(data => {
  //           this.ELEMENT_DATA_OWN = data
  //         });
  //       break;
  //     default:
  //       this.ELEMENT_DATA_BIG = [];
  //   }
  // }
}