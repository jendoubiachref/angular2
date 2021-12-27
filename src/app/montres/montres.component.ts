import { Component, OnInit } from '@angular/core';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';

@Component({
  selector: 'app-montres',
  templateUrl: './montres.component.html',
  styleUrls: ['./montres.component.css']
})
export class MontresComponent implements OnInit {

  montres : Montre []; //un tableau des montres
  constructor(private montreService: MontreService) { 
    this.montres = montreService.listeMontres();
  }

  ngOnInit(): void {

  }
  supprimerMontre(p: Montre)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.montreService.supprimerMontre(p);
  }
  
  

}
