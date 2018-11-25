import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ISideNavMenu} from "../partial/navigation/side-nav/side-nav.component";


@Component({
  selector: 'app-keep',
  templateUrl: './keep.component.html',
  styleUrls: ['./keep.component.scss']
})
export class KeepComponent implements OnInit {

  sideNavMenu: ISideNavMenu[] = [
    {
      items: [
        {
          label: 'Notas',
          icon: 'wb_incandescent',
          routerLink: ''
        }
      ]
    },
    {
      items: [
        {
          label: 'Papelera',
          icon: 'delete',
          routerLink: 'trash'
        }
      ]
    }
  ];

  open = true;

  constructor(private _titleService: Title) {
  }

  ngOnInit() {
    this._titleService.setTitle('Idneo Keep');
  }

}
