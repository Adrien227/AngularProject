import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjetAngular';
  rubriqueActive: number;

  affectation(nombre: number){
    if (nombre === this.rubriqueActive) {
      this.rubriqueActive = 0;
    } else {
      this.rubriqueActive = nombre;
    }
  }

  isActive(nombre: number){
    if (nombre === this.rubriqueActive) {
      return true;
    } else {
      return false;
    }
  }
}
