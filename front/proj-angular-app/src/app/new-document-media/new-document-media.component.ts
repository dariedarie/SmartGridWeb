import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-document-media',
  templateUrl: './new-document-media.component.html',
  styleUrls: ['./new-document-media.component.css']
})
export class NewDocumentMediaComponent implements OnInit {

  urls = new Array<string>();
  detectFiles(event: any) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
