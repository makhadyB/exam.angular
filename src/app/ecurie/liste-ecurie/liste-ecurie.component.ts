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
    this.http.get<any>('http://localhost/exam.angular/ecurie/liste-ecurie.php')
      .subscribe(response => {
        if (response.success) {
          this.ecurie = response.ecurie;
        } else {
          console.error('Erreur lors de la récupération des ecuries:', response.error);
        }
      });
  }
  // private apiUrl = 'URL_DU_BACKEND/ecuries.php'; // Remplacez par l'URL de votre backend

  // constructor(private http: HttpClient) {}

  // getEcuries(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
}
