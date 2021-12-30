import { Injectable } from '@angular/core';
import { Montre } from '../model/montre.model';
import { Categorie } from '../model/categorie.model';


import { ActivatedRoute,Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
//import { url } from 'inspector';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };


@Injectable({
providedIn: 'root'
})
export class MontreService {
montres : Montre[]; //un tableau de Produit
montre = new Montre();
categorie = new Categorie();
categories :Categorie[];
montresRecherche : Montre[];
apiURL: string = 'http://localhost:8090/montres/api';
catapiurl: string='http://localhost:8090/montres/api/prodscats/';
//server.servlet.context-path=/montres;
  constructor( private http : HttpClient,private router :Router ) {
 // this.categories = [ {idCat : 1, nomCat : "categorie1",descriptionCat:"desc"}];
 // {idCat : 2, nomCat : "categorie2"}];
 // this.montres = [
  //{ idMontre : 1, nomMontre : "Montre1", prixMontre : 30.600 ,categorie : {idCat : 1, nomCat : "categorie1"}},  
  //{ idMontre : 2, nomMontre : "Montre2", prixMontre : 300.600, categorie : {idCat : 1, nomCat : "categorie1"} },  
 // { idMontre : 3, nomMontre : "Montre3", prixMontre : 10.600 , categorie : {idCat : 2, nomCat : "categorie2"}},  
 // { idMontre : 4, nomMontre : "Montre4", prixMontre : 20.600,categorie : {idCat : 1, nomCat : "categorie1"} },  
 // { idMontre : 5, nomMontre : "Montre5", prixMontre : 4000.600, categorie : {idCat : 1, nomCat : "categorie1"} },  
 // { idMontre : 6, nomMontre : "Montre6", prixMontre : 40.600, categorie : {idCat : 2, nomCat : "categorie2"} }



 // ];

  }


  listeMontres():Observable<Montre[]> {
  //return this.montres;
  return this.http.get<Montre[]>(this.apiURL);
  }
  listeCategories():Observable<Categorie[]> {
    //return this.montres;
    return this.http.get<Categorie[]>(this.catapiurl);
    }
  

    rechercherParCategorie(idCat: number):Observable<Montre[]>{
      const url = `${this.apiURL}/prodscat/${idCat}`;
       
     // this.montres.forEach((cur, index) => {
     // if(idCat == cur.categorie.idCat) {
     // console.log("cur "+cur);
     // this.montresRecherche.push(cur);
    //  }
    //  });
     // return  this.montresRecherche;
      
      return   this.http.get<Montre[]>(url);
      }
      



    //  this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
   //     this.postId = data.id;
  //  })




  ajouterMontre( prod: String){
   
    //return this.http.post<Montre>(this.apiURL, prod, httpOptions);
   // let body = JSON.stringify({ prod }); 
    return this.http.post<Montre>(this.apiURL, prod , httpOptions) 
    .subscribe(prod=>{this.montre=prod;
    
      this.router.navigate(['montres']);
    } ,(error) => { alert("Problème lors de la modification !"); });

    
 
  

  }


  supprimerMontre( id: number){
    const url = `${this.apiURL}/${id}`;
   

   
    return this.http.delete(url, httpOptions);

  //supprimer le produit prod du tableau produits
  //const index = this.montres.indexOf(prod, 0);
 // if (index > -1) {
 // this.montres.splice(index, 1);
  }
   
  



  consulterMontre(id:number): Observable<Montre>{
    const url = `${this.apiURL}/${id}`;
    return  this.http.get<Montre>(url);
    
    }
    
    updateMontre(p:Montre):Observable<Montre>
    {
      return this.http.put<Montre>(this.apiURL, p, httpOptions);

    // console.log(p);
   // this.supprimerMontre(p);
  // this.ajouterMontre(p);
   // this.trierMontres();
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
      
    //  listeCategories():Categorie[] {
      //  return this.categories;
       //return this.http.get<Categorie[]>(this.apiURL);
     //   }




        consulterCategorie(id:number): Categorie{
          this.categorie = this.categories.find(cat => cat.idCat == id);
          return this.categorie;
          }


         // rechercherParCategorie(idCat: number): Montre[]{
         //   this.montresRecherche = [];
          //  this.montres.forEach((cur, index) => {
          //  if(idCat == cur.categorie.idCat) {
          //  console.log("cur "+cur);
         //   this.montresRecherche.push(cur);
         //   }
         //   });
         //   return  this.montresRecherche;
        //    }
            



           

}

