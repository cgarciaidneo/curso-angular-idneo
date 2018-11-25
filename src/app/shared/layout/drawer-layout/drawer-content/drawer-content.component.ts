import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-drawer-content',
  templateUrl: './drawer-content.component.html',
  styleUrls: ['./drawer-content.component.scss']
})
export class DrawerContentComponent {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  setStyle(style: string, value: any){
    this._renderer.setStyle(this._elementRef.nativeElement, style, value)
  }
}


