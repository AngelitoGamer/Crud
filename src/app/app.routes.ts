import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';


export const ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'heroes'  },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes'  },

];


