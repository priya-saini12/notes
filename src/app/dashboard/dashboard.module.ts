import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '../Sharable/Material/material/material.module';
import { NotesComponent } from './components/notes/notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NotesService } from '../Sharable/notes.service';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [DashboardComponent, AddNoteComponent, NotesComponent],
  imports: [CommonModule, MaterialModule, DashboardRoutingModule],
  providers: [NotesService],
})
export class DashboardModule {
  constructor(){
    console.warn('dashboard');
  }
}
