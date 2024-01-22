import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-combat',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './add-combat.component.html',
  styleUrls: ['./add-combat.component.css']
})
export class AddCombatComponent implements OnInit{
  combat = {
    date_combat: '',
    lutteur1: '',
    lutteur2: '',
    vainqueur: '',
   
    
  };
  public lutteur: any[] = [];


  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.ajoutCombat();
   
   
    this.http.get("http://localhost/exam.angular/lutteurs/liste-lutteur.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.lutteur=reponse.data;
    })
  
  }


  ajoutCombat() {
    console.log(this.combat);

    const formData = new FormData();
     formData.append('date_combat', this.combat.date_combat);
     formData.append('lutteur1', this.combat.lutteur1);
     formData.append('lutteur2', this.combat.lutteur2);
     formData.append('vainqueur', this.combat.vainqueur);
    
   

  this.http.post('http://localhost/exam.angular/combat/add-combat.php',formData)
  .subscribe((reponse:any)=>
  {
    console.log("Réponse du backend= ",reponse)
    })
    
  
    
  }
  
  
}

