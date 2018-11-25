import {Component, Input, OnInit} from '@angular/core';


export interface IMenuItem {
  label?: string,
  icon?: string,
  routerLink?: string
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: IMenuItem;

  constructor() { }

  ngOnInit() {
  }

}
