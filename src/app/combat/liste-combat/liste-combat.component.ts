import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-combat',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './liste-combat.component.html',
  styleUrl: './liste-combat.component.css'
})
export class ListeCombatComponent  implements OnInit{
combats:any[]=[];
constructor(private http:HttpClient){}
ngOnInit(): void {

    this.http.get("http://localhost/exam.angular/combat/liste-combat.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.combats=reponse.data
    })

    
   
}

}
