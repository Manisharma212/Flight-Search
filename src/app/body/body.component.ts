import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
flights: any[] = [
    {
      "airlines": "Indigo",
      "departure" : "DEL 04:55",
      "duration" : "2h 10m ( Non-Stop )",
      "arrival" : "CCU 07:05",
      "price" : "3,183"
    },
    {
      "airlines": "Indigo",
      "departure" : "DEL 04:55",
      "duration" : "2h 10m ( Non-Stop )",
      "arrival" : "CCU 07:05",
      "price" : "3,183"
    },
    {
      "airlines": "Indigo",
      "departure" : "DEL 04:55",
      "duration" : "2h 10m ( Non-Stop )",
      "arrival" : "CCU 07:05",
      "price" : "3,183"
    },
    {
      "airlines": "Indigo",
      "departure" : "DEL 04:55",
      "duration" : "2h 10m ( Non-Stop )",
      "arrival" : "CCU 07:05",
      "price" : "3,183"
    },
    {
      "airlines": "Indigo",
      "departure" : "DEL 04:55",
      "duration" : "2h 10m ( Non-Stop )",
      "arrival" : "CCU 07:05",
      "price" : "3,183"
    },
    {
      "airlines": "Indigo",
      "departure" : "DEL 04:55",
      "duration" : "2h 10m ( Non-Stop )",
      "arrival" : "CCU 07:05",
      "price" : "3,183"
    }
  ];
}
