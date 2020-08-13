import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarvelHeroesComponent } from './marvel-heroes/marvel-heroes.component';
import { DcComicsComponent } from './dc-comics/dc-comics.component';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';

import { DataService } from  './services/data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';

const routeLists: Routes = [
  {path: "", redirectTo: '/comics', pathMatch: 'full'},
  {path: "comics", component: DcComicsComponent},
  {path: "comics/:id", component: ComicDetailsComponent},
  {path: "marvels", component: MarvelHeroesComponent},
  {path: "users", component: UserComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MarvelHeroesComponent, 
    DcComicsComponent,
    UserComponent,
    PageNotFoundComponent,
    ComicDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
