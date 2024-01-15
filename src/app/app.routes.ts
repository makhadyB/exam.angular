import { Routes } from '@angular/router';
import { AddCombatComponent } from './combat/add-combat/add-combat.component';
import { DeleteCombatComponent } from './combat/delete-combat/delete-combat.component';
import { ListeCombatComponent } from './combat/liste-combat/liste-combat.component';
import { ModifCombatComponent } from './combat/modif-combat/modif-combat.component';
import { AddEcurieComponent } from './ecurie/add-ecurie/add-ecurie.component';
import { DeleteEcurieComponent } from './ecurie/delete-ecurie/delete-ecurie.component';
import { ListeEcurieComponent } from './ecurie/liste-ecurie/liste-ecurie.component';
import { ModifEcurieComponent } from './ecurie/modif-ecurie/modif-ecurie.component';
import { AddLutteurComponent } from './lutteur/add-lutteur/add-lutteur.component';
import { DeleteLutteurComponent } from './lutteur/delete-lutteur/delete-lutteur.component';
import { ListeLutteurComponent } from './lutteur/liste-lutteur/liste-lutteur.component';
import { ModifLutteurComponent } from './lutteur/modif-lutteur/modif-lutteur.component';
import { AddActualiteComponent } from './actualite/add-actualite/add-actualite.component';
import { DeleteActualiteComponent } from './actualite/delete-actualite/delete-actualite.component';
import { ListeActualiteComponent } from './actualite/liste-actualite/liste-actualite.component';
import { ModifActualiteComponent } from './actualite/modif-actualite/modif-actualite.component';
import { NavComponent } from './nav/nav.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ClassementComponent } from './classement/classement.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    
     { path: 'accueil', pathMatch: "full", redirectTo: "accueil" },

     {path:'nav', component:NavComponent},
     {path:'add-combat' ,component:AddCombatComponent},
     {path:'delete-combat',component:DeleteCombatComponent},
     {path:'liste-combat',component:ListeCombatComponent},
     {path:'modif-combat',component:ModifCombatComponent},

     {path:'add-ecurie' ,component:AddEcurieComponent},
     {path:'delete-ecurie',component:DeleteEcurieComponent},
     {path:'liste-ecurie',component:ListeEcurieComponent},
     {path:'modif-ecurie',component:ModifEcurieComponent},
   
     {path:'add-lutteur' ,component:AddLutteurComponent},
     {path:'delete-lutteur',component:DeleteLutteurComponent},
     {path:'liste-lutteur',component:ListeLutteurComponent},
     {path:'modif-lutteur',component:ModifLutteurComponent},

     {path:'add-actu' ,component:AddActualiteComponent},
     {path:'delete-actu',component:DeleteActualiteComponent},
     {path:'liste-actu',component:ListeActualiteComponent},
     {path:'modif-actu',component:ModifActualiteComponent},

     {path:'statistique',component:StatistiqueComponent},
     {path:'classement',component:ClassementComponent},

     {path:'add-ecurie' ,component:AddEcurieComponent},
     {path:'delete-ecurie',component:DeleteEcurieComponent},
     {path:'liste-ecurie',component:ListeEcurieComponent},
     {path:'modif-ecurie',component:ModifEcurieComponent},

     
     { path: 'login', component: LoginComponent },
     

     //{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard ] }


];
