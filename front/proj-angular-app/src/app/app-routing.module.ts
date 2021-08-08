import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { DocumentsComponent } from './documents/documents.component';
import { ElementsComponent } from './elements/elements.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';
import { NewIncidentBasicInfComponent } from './new-incident-basic-inf/new-incident-basic-inf.component';
import { NewIncidentResenjeComponent } from './new-incident-resenje/new-incident-resenje.component';
import { NewElementComponent } from './new-element/new-element.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { NewIncidentOpremaComponent } from './new-incident-oprema/new-incident-oprema.component';
import { UserGuard } from './guards/user-guard';
import { NewDocumentBasicInfComponent } from './new-document-basic-inf/new-document-basic-inf.component';
import { NewDocumentChecklistComponent } from './new-document-checklist/new-document-checklist.component';
import { MapComponent } from './map/map.component';
import { NewDocumentOpremaComponent } from './new-document-oprema/new-document-oprema.component';
import { NewIncidentTeamsComponent } from './new-incident-teams/new-incident-teams.component';
import { LoginComponent } from './login/login.component';
import { NewIncidentMediaComponent } from './new-incident-media/new-incident-media.component';
import { RegComponent } from './reg/reg.component';
import { CallsComponent } from './calls/calls.component';
import { NewDocumentMediaComponent } from './new-document-media/new-document-media.component';



const routes: Routes = [
  {
      path: "",
      component: PocetnaComponent
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "reg",
    component: RegComponent
  },

  {
    path: "app",
    component: AppLayoutComponent,
    children: [
      {path: "dashboard", 
      component: DashboardComponent, 
      canActivate: [UserGuard]
      },

      
      {path: "incidents", 
      component: IncidentsComponent,
      canActivate: [UserGuard]
      },

      {path: "documents", 
      component: DocumentsComponent,
      canActivate: [UserGuard]
      },

      {path: "elements", 
      component: ElementsComponent,
      canActivate: [UserGuard]
      },

      {path: "map", 
      component: MapComponent,
      canActivate: [UserGuard]
      },
      
      {path: "new-incident-basic-inf", 
      component: NewIncidentBasicInfComponent,
      canActivate: [UserGuard]
      },

      {path: "new-incident-resenje", 
      component: NewIncidentResenjeComponent,
      canActivate: [UserGuard]
      },

      {path: "new-incident-oprema", 
      component: NewIncidentOpremaComponent,
      canActivate: [UserGuard]
      },

      {path: "new-incident-teams", 
      component: NewIncidentTeamsComponent,
      canActivate: [UserGuard]
      },

      {path: "new-incident-media", 
      component: NewIncidentMediaComponent,
      canActivate: [UserGuard]
      },

      {path: "new-incident-calls", 
      component: CallsComponent,
      canActivate: [UserGuard]
      },

      {path: "new-element", 
      component: NewElementComponent,
      canActivate: [UserGuard]
      },

      {
        path: "pretraga",
        component: PretragaComponent,
        canActivate: [UserGuard]
      },

      {
        path: "new-document-basic-inf", 
        component: NewDocumentBasicInfComponent,
        canActivate: [UserGuard]
      },
      
      {
        path: "new-document-checklist", 
        component: NewDocumentChecklistComponent,
        canActivate: [UserGuard]
      },
      
      {
        path: "new-document-oprema", 
        component: NewDocumentOpremaComponent,
        canActivate: [UserGuard]
      },

      {
        path: "new-document-media", 
        component: NewDocumentMediaComponent,
        canActivate: [UserGuard]
      },

      
      
  ]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
