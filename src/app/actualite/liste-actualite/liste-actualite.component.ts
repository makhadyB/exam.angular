import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import { AdminComponent } from '../../admin/admin.component';


@Component({
  selector: 'app-liste-actualite',
  standalone: true,
  imports: [FormsModule,HttpClientModule,AdminComponent],
  templateUrl: './liste-actualite.component.html',
  styleUrls: ['./liste-actualite.component.css']
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

formatDate(date: string): string {
  const now = moment();
  const dateAdded = moment(date);
  const daysDiff = now.diff(dateAdded, 'days');
  return `${daysDiff} jours`;
}

}
