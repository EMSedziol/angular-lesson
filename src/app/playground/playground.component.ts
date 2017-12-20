import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  textForLabel: string = '';

  buttonClick1(): void {
    this.textForLabel = "What is today?";
  }

  buttonClick2(): void {
    this.textForLabel = "No one really knows";
  }

  buttonClick3(): void {
      this.textForLabel = "Tomorrow will be a better day";
    }

  constructor() { }

  ngOnInit() {
  }

}
