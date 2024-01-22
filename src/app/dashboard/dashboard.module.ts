import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../Sharable/Material/material/material.module';
import { NotesService } from '../Sharable/notes.service';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent, AddNoteComponent, NotesComponent],
  imports: [CommonModule, MaterialModule, DashboardRoutingModule],
  providers: [NotesService],
})
export class DashboardModule {}
