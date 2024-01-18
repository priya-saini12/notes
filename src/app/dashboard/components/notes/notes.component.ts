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
    // console.log(this.user.id);

    this._service.getInfo().subscribe((data) => {
      this.list = data;
      // console.log(this.list);
      this.list.forEach((element: any) => {
        if (element.userId == this.user.id) {
          this.notes.push(element);
        }
      });
      // console.log(this.notes);
    });
  }
  delete(id: any) {
    this._service.deleteNote(id).subscribe((data) => {
      this.notes;
    });
  }
  edit(id: any) {
    this._service.editById(id).subscribe((dataById) => {
      // console.log(dataById);
      this._route.navigate(['/dashboard/addnote', id]);
    });
  }
}
