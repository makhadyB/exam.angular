import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-ecurie',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './liste-ecurie.component.html',
  styleUrls: ['./liste-ecurie.component.css']
})
export class ListeEcurieComponent implements OnInit {
ecurie: any= [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    
    this.http.get("http://localhost/exam.angular/ecurie/liste-ecurie.php").subscribe((reponse:any)=>{
      console.log(reponse);
      this.ecurie=reponse.data;
    })
  }

 
getecuries() {

    // this.http.get('http://localhost/exam.angular/ecurie/liste-ecurie.php')
    // .subscribe((reponse:any)=>{
    //   console.log("responseeee", reponse);
    //   // this.ecurie=reponse
      
    // });
  }
  
}

 // if (Array.isArray(response)) {
        //   this.ecurie = response;
        // } else if (response && response.ecurie) {
        //   // Si la structure est { ecurie: [...] }
        //   this.ecurie = response.ecurie;
        // } else {
        //   console.error('La réponse ne contient pas un tableau d\'écuries valide :', response);
        // }