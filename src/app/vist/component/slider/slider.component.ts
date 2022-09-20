import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() imagenes : {
    nombre : string,
    url : string,
    url_avatar : string,
    detalles : string
  }[] = [];
  posiciones_actuales = {
    img1:0,
    img2:1,
    img3:2
  }
  avanzar(){
    if(this.posiciones_actuales.img3==(this.imagenes.length-1)){
      return false;
    }
    this.posiciones_actuales.img1=this.posiciones_actuales.img1+1
    this.posiciones_actuales.img2=this.posiciones_actuales.img2+1
    this.posiciones_actuales.img3=this.posiciones_actuales.img3+1
  }
  retroceder(){
    if(this.posiciones_actuales.img1==0){
      return false;
    }
    this.posiciones_actuales.img1=this.posiciones_actuales.img1-1
    this.posiciones_actuales.img2=this.posiciones_actuales.img2-1
    this.posiciones_actuales.img3=this.posiciones_actuales.img3-1    
  }

  ngOnInit() {
  }
}
