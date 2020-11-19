import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProfileService } from '../services/profile.service';
import { UsersurveyresponseService } from '../services/usersurveyresponse.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  surveyForm: any[] = [1, 2, 3, 4];
  IncompleteSurvey:any;
  CompletedSurvey:any;
  canvas: any;
  constructor( 
    private usersurveyresponseService: UsersurveyresponseService,
    private profileService: ProfileService,

  ) {}
 
  ngOnInit(): void {
console.log("user Id >>>>>>>>>>>>>>>"+this.profileService.userDetails.id)
  this.usersurveyresponseService.getUserdashboardSurvey(this.profileService.userDetails.id).subscribe(data=>{
    
  this.IncompleteSurvey=data['InComplete Survey']
  this.CompletedSurvey=data['Completed Survey']
  console.log(data);
  console.log(this.IncompleteSurvey);
})
  }
  /**
   * create chart
   */
  createChart(): void {
    this.canvas = document.getElementById('myChart');
    this.canvas = this.canvas.getContext('2d');
    let myChart = new Chart(this.canvas, {
      type: 'pie',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
