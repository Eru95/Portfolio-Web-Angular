import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';


@Component({
  selector: 'app-primera-card',
  templateUrl: './primera-card.component.html',
  styleUrls: ['./primera-card.component.css']
})
export class PrimeraCardComponent implements OnInit {

  constructor(private datosPrueba:DataService) { }

  ngOnInit(): void {
  this.datosPrueba.obtenerDatos().subscribe(data =>{
    console.log(data);
  });
  }

}
