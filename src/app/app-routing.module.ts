import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { TableTwoComponent } from './table-two/table-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Table', component: TableComponent },
  { path: 'TableTwo', component: TableTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
