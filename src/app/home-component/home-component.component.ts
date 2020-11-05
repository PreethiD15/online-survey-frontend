import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  page = {
    title: 'Home',
    subtitle: 'Welcome To Mindtree Online Survey System !',
    content: 'Some home content.',
    image: 'assets/images/service-survey.png'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
