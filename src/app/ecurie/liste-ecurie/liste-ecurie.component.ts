import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AdminComponent } from '../../admin/admin.component';


@Component({
  selector: 'app-liste-ecurie',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule,AdminComponent],
  templateUrl: './liste-ecurie.component.html',
  styleUrls: ['./liste-ecurie.component.css'],
  animations: [
    trigger('cardAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
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

  supprimerEcurie(id:number) {
    console.log('Identifiant de l\'écurie à supprimer :', id);
    if (window.confirm('Voulez vous vraiment supprimer cette écurie'))
    this.http.delete(`http://localhost/exam.angular/ecurie/delete-ecurie?id=${id}`)
    .subscribe( () => {
        console.log('Ecurie supprimé avec succès.');
    });
}

  
  // cardAnimationState(uneEcurie: any) {
  //   // Utilisez une logique pour déterminer l'état de l'animation en fonction de votre application
  //   // Vous pouvez utiliser une logique basée sur une condition, un index, ou autre.
  //   return 'in';
  // }
}

 