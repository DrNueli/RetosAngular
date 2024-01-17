import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user:User = new User("","","","https://socifosa.es/wp-content/uploads/2022/02/Logo_Congreso_Ciencia_Sanitaria_internacional_online-300x178.png","");

  constructor(){
  }

  modificarUser(name:string,apellido:string,email:string, imagen:string){
    if(name != "" && apellido != "" && email != "" && imagen != "" ){
      this.user.name = name;
      this.user.apellido = apellido;
      this.user.email = email;
      this.user.imagen = imagen;
      console.log(this.user.name);
    }else{
      alert("Por favor, introduce todos los campos");
    }

  }

}