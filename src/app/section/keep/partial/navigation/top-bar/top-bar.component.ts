import { Component, Input, OnInit } from '@angular/core';
import { DrawerComponent }          from "../../../../../shared/layout/drawer-layout/drawer/drawer.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  @Input() drawer: DrawerComponent;

  ngOnInit() {
  }

}
