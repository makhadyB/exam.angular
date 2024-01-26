import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-ecurie',
  standalone: true,
  imports: [FormsModule,CommonModule,AccueilComponent],
  templateUrl: './ecurie.component.html',
  styleUrl: './ecurie.component.css'
})
export class EcurieComponent implements OnInit {
  ecurie: any= [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    
    this.http.get("http://localhost/exam.angular/ecurie/liste-ecurie.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.ecurie=reponse.data;
    })
  }

 

}
