import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-incident-media',
  templateUrl: './new-incident-media.component.html',
  styleUrls: ['./new-incident-media.component.css']
})
export class NewIncidentMediaComponent implements OnInit {

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
