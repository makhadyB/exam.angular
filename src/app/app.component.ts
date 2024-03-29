
import { CommonModule } from '@angular/common';
import {  RouterModule, RouterOutlet } from '@angular/router';

import { AddCombatComponent } from './combat/add-combat/add-combat.component';
import { ListeCombatComponent } from './combat/liste-combat/liste-combat.component';
import { ListeActualiteComponent } from './actualite/liste-actualite/liste-actualite.component';
import { ModifCombatComponent } from './combat/modif-combat/modif-combat.component';
import { AddActualiteComponent } from './actualite/add-actualite/add-actualite.component';
import { ModifActualiteComponent } from './actualite/modif-actualite/modif-actualite.component';
import { DeleteCombatComponent } from './combat/delete-combat/delete-combat.component';
import { AddLutteurComponent } from './lutteur/add-lutteur/add-lutteur.component';
import { ModifLutteurComponent } from './lutteur/modif-lutteur/modif-lutteur.component';
import { DeleteLutteurComponent } from './lutteur/delete-lutteur/delete-lutteur.component';
import { ListeLutteurComponent } from './lutteur/liste-lutteur/liste-lutteur.component';
import { AddEcurieComponent } from './ecurie/add-ecurie/add-ecurie.component';
import { ModifEcurieComponent } from './ecurie/modif-ecurie/modif-ecurie.component';
import { DeleteEcurieComponent } from './ecurie/delete-ecurie/delete-ecurie.component';
import { ListeEcurieComponent } from './ecurie/liste-ecurie/liste-ecurie.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { ActualiteComponent } from './client/actualite/actualite.component';
import { CombatComponent } from './client/combat/combat.component';
import { LutteurComponent } from './client/lutteur/lutteur.component';
import { EcurieComponent } from './client/ecurie/ecurie.component';

import { AdminComponent } from './admin/admin.component';
import { ClassementComponent } from './classement/classement.component';
import { ClassementClientComponent } from './client/classement-client/classement-client.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,RouterOutlet,AdminComponent,ClassementComponent,ClassementClientComponent,
    AddCombatComponent,ListeCombatComponent,ModifCombatComponent,DeleteCombatComponent,
    AddActualiteComponent,ListeActualiteComponent,ModifActualiteComponent,DeleteCombatComponent,
  AddLutteurComponent,DeleteLutteurComponent,ModifLutteurComponent,ListeLutteurComponent,
AddEcurieComponent,ModifEcurieComponent,DeleteEcurieComponent,ListeEcurieComponent,

StatistiqueComponent,AccueilComponent,LoginComponent,ActualiteComponent,CombatComponent,LutteurComponent,EcurieComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen.angular';
 

}
