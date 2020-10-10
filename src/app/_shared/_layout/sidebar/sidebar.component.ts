import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @HostBinding('class') classess = 'sidebar';

  constructor() { }

  ngOnInit(): void {
  }

}
