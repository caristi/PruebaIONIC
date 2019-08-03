import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario="Carlos"
  nombre= null
  apellido=null

  constructor(private router:Router,private activeRoute:ActivatedRoute) { 
    console.log('Entra al Contructor LOGIN')

    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.nombre = this.router.getCurrentNavigation().extras.state.nombre;
        this.apellido = this.router.getCurrentNavigation().extras.state.apellido;
      }else{
        console.log("ELse");
      }
    });
  }

  ngOnInit() {
  }

  irAInicio(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario
      }
    };
    this.router.navigate(['/inicio'],navigationExtras);
  }

}
