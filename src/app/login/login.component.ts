import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Form:any=
  {
     email:"",
   password:""
 }
 constructor (public http: HttpClient,private router:Router){
 
 }
 
   
   Connecter() {
     // Utilisez this.http comme service HttpClient pour effectuer une requête HTTP.
     // En outre, la syntaxe correcte pour une requête POST est modifiée.
     this.http.post("http://localhost/exam.angular/login.php", {
       email: this.Form.email,
       password: this.Form.password,
     })
     .subscribe((response: any) => {
       // Utilisez des accolades pour définir le bloc de code d'une fonction fléchée.
       if (response.status) {
        this.router.navigate(['/add-lutteur']); // Redirige vers la route '/AppComponent'
       
       } else {
         alert('Erreur : mot de passe ou login incorrecte!');
       }
       console.log(response);
     });
}
}
