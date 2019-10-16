import { Component, OnInit } from '@angular/core';
import { AppService, Character } from '../services/app.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less']
})
export class CharactersComponent implements OnInit {

  SESSION_KEY: string = "characters";
  showSpinner: boolean = true;
  characters$: Observable<Character[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    const loaded = this.appService.checkLoadStatus(this.SESSION_KEY);

    if (loaded == null) {
      this.characters$ = this.appService.getCharacters();
    } else {
      loaded.length = 10;
      this.characters$ = of(loaded);
    }

    this.characters$.subscribe(() => this.showSpinner = false)
  }
}
