import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-lutteur',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-lutteur.component.html',
  styleUrls: ['./add-lutteur.component.css']
})
export class AddLutteurComponent implements OnInit {
  lutteur = {
    nom: '',
    taille: '',
    poids: '',
    statu: '',
    ecurie_id: '',
    photo: '',
  };
  public ecurie: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Au moment de l'initialisation du composant, chargez la liste des écuries
    this.valider();
  
    this.http.get("http://localhost/exam.angular/ecurie/liste-ecurie.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.ecurie=reponse.data;
    })
  
  }

  valider() {
    console.log(this.lutteur);

    const formData = new FormData();
    formData.append('nom', this.lutteur.nom);
    formData.append('poids', this.lutteur.poids);
    formData.append('taille', this.lutteur.taille);
    formData.append('statu', this.lutteur.statu);
    formData.append('ecurie_id', this.lutteur.ecurie_id);
    formData.append('photo', this.lutteur.photo);

    this.http.post('http://localhost/exam.angular/lutteurs/add-lutteur.php',formData)
    .subscribe((reponse:any)=>
  {
    console.log("Réponse du backend= ",reponse)
    })
   // console.log(FormData);
  
   
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.lutteur.photo = file;
  }

  
}

  // .subscribe(response => {
      //   console.log('response = ', response);
      //   if (response.success) {
      //     // Si l'ajout est réussi, afficher une alerte
      //     alert('Lutteur ajouté avec succès!');
      //   } else {
      //     console.error('Erreur lors de l\'ajout du lutteur:', response.error);
      //   }
      // })