import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { DefaultComponent } from './layout/default/default.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    { path: '', component: DoughnutChartComponent },
    { path: 'charts/doughnut-chart', component: DoughnutChartComponent}, 
  { path: 'tables/table', component: TableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }