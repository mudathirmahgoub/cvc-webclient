import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {
  @ViewChild('editor') editor;
  text = '';
  ngAfterViewInit() {
    console.log(this.editor);
    this.editor.setTheme('idle_fingers');
    this.editor.setMode('smt_lib');
  }
}
