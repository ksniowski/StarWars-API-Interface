import { Component, OnInit } from '@angular/core';
import { AppService, Starship } from '../services/app.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.less']
})
export class StarshipsComponent implements OnInit {

  SESSION_KEY: string = "starships";
  showSpinner: boolean = true;
  starships$: Observable<Starship[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    const loaded = this.appService.checkLoadStatus(this.SESSION_KEY);

    if (loaded == null) {
      this.starships$ = this.appService.getStarships();
    } else {
      loaded.length = 10;
      this.starships$ = of(loaded);
    }

    this.starships$.subscribe(() => this.showSpinner = false)
  }

}
