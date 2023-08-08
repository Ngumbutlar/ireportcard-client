import {Component} from '@angular/core';
import {today} from "../../../../../utils/date.util";
import {ChartData} from "chart.js";
import {AttendanceService} from "../../../../../services/http/attendance/attendance.service";
import {LocationService} from "../../../../../services/general/location.service";
import {AttendanceCheckPayload, AttendancePayload} from "../../../../../models/payload/attendancePeriodPayload";
import {AttendanceType} from "../../../../../models/enum/attendance/attendance-type.enum";

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
  attendanceToday?: AttendancePayload;


  constructor(
    private _attendanceService: AttendanceService,
    private _locationService: LocationService
  ) {
    this._attendanceService.today().subscribe(res => {
      this.attendanceToday = res.attendanceDetail

      this.statisticsData.push(
        {
          label: 'Today',
          stat: `${res.dayPeriod?.workedHours ?? 0} / ${res.dayPeriod?.totalHours}`,
          value: (res.dayPeriod?.workedHours ?? 0) / (res.dayPeriod?.totalHours ?? 1)
        },
        {
          label: 'This Week',
          stat: `${res.weekPeriod?.workedHours ?? 0} / ${res.weekPeriod?.totalHours}`,
          value: (res.weekPeriod?.workedHours ?? 0) / (res.weekPeriod?.totalHours ?? 1)
        },
        {
          label: 'This Month',
          stat: `${res.monthPeriod?.workedHours ?? 0} / ${res.monthPeriod?.totalHours}`,
          value: (res.monthPeriod?.workedHours ?? 0) / (res.monthPeriod?.totalHours ?? 1)
        },
      );
      this.timeSheetChartData = {
        datasets: [
          {
            data: [(res.weekPeriod?.workedHours ?? 0), (res.weekPeriod?.totalHours ?? 1)]
          }
        ]
      }
    });
    this.timeSheetChartData = {
      datasets: [
        {
          data: [0, 0]
        }
      ]
    }
    this.timeSheetChartOptions = {
      cutout: '84%'
    }
  }

  checkInAction =  async () =>{
    console.log("asd")
    await this._locationService.currentLocation().then((loc) => {
      console.log(loc)
      if (loc) {
        const payload: AttendanceCheckPayload = {
          location: loc,
          attendanceType: AttendanceType.CLASS,
        }
        this._attendanceService.checkin(payload).subscribe()
      }
    });
  }
}
