import { RouterModule, Routes } from '@angular/router';
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

import { StatistiqueComponent } from './statistique/statistique.component';

import { LoginComponent } from './login/login.component';

import { AccueilComponent } from './client/accueil/accueil.component';
import { ActualiteComponent } from './client/actualite/actualite.component';
import { LutteurComponent } from './client/lutteur/lutteur.component';
import { EcurieComponent } from './client/ecurie/ecurie.component';
import { CombatComponent } from './client/combat/combat.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { ClassementClientComponent } from './client/classement-client/classement-client.component';
import { ClassementComponent } from './classement/classement.component';


export const routes: Routes = [
    
     // { path: '', pathMatch: "full", redirectTo: "accueil" },

     { path: '', component: AccueilComponent },

     // admin
     
     {path:'admin' ,component:AdminComponent},

     {path:'admin/add-combat' ,component:AddCombatComponent},
     {path:'admin/delete-combat',component:DeleteCombatComponent},
     {path:'admin/liste-combat',component:ListeCombatComponent},
     {path:'admin/modif-combat',component:ModifCombatComponent},

     {path:'admin/add-ecurie' ,component:AddEcurieComponent},
     {path:'admin/delete-ecurie',component:DeleteEcurieComponent},
     {path:'admin/liste-ecurie',component:ListeEcurieComponent},
     {path:'admin/modif-ecurie',component:ModifEcurieComponent},
   
     {path:'admin/add-lutteur' ,component:AddLutteurComponent},
     {path:'admin/delete-lutteur',component:DeleteLutteurComponent},
     {path:'admin/liste-lutteur',component:ListeLutteurComponent},
     {path:'admin/modif-lutteur',component:ModifLutteurComponent},

     {path:'admin/add-actu' ,component:AddActualiteComponent},
     {path:'admin/delete-actu',component:DeleteActualiteComponent},
     {path:'admin/liste-actu',component:ListeActualiteComponent},
     {path:'admin/modif-actu',component:ModifActualiteComponent},

     {path:'admin/statistique',component:StatistiqueComponent},
     {path:'admin/classement',component:ClassementComponent},

     {path:'admin/add-ecurie' ,component:AddEcurieComponent},
     {path:'admin/delete-ecurie',component:DeleteEcurieComponent},
     {path:'admin/liste-ecurie',component:ListeEcurieComponent},
     {path:'admin/modif-ecurie',component:ModifEcurieComponent},

     
     { path: 'login', component: LoginComponent },
//     clients
     { path: 'accueil/actualite', component: ActualiteComponent },
     { path: 'accueil/classement', component: ClassementClientComponent },
     { path: 'accueil/lutteur', component:LutteurComponent },
     { path: 'accueil/ecurie', component: EcurieComponent},
     { path: 'accueil/combat', component: CombatComponent },
  
  
     

     //{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard ] }


];

