import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  @HostBinding('class') classess = 'main page page-light';

  constructor() { }

  ngOnInit(): void {
  }

}
