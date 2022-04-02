import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asientos',
  templateUrl: './asientos.component.html',
  styleUrls: ['./asientos.component.css']
})
export class AsientosComponent implements OnInit {

  total = 0;
  A1 = true;
  A2 = true;
  A3 = true;
  A4 = true;
  B1 = true;
  B2 = true;
  B3 = true;
  B4 = true;
  C1 = true;
  C2 = true;
  C3 = true;
  C4 = true;
  D1 = true;
  D2 = true;
  D3 = true;
  D4 = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate(['/cartelera']);
  }

  cambiarModo(id: number){
    if (id == 1)
    this.A1 = !this.A1;
    if (id == 2)
    this.A2 = !this.A2;
    if (id == 3)
    this.A3 = !this.A3;
    if (id == 4)
    this.A4 = !this.A4;
    if (id == 5)
    this.B1 = !this.B1;
    if (id == 6)
    this.B2 = !this.B2;
    if (id == 7)
    this.B3 = !this.B3;
    if (id == 8)
    this.B4 = !this.B4;
    if (id == 9)
    this.C1 = !this.C1;
    if (id == 10)
    this.C2 = !this.C2;
    if (id == 11)
    this.C3 = !this.C3;
    if (id == 12)
    this.C4 = !this.C4;
    if (id == 13)
    this.D1 = !this.D1;
    if (id == 14)
    this.D2 = !this.D2;
    if (id == 15)
    this.D3 = !this.D3;
    if (id == 16)
    this.D4 = !this.D4;

    this.total += 90;
  }

}
