import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';
import { Categorie } from '../model/categorie.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-montre',
  templateUrl: './add-montre.component.html',
 styleUrls: ['./add-montre.component.css'],

})
export class AddMontreComponent implements OnInit {
  newMontre= new Montre();
  categories : Categorie[];
  newIdCat : number;
  newNomCat :string;
  newCategorie : Categorie;
  newidc :number;
  
  jsn :String;
  constructor(private montreService: MontreService,
    private activatedRoute: ActivatedRoute,
    private router :Router) { }
 // addMontre(){
    //let conf = confirm(JSON.stringify( this.newMontre));
    //if (conf)
   //this.newMontre.categorie.idCat=this.newIdCat;
   //this.newCategorie.idCat = this.newIdCat;
  // this.newMontre.categorie= this.newCategorie;
   //let conf = confirm(JSON.stringify(this.newCategorie.idCat));
   //if (conf)
 // this.montreService.ajouterMontre(this.newMontre)
 // .subscribe(prod => {
//this.newMontre=prod;    
    //this.newMontre=prod;
    //this.router.navigate(['montres']);
   //console.log(prod);
  //  });
  //this.newCategorie = this.montreService.consulterCategorie(this.newIdCat);
  //this.newMontre.categorie = this.newCategorie;
  //this.montreService.ajouterMontre(this.newMontre);
  //this.msg = "Montre "+ this.newMontre.nomMontre+" ajouté avec succès";
 // this.router.navigate(['montres']);

  
 // }
 addMontre(p:Montre ){
  
  //this.newCategorie.idCat=this.newIdCat;
  //this.newCategorie.idCat=this.newIdCat;
 // p.categorie=this.newCategorie;


  this.jsn='{"nomMontre":"'+p.nomMontre+'","prixMontre":'+p.prixMontre+',"categorie":{"idCat":'+this.newIdCat+'}}';
  this.montreService.ajouterMontre(this.jsn) ;


 }
 

  ngOnInit() {
   // this.categories = this.montreService.listeCategories();
   this.montreService.listeCategories().subscribe(prods => {
    console.log(prods);
    this.categories= prods;
    });
    //this.newMontre.categorie=this.newCategorie;

  }

  onChange() {
   
   //this.newMontre.categorie=this.newCategorie;
  
 //this.newCategorie.idCat = this.newIdCat;
   //this.newCategorie.nomCat=this.newNomCat;
   //this.newMontre.categorie=this.newCategorie;

      //this.newCategorie.idCat=this.newIdCat;
   // this.montres=    this.montreService.rechercherParCategorie(this.IdCategorie);

     
    }
   

}
