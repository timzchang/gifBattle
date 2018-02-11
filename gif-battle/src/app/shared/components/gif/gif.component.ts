import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gif',
  template: `
    <div class="gif-container" >
      <!-- image -->
      <img [src]="url" alt="" className=""/>

      <!-- caption -->
      <div class="caption">{{ caption }}</div>
    </div>
  `,
  styles: [`
    .gif-container {
      position: relative;
      border-radius: 3px;
      min-height: 100px;
      text-align: center;
    }

    .caption {
      display: block;
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 30px;
      text-align: center;
      color: #FFF;
      font-size: 30px;
      text-transform: uppercase;
      line-height: 1;
      word-break: break-all;
      text-shadow: 1px 1px 0 #000;
    }

    img {
      align-self: center;
    }
  `]
})
export class GifComponent implements OnInit {
  @Input() url: string;
  @Input() caption: string;

  constructor() { }

  ngOnInit() {
  }

}
