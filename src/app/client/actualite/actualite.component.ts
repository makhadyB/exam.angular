import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-actualite',
  standalone: true,
  imports: [FormsModule,AccueilComponent],
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.css'
})
export class ActualiteComponent implements OnInit{
  actualite:any= []
  constructor(private http:HttpClient){}
  ngOnInit(): void {
      
    this.http.get("http://localhost/exam.angular/actualite/liste-actualite.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.actualite=reponse.data;
    })
  }

  formatDate(date: string): string {
    const now = moment();
    const dateAdded = moment(date);
    const daysDiff = now.diff(dateAdded, 'days');
    return `${daysDiff} jours`;
  }
}
