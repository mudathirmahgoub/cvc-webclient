import { Component, OnInit } from '@angular/core';
import {AceAjax} from 'ace';

declare var ace: AceAjax.Ace;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  constructor() {}
   editor: AceAjax.Editor;
  ngOnInit() {
     this.editor = ace.edit('editor');
    // this.editor.setTheme('ace/theme/idle_fingers');
    // this.editor.getSession().setMode('ace/mode/lustre');
  }
}
