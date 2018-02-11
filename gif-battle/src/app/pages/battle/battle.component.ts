import { Component, OnInit } from '@angular/core';
import { GifService } from '../../core/services/gif.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-battle',
  template: `
    <h1 class="title has-text-centered">Battle!</h1>

    <div class="columns" *ngIf="battleGifs">

      <div class="column is-half" *ngFor="let gif of battleGifs">
        <app-gif [url]="gif.url" [caption]="gif.caption"></app-gif>

        <a class="button is-info" (click)="vote(gif.id)">Vote!</a>
      </div>

    </div>
  `,
  styles: [`
    ::ng-deep img {
      width: 100%;
      height: 500px;
      border-radius: 4px;
    }

    .button {
      display: block;
      width: 100%;
    }
  `]
})
export class BattleComponent implements OnInit {
  battleGifs: Gif[];

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getNewBattle();
  }

  getNewBattle() {
    this.gifService.getBattle().subscribe(gifs => this.battleGifs = gifs);
  }

  vote(id) {
    this.gifService.vote(id).subscribe(data => {
      // load battle
      this.getNewBattle();

      // show notification
    })
  }

}
