import { Component, OnInit } from '@angular/core';
import { GifService } from '../../core/services/gif.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-create',
  template: `
    <h1 class="title has-text-centered">Create a Gif!</h1>
    <div class="box has-text-centered">
      <app-gif
        *ngIf="randomGif"
        [url]="randomGif.url"
        [caption]="caption"
      >
      </app-gif>

      <!-- input caption -->
      <div class="field">
        <input type="text" class="input" [(ngModel)]="caption"/>
      </div>

      <!-- create button -->
      <a class="button is-success" (click)="saveGif()">
        Create
      </a>

      <!-- create button -->
      <a class="button is-primary" href="./create">
        Refresh
      </a>
    </div>
  `,
  styles: [`
    .button {
      margin-top: 10px;
    }

    .box {
        margin-left: 20%;
        margin-right: 20%;
    }


    .button {
      display: block;
      width: 100%;
    }

    ::ng-deep img {
      width: 100%;
    }
  `]
})
export class CreateComponent implements OnInit {
  randomGif: Gif;
  caption = '';

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getRandomGif();
  }

  getRandomGif() {
    this.gifService.getRandom().subscribe(gif => { this.randomGif = gif; });
  }

  saveGif() {
    this.gifService.save(this.randomGif.id, this.randomGif.url, this.caption)
      .subscribe(data => {
        //reload gif, get a new random gifs
        this.getRandomGif();

        // clear caption
        this.caption = '';

        // show notification of success
      });
  }

}
