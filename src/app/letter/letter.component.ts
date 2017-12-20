import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  isAdmin: boolean = true;
  todayIsTuesday: boolean = true;
  textForAdmin: string = '';

  buttonClick(): void {
    this.textForAdmin = 'Adding text when button is clicked by admin';
  }

  constructor() { }

  ngOnInit() {
  }

}
