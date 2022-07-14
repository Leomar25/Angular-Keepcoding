import { Component } from "@angular/core";

@Component({selector: 'app-acumulador',
          templateUrl: './acumulador.component.html'
})

export class AcumuladorComponent{
  titulo: string = "Contador";
  numero: number = 0;
  base1:number =2;
  base2:number =5;

  /*sumar():void{
    this.numero = this.numero+1;
  }

  restar():void{
    this.numero = this.numero-1;
  } */

  acumulador(valor:number){
    this.numero +=valor;


  }
}


