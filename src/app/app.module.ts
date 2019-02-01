import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule, MatSortModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { MainBlockComponent } from './home/main-block/main-block.component';

import { TableService } from './table/table.service';
import { TableTwoComponent } from './table-two/table-two.component';
import { FilterPipe } from './table-two/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    HomeComponent,
    SidebarComponent,
    MainBlockComponent,
    TableTwoComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
