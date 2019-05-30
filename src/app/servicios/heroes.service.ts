import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Heroe} from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesURL= 'https://appcrud-a9c16.firebaseio.com/heroes.json';
  heroeURL = 'https://appcrud-a9c16.firebaseio.com/heroes';

  constructor( private http: HttpClient) { }

  nuevoHeroe (heroe: Heroe ) {
  const body = JSON.stringify(heroe);
  const headers = new HttpHeaders ({
    'Content-type': 'aplication/json'
  });
  return this.http.post<Response>(this.heroesURL, body , {headers})
  .pipe(map( res => {
    console.log(res);
    return res;
  }));
  }

  actualizaHeroe ( heroe: Heroe , key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders ({
      'Content-type': 'aplication/json'
    });
    const url = `${this.heroeURL}/${key$}.json`;
    return this.http.put(url, body, {headers})
    .pipe(map( res => {
      console.log(res);
      return res;
    }));
  }


getHeroe( key$: string) {
  const url = `${this.heroeURL}/${key$}.json`;
  return this.http.get(url).pipe(map(res => res));
}

getHeroes () {
  return this.http.get(this.heroesURL).pipe(map(res => res));
}

borrarHeroe(key$: string) {
  const url = `${this.heroeURL}/${key$}.json`;
  return this.http.delete(url).pipe(map(res => res));
 }

}