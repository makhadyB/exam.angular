import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classement',
  standalone: true,
  imports: [AdminComponent,FormsModule,CommonModule],
  templateUrl: './classement.component.html',
  styleUrl: './classement.component.css'
})
export class ClassementComponent  implements OnInit{
  classement:any=[];
  lutteur:any=[];
constructor(private http:HttpClient){}
ngOnInit(): void {

    this.http.get("http://localhost/exam.angular/classement/classement.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.classement=reponse.data
    })
    this.http.get("http://localhost/exam.angular/lutteurs/liste-lutteur.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.lutteur=reponse.data
    })
    
   
}

}
