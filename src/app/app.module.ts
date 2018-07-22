import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { ExamplesComponent } from './examples/examples.component';
import { CommandsComponent } from './commands/commands.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ExamplesComponent,
    CommandsComponent
  ],
  imports: [
    BrowserModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
