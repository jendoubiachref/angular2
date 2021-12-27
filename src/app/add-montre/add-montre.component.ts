import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';
import { Categorie } from '../model/categorie.model';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-add-montre',
  templateUrl: './add-montre.component.html',
 styleUrls: ['./add-montre.component.css'],

})
export class AddMontreComponent implements OnInit {
  newMontre= new Montre();
  categories : Categorie[];
  newIdCat : number;
  newCategorie : Categorie;
  msg :String;
  constructor(private montreService: MontreService,
    private activatedRoute: ActivatedRoute,
    private router :Router) { }
  addMontre(){
   
  this.montreService.ajouterMontre(this.newMontre);

  this.newCategorie = this.montreService.consulterCategorie(this.newIdCat);
  this.newMontre.categorie = this.newCategorie;
  //this.montreService.ajouterMontre(this.newMontre);
  this.msg = "Montre "+ this.newMontre.nomMontre+" ajouté avec succès";
  this.router.navigate(['montres']);

  
  }

  ngOnInit() {
    this.categories = this.montreService.listeCategories();

  }


   

}
