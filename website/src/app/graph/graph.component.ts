import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  day1: string = "Monday";
  day2: string = "Tuesday";
  day3: string = "Wednesday";
  day4: string = "Thursday";
  day5: string = "Friday";
  day6: string = "Saterday";
  day7: string = "Sunday";

  constructor() { }

  ngOnInit() {
  }

}
