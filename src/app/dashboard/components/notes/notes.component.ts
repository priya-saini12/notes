import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/Sharable/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  list: any;
  user: any;
  notes: any[] = [];
  constructor(private _service: NotesService, private _route: Router) {
    this.user = JSON.parse(sessionStorage.getItem('user') || '');
    this._service.getNotes().subscribe((data) => {
      this.list = data;
      this.list.forEach((element: any) => {
        if (element.userId == this.user.id) {
          this.notes.push(element);
        }
      });
    });
  }
  delete(id: any) {
    this._service.deleteNote(id).subscribe((data) => {
      this.notes;
    });
  }
  edit(id: any) {
    this._service.editById(id).subscribe((dataById) => {
      this._route.navigate(['/dashboard/addnote', id]);
    });
  }
}
