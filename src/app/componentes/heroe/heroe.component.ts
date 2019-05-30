import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
   heroe: Heroe = {
   nombre: '',
   bio: '',
   casa: 'Marvel'
   };
   nuevo = false;
   id: string;
   response: Response;
  constructor( private hs: HeroesService , private router: Router, private ar: ActivatedRoute) {
   this.ar.params.subscribe(
      params => {
      console.log (params);
      this.id = params['id'];
      if (this.id !== 'nuevo') {
        this.hs.getHeroe(this.id).subscribe(
          (data: Heroe) => this.heroe = data
        );

      }
      }
   );
  }

  ngOnInit() {
  }

  guardar () {
    console.log (this.heroe);
    if (this.id === 'nuevo') {
      this.hs.nuevoHeroe( this.heroe).subscribe(
        data => {
          this.router.navigate(['/heroe', data.name]);
        }, error => console.error(error)
      );
    } else {
      this.hs.actualizaHeroe(this.heroe, this.id).subscribe(
        data => {
          console.log(data);
        }, error => console.error(error)
      );
      }
  }
  agregarNuevo ( form: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    form.reset({casa: 'Marvel'});
  }
}
