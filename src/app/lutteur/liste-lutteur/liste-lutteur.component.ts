import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-liste-lutteur',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule],
  templateUrl: './liste-lutteur.component.html',
  styleUrl: './liste-lutteur.component.css'
})


export class ListeLutteurComponent {
  public title="Sougn Lamb"
  
  public lutteur: any[]= []
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLutteurs();
  }

  getLutteurs() {
    const postData = {};
    this.http.post<any>('http://localhost/exam.angular/lutteur/liste-lutteur.php',postData)
      .subscribe(response => {
        if (Array.isArray(response)) {
          this.lutteur = response;
        } else if (response && response.lutteur) {
          // Si la structure est { lutteur: [...] }
          this.lutteur = response.lutteur;
        } else {
          console.error('La réponse ne contient pas un tableau d\'écuries valide :', response);
        }
      });
  }
}