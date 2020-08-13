import { Component, OnInit } from '@angular/core';
import { HeroService } from './marvel-hero.service';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css'],
  providers: [ HeroService ] //Import the service page on the required page, but if its on all page, import it on the app.ts file
})
export class MarvelHeroesComponent implements OnInit {

  heroes: string[];
  inputHero = null;
  btnDisable = false;
  Adding = false;

  addHero(){
    this.heroes.push(this.inputHero);
    this.inputHero = null;
    this.Adding = false;
  }

  addMore(){
     this.Adding = !this.Adding;
  }


  constructor(private ajax: HeroService) {
    this.heroes = this.ajax.heroes;
  }

  ngOnInit(): void {
  }

}
