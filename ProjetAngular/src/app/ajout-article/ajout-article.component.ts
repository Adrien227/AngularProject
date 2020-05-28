import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { AppComponent } from './../app.component';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.scss']
})
export class AjoutArticleComponent implements OnInit {

  // email = new FormControl('', [Validators.required, Validators.email]);

  titre =  new FormControl('', [Validators.required]);
  description =  new FormControl('', [Validators.required]);
  corps =  new FormControl('', [Validators.required]);

  constructor(public myapp: AppComponent) { }


  ngOnInit(): void {

  }

  verifForm() {
    if (this.titre.hasError('required') || this.description.hasError('required') || this.corps.hasError('required') ) {
      return true;
    } else {
      return false;
    }
  }

  /*  Fonctions servant à effectuer des verifications sur les formulaires

  getErrorMessageTitre() {
    if (this.titre.hasError('required')) {
      return `Veuillez entrer un <strong>titre</strong>.`;
    }
    return '';
  }

  getErrorMessageDescription() {
    if (this.description.hasError('required')) {
      return 'Veuillez entrer une description.';
    }
    return '';
  }

  getErrorMessageCorps() {
    if (this.corps.hasError('required')) {
      return 'Veuillez remplir le corps de l\'article.';
    }
    return '';
  }

  */



}
