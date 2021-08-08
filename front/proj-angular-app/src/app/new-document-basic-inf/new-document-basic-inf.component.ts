import { Component, OnInit } from '@angular/core';
import { DocBasicInfo } from '../entities/doc-basic-info';
import { DocumentFormService } from '../services/DocumentFormService';
@Component({
  selector: 'app-new-document-basic-inf',
  templateUrl: './new-document-basic-inf.component.html',
  styleUrls: ['./new-document-basic-inf.component.css']
})
export class NewDocumentBasicInfComponent implements OnInit {

  basic_inf: DocBasicInfo;
  constructor(service: DocumentFormService) {
    this.basic_inf = service.basic_info;
  }

  ngOnInit(): void {
  }

}
