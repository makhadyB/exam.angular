import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-ecurie',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './liste-ecurie.component.html',
  styleUrl: './liste-ecurie.component.css'
})
export class ListeEcurieComponent {
public ecurie: any[]= []
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getecuries();
  }

 
  
  
  getecuries() {
    const postData = {};
  
    this.http.post<any>('http://localhost/exam.angular/ecurie/liste-ecurie.php', postData)
      .subscribe(response => {
        // Assurez-vous que response est un tableau (array) d'écuries.
        if (Array.isArray(response)) {
          this.ecurie = response;
        } else if (response && response.ecurie) {
          // Si la structure est { ecurie: [...] }
          this.ecurie = response.ecurie;
        } else {
          console.error('La réponse ne contient pas un tableau d\'écuries valide :', response);
        }
      });
  }
  
  
}
