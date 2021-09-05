import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { RouterModule } from '@angular/router';
import { DefaultService } from '../default.service';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoughnutChartComponent } from 'src/app/charts/doughnut-chart/doughnut-chart.component';
import { TableComponent } from 'src/app/table/table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    DefaultComponent, 
    DoughnutChartComponent, 
    TableComponent,
  ],
  imports: [
    CommonModule, 
    HeaderModule,
    ChartsModule, 
    RouterModule, 
    HttpClientModule, 
    FormsModule, 
    MatSelectModule, 
    MatTableModule,
    BrowserAnimationsModule, 
  ], 
  providers: [DefaultService]
})
export class DefaultModule { }