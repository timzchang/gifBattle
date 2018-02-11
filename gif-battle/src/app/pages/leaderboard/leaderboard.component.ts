import { Component, OnInit } from '@angular/core';
import { GifService } from '../../core/services/gif.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-leaderboard',
  template: `
    <h1 class="title has-text-centered">Leaderboard</h1>

    <table class="table is-bordered is-hover is-striped" *ngIf="leaderBoard">
      <tbody>
        <tr *ngFor="let gif of leaderBoard; let i = index">
          <td>{{i + 1}}</td>
          <td>
            <app-gif [url]="gif.url" [caption]="gif.caption"></app-gif>
          </td>
          <td>{{ gif.votes }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    table {
      margin: 0 auto;
    }
  `]
})
export class LeaderboardComponent implements OnInit {
  leaderBoard: Gif[];

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.gifService.getLeaderboard().subscribe(gifs => this.leaderBoard = gifs);
  }

}
