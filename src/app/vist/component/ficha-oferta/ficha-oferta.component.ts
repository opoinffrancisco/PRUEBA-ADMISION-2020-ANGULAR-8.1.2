import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ficha-oferta',
  templateUrl: './ficha-oferta.component.html',
  styleUrls: ['./ficha-oferta.component.scss']
})
export class FichaOfertaComponent implements OnInit {

  @Input() tiempoPlan = 'Mes';
  @Input() plan = {
    numero: 1,
    precio: 0,
    opciones: []
  };

  constructor() { }

  ngOnInit() {
  }

}
