import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'] ,
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent   {
  user = {
    email: "",
    password: ""
  };
  
 constructor (public http: HttpClient,private router:Router){
 
 }

   Connecter() {
    const formData = new FormData();
    formData.append('email', this.user.email);
    formData.append('password', this.user.password);
   
   
   

     this.http.post("http://localhost/exam.angular/login.php",formData)
     .subscribe((reponse: any) => {
     this.user=reponse;
     
        if (reponse.success && reponse.data.length > 0) {
         this.router.navigate(['../add-lutteur']); 
         
       
        }
        else{
          alert("mot de pass ou login incorrecte")
        }
     
      console.log("Réponse du backend= ",reponse)
     })
     console.log(FormData);;
}
}
