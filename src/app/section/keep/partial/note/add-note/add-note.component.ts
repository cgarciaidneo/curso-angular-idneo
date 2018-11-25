import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { Note }                                                                 from "../../../../../core/object/note";
import { hasValue }                                                             from "../../../../../core/util/util";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
  @Output() created: EventEmitter<Note<string>> = new EventEmitter();
  @ViewChild('mainTextarea') textarea: ElementRef;

  _note: Note<string> = new Note<string>();
  _active: boolean = false;

  @HostListener('click', ['$event']) hostClick(event) {
    event.stopPropagation();

    if(this._active) return;

    this._active = true;
    setTimeout(() => {
      this.textarea.nativeElement.focus();
    })
  }

  @HostListener('document:click') documentClick() {
    this._addNote();
  }

  private _addNote() {
    if (hasValue(this._note.title) || hasValue(this._note.content)) {
      this.created.emit(this._note);
    }
    this._active = false;
    this._note = new Note<string>();
  }

}
