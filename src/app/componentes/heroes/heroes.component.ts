import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []

})
export class HeroesComponent implements OnInit {
  heroes: any [] = [];
  loading = true;

  constructor( private hs: HeroesService, private router: Router) { 
    this.hs.getHeroes().subscribe(
      (data) => {
        console.log (data);
        this.heroes = data;
        this.loading = false;
      }
    );
  }

  ngOnInit() {
  }
borrarHeroe(key$: String) {
  console.log(key$);
  this.hs.borrarHeroe(key$).subscribe(
    respuesta =>{
      console.log(respuesta);
      if(respuesta){
  console.error(respuesta);
      } else {
        delete this.heroes[key$];
      }
    }
  );
}
}
