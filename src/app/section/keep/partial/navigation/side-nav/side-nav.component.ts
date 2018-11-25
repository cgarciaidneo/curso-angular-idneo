import {Component, Input, OnInit} from '@angular/core';
import {IMenuItem} from "./menu-item/menu-item.component";

export interface ISideNavMenu {
    title?: string,
    items: IMenuItem[]
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavMenu: ISideNavMenu[];

  constructor() { }

  ngOnInit() {
  }

}
