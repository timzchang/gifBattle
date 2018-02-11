import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Gif } from '../../models/gif.model';

@Injectable()
export class GifService {
  apiUrl = 'https://wt-37a312e525e8a88c516aa97d0c620a48-0.run.webtask.io/gif-battle';

  constructor(private http: HttpClient) {}

  // Create ==================================
  // get random gif
  getRandom(): Observable<Gif> {
    return this.http.get<Gif>(`${this.apiUrl}/random`);
  }

  // store gif
  save(id: string, url: string, caption: string): Observable<any>  {
    return this.http.post(this.apiUrl, {
      id,
      url,
      caption,
      votes: 0,
      created: Date.now()}
    );
  }

  // Battle ==================================
  // get a battle of 2 gifs
  getBattle(): Observable<Gif[]> {
    return this.http.get<Gif[]>(`${this.apiUrl}/vs`);
  }

  // vote on gif
  vote(id): Observable<any> {
    return this.http.post(`${this.apiUrl}/vote`, {id});
  }

  // Leaderboard =============================
  // get Leaderboard
  getLeaderboard(): Observable<Gif[]> {
    return this.http.get<Gif[]>(`${this.apiUrl}/leader`);
  }

}
