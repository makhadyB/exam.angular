import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-combat',
  standalone: true,
  imports: [FormsModule,CommonModule,AccueilComponent],
  templateUrl: './combat.component.html',
  styleUrl: './combat.component.css'
})
export class CombatComponent implements OnInit  {
  combats:any[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
  
      this.http.get("http://localhost/exam.angular/combat/liste-combat.php").subscribe((reponse:any)=>{
        console.log(reponse);
        this.combats=reponse.data
      })
  
      
     
}
}
