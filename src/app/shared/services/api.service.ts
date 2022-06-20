import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class apiService {
  constructor(private http: HttpClient) {}
  apiURL = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getQuiz(category: any) {
    console.log('bacon');
    
    return this.http.get(this.apiURL + '/quiz/' + category).subscribe((res) => {
      console.log(res);
    })
  }
}
