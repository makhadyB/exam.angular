import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../../admin/admin.component';


@Component({
  selector: 'app-add-actualite',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule,AdminComponent],
  templateUrl: './add-actualite.component.html',
  styleUrl: './add-actualite.component.css'
})
export class AddActualiteComponent implements OnInit {
  actualite={
    user_id:'',
    contenu:'',
    teaser:''
  }
  utilisateur:any=[];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    // Au moment de l'initialisation du composant, chargez la liste des écuries
    //this.ajoutactualite();
  
    this.http.get("http://localhost/exam.angular/user/liste-user.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.utilisateur=reponse.data;
    })
  
  }

  ajoutactualite() {
    console.log(this.actualite);

    const formData = new FormData();
     formData.append('user_id', this.actualite.user_id);
     formData.append('contenu', this.actualite.contenu);
     formData.append('teaser', this.actualite.teaser);
    
   

  this.http.post('http://localhost/exam.angular/actualite/add-actualite.php', formData)
  .subscribe((reponse:any)=>
  {
    console.log("Réponse du backend= ",reponse);
    if (reponse) {
     
      alert('actualité ajoutée avec succès!');
    } 

    })
    console.log(FormData);
  
    
  }
  

}
