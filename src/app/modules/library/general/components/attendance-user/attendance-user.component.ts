import { Component } from '@angular/core';
import {today} from "../../../../../utils/date.util";
import {ChartData, ChartOptions} from "chart.js";

@Component({
  selector: 'app-attendance-user',
  templateUrl: './attendance-user.component.html',
  styleUrls: ['./attendance-user.component.css']
})
export class AttendanceUserComponent {

  protected readonly today = today;
  timeSheetChartData: ChartData;
  timeSheetChartOptions: any;

  statisticsData: {label: string, stat: string, value: number}[] = []


  constructor() {
    this.timeSheetChartData = {
      datasets: [
        {
          data: [50, 40]
        }
      ]
    }
    this.timeSheetChartOptions = {
      cutout: '84%'
    }
    this.statisticsData = [
      {label: 'Today', stat: '6/8 hours', value: (6/8)*100}
    ]
  }
}
