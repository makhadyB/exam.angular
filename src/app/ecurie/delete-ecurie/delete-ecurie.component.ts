import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-ecurie',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './delete-ecurie.component.html',
  styleUrl: './delete-ecurie.component.css'
})
export class DeleteEcurieComponent {
  constructor(private http: HttpClient) { }

  supprimerEcurie(idEcurie: number): void {
    this.http.delete(`http://localhost/exam.angular/Ecuries/delete-Ecurie/${idEcurie}`)
      .subscribe(
        () => {
          console.log('Ecurie supprimé avec succès.');
          // Vous pouvez mettre à jour la liste des Ecuries ou effectuer d'autres actions nécessaires ici.
        },
        (erreur) => {
          console.error('Erreur lors de la suppression du Ecurie :', erreur);
          // Gérer l'erreur (afficher un message à l'utilisateur, etc.)
        }
      );
  }
}
