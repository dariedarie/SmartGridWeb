import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { NewIncidentComponent } from './new-incident/new-incident.component';
import { NewIncidentBasicInfComponent } from './new-incident-basic-inf/new-incident-basic-inf.component';
import { NewIncidentResenjeComponent } from './new-incident-resenje/new-incident-resenje.component';
import { DocumentsComponent } from './documents/documents.component';
import { ElementsComponent } from './elements/elements.component';
import { NewElementComponent } from './new-element/new-element.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { PretragaResultComponent } from './pretraga-result/pretraga-result.component';
import { NewIncidentOpremaComponent } from './new-incident-oprema/new-incident-oprema.component';

import { HttpClientModule } from '@angular/common/http';
import { NewDocumentBasicInfComponent } from './new-document-basic-inf/new-document-basic-inf.component';
import { NewDocumentChecklistComponent } from './new-document-checklist/new-document-checklist.component';
import { ElementsSortedComponent } from './elements-sorted/elements-sorted.component';
import { MapComponent } from './map/map.component';
import { NewDocumentOpremaComponent } from './new-document-oprema/new-document-oprema.component';
import { NewIncidentTeamsComponent } from './new-incident-teams/new-incident-teams.component';
import { LoginComponent } from './login/login.component';
import { NewIncidentMediaComponent } from './new-incident-media/new-incident-media.component';
import { RegComponent } from './reg/reg.component';
import { CallsComponent } from './calls/calls.component';
import { NewDocumentMediaComponent } from './new-document-media/new-document-media.component';






@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    DashboardComponent,
    IncidentsComponent,
    AppLayoutComponent,
    NewIncidentComponent,
    NewIncidentBasicInfComponent,
    NewIncidentResenjeComponent,
    DocumentsComponent,
    ElementsComponent,
    NewElementComponent,
    PretragaComponent,
    PretragaResultComponent,
    NewIncidentOpremaComponent,
    NewDocumentBasicInfComponent,
    NewDocumentChecklistComponent,
    ElementsSortedComponent,
    MapComponent,
    NewDocumentOpremaComponent,
    NewIncidentTeamsComponent,
    LoginComponent,
    NewIncidentMediaComponent,
    RegComponent,
    CallsComponent,
    NewDocumentMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
