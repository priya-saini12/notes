import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  url = 'http://localhost:3000/Notes';
  constructor(private http: HttpClient) {}
  addNote(note: any): Observable<any> {
    return this.http.post(this.url, note);
  }
  getNotes(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  deleteNote(id: any): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
  editById(id: any): Observable<any> {
    if (id) {
      return this.http.get(this.url + '/' + id);
    } else {
      return this.http.get(this.url);
    }
  }
  updateNote(id: any, note: any): Observable<any> {
    return this.http.put<any>(this.url + '/' + id, note);
  }
}
