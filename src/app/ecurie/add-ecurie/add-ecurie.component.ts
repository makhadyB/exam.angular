import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-ecurie',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './add-ecurie.component.html',
  styleUrls: ['./add-ecurie.component.css']
})
export class AddEcurieComponent {
  ecurie = {
    nom: '',
    localisation: '',
    dirigeant: '',
   
    
  };

  constructor(private http: HttpClient) {}

  ajoutEcurie() {
    console.log(this.ecurie);

    const formData = new FormData();
     formData.append('nom', this.ecurie.nom);
     formData.append('localisation', this.ecurie.localisation);
     formData.append('dirigeant', this.ecurie.dirigeant);
    
   

  this.http.post('http://localhost/exam.angular/ecurie/add-ecurie.php', formData)
  .subscribe((reponse:any)=>
  {
    console.log("Réponse du backend= ",reponse)
    })
    console.log(FormData);
  
    if (Response) {
      // Si l'ajout est réussi, afficher une alerte
      alert('Écurie ajoutée avec succès!');
    } 
  }
  
  
}
