import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  applicationID: string = "b4dfd427";
  applicationKey: string = "b4aecb4503b68f4461663578583d681b";
  searchResult: string = "";

  constructor(private _http: HttpClient) { }

  chart = [];
  calories: number = 0;
  foodName: string = "";
  error: boolean = false;
  first: boolean = true;

  clicked() {
    this.first = false;
    let food = this.foodName.split(" ").join("%20");
    this.searchResult = food;
    this.displayGraph();
  }

  displayResults() {
    console.log("running results");
    return this._http.get(`https://api.edamam.com/api/nutrition-data?app_id=${this.applicationID}&app_key=${this.applicationKey}&ingr=1%20${this.searchResult}`)
      .map(result => result);
  }

  displayGraph() {
    this.displayResults()
      .subscribe(res => {

        this.calories = parseFloat(res["calories"]);
        if (this.calories === 0) {
          this.error = true;
        } else {

          this.error = false;

          let protein;
          let carbs;
          let fiber;
          let fat;
          let sugar;

          // Get the protein of the food
          let protein_test = res["totalNutrients"]["PROCNT"];
          if (protein_test === undefined) {
            protein = 0;
          } else {
            protein = parseFloat(res["totalNutrients"]["PROCNT"]["quantity"]);
          }

          // Get the carbs of the food
          let carbs_test = res["totalNutrients"]["CHOCDF"];
          if (carbs_test === undefined) {
            carbs = 0;
          } else {
            carbs = parseFloat(res["totalNutrients"]["CHOCDF"]["quantity"]);
          }

          // Get the fiber of the food
          let fiber_test = res["totalNutrients"]["FIBTG"];
          if (fiber_test === undefined) {
            fiber = 0;
          } else {
            fiber = parseFloat(res["totalNutrients"]["FIBTG"]["quantity"]);
          }

          // Get the fiber of the food
          let fat_test = res["totalNutrients"]["FAT"];
          if (fat_test === undefined) {
            fat = 0;
          } else {
            fat = parseFloat(res["totalNutrients"]["FAT"]["quantity"]);
          }

          // Get the fiber of the food
          let sugar_test = res["totalNutrients"]["SUGAR"];
          if (sugar_test === undefined) {
            sugar = 0;
          } else {
            sugar = parseFloat(res["totalNutrients"]["SUGAR"]["quantity"]);
          }

          this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
              labels: ["Protein", "Carbs", "Fiber", "Fat", "Sugar"],
              datasets: [{
                data: [protein, carbs, fiber, fat, sugar],
                backgroundColor: [
                  'rgba(150, 104, 66, 0.2)',
                  'rgba(244, 71, 71, 0.2)',
                  'rgba(238, 220, 49, 0.2)',
                  'rgba(127, 219, 106, 0.2)',
                  'rgba(14, 104, 206, 0.2)'
                ],
                borderColor: [
                  'rgba(150, 104, 66, 1)',
                  'rgba(244, 71, 71, 1)',
                  'rgba(238, 220, 49, 1)',
                  'rgba(127, 219, 106, 1)',
                  'rgba(14, 104, 206, 1)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      })
  }

  ngOnInit() {
  }

}
