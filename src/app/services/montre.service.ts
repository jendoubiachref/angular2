import { Injectable } from '@angular/core';
import { Montre } from '../model/montre.model';
import { Categorie } from '../model/categorie.model';


import { ActivatedRoute,Router } from '@angular/router';

@Injectable({
providedIn: 'root'
})
export class MontreService {
montres : Montre[]; //un tableau de Produit
montre = new Montre();
categorie = new Categorie();
categories :Categorie[];
montresRecherche = [];
  constructor(  ) {
  this.categories = [ {idCat : 1, nomCat : "categorie1"},
  {idCat : 2, nomCat : "categorie2"}];
  this.montres = [
  { idMontre : 1, nomMontre : "Montre1", prixMontre : 30.600 ,categorie : {idCat : 1, nomCat : "categorie1"}},  
  { idMontre : 2, nomMontre : "Montre2", prixMontre : 300.600, categorie : {idCat : 1, nomCat : "categorie1"} },  
  { idMontre : 3, nomMontre : "Montre3", prixMontre : 10.600 , categorie : {idCat : 2, nomCat : "categorie2"}},  
  { idMontre : 4, nomMontre : "Montre4", prixMontre : 20.600,categorie : {idCat : 1, nomCat : "categorie1"} },  
  { idMontre : 5, nomMontre : "Montre5", prixMontre : 4000.600, categorie : {idCat : 1, nomCat : "categorie1"} },  
  { idMontre : 6, nomMontre : "Montre6", prixMontre : 40.600, categorie : {idCat : 2, nomCat : "categorie2"} }



  ];

  }


  listeMontres():Montre[] {
  return this.montres;
  }


  ajouterMontre( prod: Montre){
  this.montres.push(prod);
  }


  supprimerMontre( prod: Montre){
  //supprimer le produit prod du tableau produits
  const index = this.montres.indexOf(prod, 0);
  if (index > -1) {
  this.montres.splice(index, 1);
  }
   
  }



  consulterMontre(id:number): Montre{
    this.montre = this.montres.find(p => p.idMontre == id);
    return this.montre;
    }
    
    updateMontre(p:Montre)
    {
    // console.log(p);
    this.supprimerMontre(p);
    this.ajouterMontre(p);
    this.trierMontres();
    }
    

    trierMontres(){
      this.montres = this.montres.sort((n1,n2) => {
      if (n1.idMontre > n2.idMontre) {
      return 1;
      }
      if (n1.idMontre < n2.idMontre) {
      return -1;
      }
      return 0;
      });
      }


      ngOnInit(): void {
     
      }
      
      listeCategories():Categorie[] {
        return this.categories;
        }
        consulterCategorie(id:number): Categorie{
          this.categorie = this.categories.find(cat => cat.idCat == id);
          return this.categorie;
          }


          rechercherParCategorie(idCat: number): Montre[]{
            this.montresRecherche = [];
            this.montres.forEach((cur, index) => {
            if(idCat == cur.categorie.idCat) {
            console.log("cur "+cur);
            this.montresRecherche.push(cur);
            }
            });
            return  this.montresRecherche;
            }
            



           

}

