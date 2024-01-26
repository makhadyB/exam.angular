import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-lutteur',
  standalone: true,
  imports: [FormsModule,CommonModule,AccueilComponent],
  templateUrl: './lutteur.component.html',
  styleUrl: './lutteur.component.css'
})
export class LutteurComponent implements OnInit{
  public title="Sougn Lamb"
  
  public lutteur: any[]= []
  
  constructor(private http: HttpClient) {}

  
  ngOnInit(): void {
    
    this.http.get("http://localhost/exam.angular/lutteurs/liste-lutteur.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.lutteur=reponse.data;
    })
  }

}
