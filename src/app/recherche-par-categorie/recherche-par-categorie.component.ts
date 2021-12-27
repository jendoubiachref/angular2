import { Component, OnInit } from '@angular/core';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  montres : Montre[];
  //curCategorie = new Categorie;
  IdCategorie : number;
  categories : Categorie[];

  constructor(private montreService: MontreService) {
    //this.montres = montreService.listeMontres();
   // this.montres=    this.montreService.rechercherParCategorie(this.IdCategorie);

   }

  ngOnInit() {

    this.categories = this.montreService.listeCategories();

  }
  onChange() {
    this.montres=    this.montreService.rechercherParCategorie(this.IdCategorie);
    }
}
