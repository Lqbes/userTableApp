import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Images 1',
    children: [
      { name: 'First' },
      { name: 'Second' },
      { name: 'Third' },
    ]
  }, {
    name: 'Images 2',
    children: [
      {
        name: 'Green Images',
        children: [
          { name: 'First' },
          { name: 'Second' },
        ]
      }, {
        name: 'Orange Images',
        children: [
          { name: 'First' },
          { name: 'Second' },
        ]
      },
    ]
  }, {
    name: 'Images 3',
    children: [
      { name: 'First' },
      { name: 'Second' },
      { name: 'Third' },
    ]
  }, {
    name: 'Images 4',
    children: [
      { name: 'First' },
      { name: 'Second' },
      { name: 'Third' },
    ]
  }, {
    name: 'Images 5',
    children: [
      { name: 'First' },
      { name: 'Second' },
      { name: 'Third' },
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

constructor() {
  this.dataSource.data = TREE_DATA;
}

hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  

}
