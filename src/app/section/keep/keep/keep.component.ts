import {Component, OnInit} from '@angular/core';
import {Title}             from "@angular/platform-browser";
import { Note }            from "../../../core/object/note";
import {ISideNavMenu}      from "../partial/navigation/side-nav/side-nav.component";


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

  _noteList: Note<string>[] = [{
    title: "T1",
    content: "Content 1"
  },
    {
      title: "T2",
      content: "Content 2"
    }];

  constructor(private _titleService: Title) {
  }

  ngOnInit() {
    this._titleService.setTitle('Idneo Keep');
  }

  createHandler(note: Note<string>) {
    this._noteList.push(note);
  }

}
