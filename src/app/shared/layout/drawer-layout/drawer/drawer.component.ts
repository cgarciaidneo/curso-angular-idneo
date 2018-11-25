import { Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

export type DrawerState = 'open' | 'close';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  private _state: DrawerState = "close";

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  setStyle(style: string, value: any) {
    this._renderer.setStyle(this._elementRef.nativeElement, style, value)
  }

  @Output() stateChanged: EventEmitter<DrawerState> = new EventEmitter();

  open() {
    this._state = "open";
    this._emmitState();
  }

  close() {
    this._state = "close";
    this._emmitState();
  }

  toggle() {
    this._state === "open" ? this._state = "close" : this._state = "open";
    this._emmitState();
  }

  private _emmitState() {
    this.stateChanged.emit(this._state);
  }
}
