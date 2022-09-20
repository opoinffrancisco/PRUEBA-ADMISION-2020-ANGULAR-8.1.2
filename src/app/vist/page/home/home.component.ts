import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../api/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opcionTiempoPlan='Mes';
  plan1 = {
    numero: 1,
    precio: 22,
    opciones: [
      {name:'Opción 1'},
      {name:'Opción 2'},
      {name:'Opción 3'},
      {name:'Opción 4'}
    ]
  }
  plan2 = {
    numero: 2,
    precio: 99,
    opciones: [
      {name:'Opción 1'},
      {name:'Opción 2'},
      {name:'Opción 3'},
      {name:'Opción 4'},
      {name:'Opción 5'},
      {name:'Opción 6'}
    ]
  }  
  imagenes = [];
  imagenesEstandar = [
    {
      nombre : '1111 sdfsdf',
      url : '/assets/foto1.PNG',
      url_avatar : '/assets/img1.jpg',
      detalles : 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.',
    },
    {
      nombre : '2222 dfgfggg',
      url : '/assets/foto2.PNG',
      url_avatar : '/assets/img2.jpg',
      detalles : 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.',
    },
    {
      nombre : '3333 sdfsdfsdf',
      url : '/assets/foto1.PNG',
      url_avatar : '/assets/img1.jpg',
      detalles : 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.',
    },
    {
      nombre : '4444 wefdfsdf',
      url : '/assets/foto2.PNG',
      url_avatar : '/assets/img2.jpg',
      detalles : 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.',
    },
    {
      nombre : '5555 32sfsdfsd',
      url : '/assets/foto1.PNG',
      url_avatar : '/assets/img3.jpg',
      detalles : 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.',
    },    
  ];

  constructor( private service : UserService) { }

  ngOnInit() {
    this.f(true);
    this.service.getUser((result) => {

      let datos = JSON.parse(result._body);
      console.log(datos)
      //this.imagenes = (datos)?datos:[];

      for (var i = 0; i < datos.length; i++) {
        
        let objeto = new imagen();
        objeto = this.imagenesEstandar[Math.floor(Math.random() * this.imagenesEstandar.length)] 
        objeto.nombre = datos[i].name;
        this.imagenes.push(objeto);
        console.log(this.imagenes)

      }
    });
  }

  f(input: boolean) {
            let x= 10;
    
            if (input) {
                   let y = x+ 1;
                   return y;
            }
            return x;
    }


}

class imagen {
  nombre : string;
  url : string;
  url_avatar : string;
  detalles : string;
}