import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-actualite',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './liste-actualite.component.html',
  styleUrl: './liste-actualite.component.css'
})
export class ListeActualiteComponent {
actualite:any= []
constructor(private http:HttpClient){}
ngOnInit(): void {
    
  this.http.get("http://localhost/exam.angular/actualite/liste-actualite.php").subscribe((reponse:any)=>{
    console.log(reponse);
    this.actualite=reponse.data;
  })
}

}
