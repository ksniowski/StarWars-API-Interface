import { Component, OnInit } from '@angular/core';
import { AppService, Planet } from '../services/app.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.less']
})
export class PlanetsComponent implements OnInit {

  SESSION_KEY: string = "planets";
  showSpinner: boolean = true;
  planets$: Observable<Planet[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    const loaded = this.appService.checkLoadStatus(this.SESSION_KEY);

    if (loaded == null) {
      this.planets$ = this.appService.getPlanets();
    } else {
      loaded.length = 10;
      this.planets$ = of(loaded);
    }

    this.planets$.subscribe(() => this.showSpinner = false)
  }

}
