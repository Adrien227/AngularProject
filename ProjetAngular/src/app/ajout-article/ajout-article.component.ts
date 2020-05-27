import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessageTitre() {
    if (this.titre.hasError('required')) {
      return 'Veuillez entrer un titre.';
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



}
