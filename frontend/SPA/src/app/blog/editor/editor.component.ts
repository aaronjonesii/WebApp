import {Component, Input, OnInit } from '@angular/core';
import {Post} from "../posts";

// CKEDITOR ITEMS BELOW:
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
import {ChangeEvent} from "@ckeditor/ckeditor5-angular/ckeditor.component";
import {post} from "selenium-webdriver/http";

@Component({
  selector: 'anon-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() postDetails: string;
  @Input() smallConfig: boolean;
  @Input() isDisabled: boolean;
  public model = {
    editorData: this.postDetails
  };
  public Editor = InlineEditor;
  fulleditorConfig = {
    toolbar: [ 'undo', 'redo', '|',
      'heading', 'bold', 'italic', 'blockQuote', 'numberedList', 'bulletedList', '|',
      'ckfinder', 'imageTextAlternative', 'imageUpload', 'imageStyle:full', 'imageStyle:side',
      'link', 'mediaEmbed',
      '|', 'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells']
  };
  editorConfig = {
    toolbar: {
      items: ['undo', 'redo', 'heading', 'bold', 'italic', 'blockQuote'],
      viewportTopOffset: 30
    }
  };

  constructor() { }

  ngOnInit() {
    // Get full list of toolbar options
    // console.log(this.Editor.create().then( editor => { console.log( Array.from( editor.ui.componentFactory.names()) ) }));
    // Test extra plugins
    // console.log(this.Editor.create( document.querySelector('#editortest'), this.editorConfig ).then(editor => console.log(editor) ) );

    // console.log('OnInit: ', this.postDetails);
    this.model = {
      editorData: this.postDetails
    };
  }


  public onChanges ( { editor }: ChangeEvent ) {
    const data = editor.getData();
    this.postDetails = data;
    // console.log('Change detected, new content is: ', data);
    // console.log('New Model Content: ', this.model);
  }


}
