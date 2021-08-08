import { Component, OnInit } from '@angular/core';
import { DocChecklist } from '../entities/doc-checklist';
import { DocumentEnt } from '../entities/document';
import { DocumentFormService } from '../services/DocumentFormService';
import { DocumentService } from '../services/DocumentService';

@Component({
  selector: 'app-new-document-checklist',
  templateUrl: './new-document-checklist.component.html',
  styleUrls: ['./new-document-checklist.component.css']
})
export class NewDocumentChecklistComponent implements OnInit {
  checklist: DocChecklist;
  constructor(public service : DocumentFormService, public docService: DocumentService) {
    this.checklist = service.checklist;
   }

  ngOnInit(): void {
  }

  submit(){
    const doc = new DocumentEnt(this.service.basic_info.id, this.service.basic_info.ime,
      this.service.basic_info.tip, this.service.basic_info.plan_rada,
      this.service.checklist.allOpsCompleted, this.service.checklist.allTagsRemoved,
      this.service.checklist.groundingRemoved, this.service.checklist.readyForService);
      alert(JSON.stringify(doc));

      this.docService.add(doc).subscribe((res: any) => alert("UPISAN NOVI DOKUMENT"));
  }

}
