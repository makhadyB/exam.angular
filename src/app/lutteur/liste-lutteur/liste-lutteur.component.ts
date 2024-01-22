import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';
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


export class ListeLutteurComponent implements OnInit {
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