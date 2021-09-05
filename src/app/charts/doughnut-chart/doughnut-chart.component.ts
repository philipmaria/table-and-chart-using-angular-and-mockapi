import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { DefaultService } from 'src/app/layout/default.service';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  chart = [];

  constructor(private data: DefaultService) { }

  ngOnInit() {
    this.data.getTableData().subscribe(res => {
      let labels = res['chartData'].map((x: { subject: string; }) => x.subject);
      let values = res['chartData'].map((x: { mark: number; }) => x.mark);
      var ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
      var doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            { 
              label: 'Marks of Students',
              data: values,
              backgroundColor: ["red", "green", "yellow", "violet", "grey", "black"],
              borderColor: ["red", "green", "yellow", "violet", "grey", "black"],
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }, 
          animation: {
            // easing: "easeInSine", 
            duration: 1000
          }
        }
      });
      
    })
  }
}
