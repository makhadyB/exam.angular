import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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


export class ListeLutteurComponent implements OnInit{
  public title="Sougn Lamb"
  
  public lutteur: any[]= []
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLutteurs();
  }

  getLutteurs() {
    this.http.get<any>('http://localhost/examangular/lutteurs/get.php')
      .subscribe(response => {
        if (response.success) {
          this.lutteur = response.lutteur;
        } else {
          console.error('Erreur lors de la récupération des lutteurs:', response.error);
        }
      });
  }
}