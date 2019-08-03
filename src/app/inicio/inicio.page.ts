import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  argumentos:null
  id:any

  private nombre;
  private apellido;
  
  constructor(private router:Router,private activeRoute:ActivatedRoute) { 
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    
  }

  irALogin(){
    this.router.navigate(['/login']);

    let navigationExtras: NavigationExtras = {
      state: {
        nombre: this.nombre,
        apellido:this.apellido
      }
    };
    this.router.navigate(['/login'],navigationExtras);
  }

  


}
