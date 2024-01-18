import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/Sharable/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  id: any;
  note: any;
  addNotes: FormGroup;

  constructor(private _service: NotesService, private _router: ActivatedRoute) {
    this.addNotes = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    {
      this.id = this._router.snapshot.paramMap.get('id');
      this._service.editById(this.id).subscribe((data) => {
        this.note = data;
        // console.log(this.note);
        this.addNotes.get('title')?.setValue(this.note.title);
        this.addNotes.get('description')?.setValue(this.note.description);
      });
    }
  }
  add() {
    let user = JSON.parse(sessionStorage.getItem('user') || '');
    // console.log(user.id);

    let notes = {
      title: this.addNotes.value.title,
      description: this.addNotes.value.description,
      userId: user.id,
    };
    this._service.addNote(notes).subscribe((data) => {
      //     // console.log(data);
      this.clear();
      //     // this._route.navigateByUrl('/dashboard');
    });
  }
  clear() {
    // this.addNotes.get("title")?.setValue('');
    // this.addNotes.get("description")?.setValue('');
    this.addNotes.reset();
  }
  update() {
    let updatedNote = {
      title: this.addNotes.value.title,
      description: this.addNotes.value.description,
      userId: this.note.userId,
    };
    this._service.updateNote(this.id, updatedNote).subscribe((data) => {
      // this.clear();
    });
  }
}
