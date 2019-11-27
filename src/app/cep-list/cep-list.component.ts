import { Component, OnInit } from '@angular/core';
import { CepService } from '../service/cep.service';

@Component({
  selector: 'app-cep-list',
  templateUrl: './cep-list.component.html',
  styleUrls: ['./cep-list.component.scss']
})
export class CepListComponent implements OnInit {

  cep = [];
  cepInvalido = true;
  procura: string;

  constructor(private cepService: CepService) {

  }

  ngOnInit() {
  }

  buscarCep() {
    this.cepInvalido = true;
    this.cep = [];
    
    if (!this.ValidarCEP(this.procura))
      return;

    this.cepService
      .buscar(this.procura)
      .subscribe((res) => {
        if(res.hasOwnProperty("erro")){
          this.cepInvalido = false;
        }

        this.cep.push(res);
      }, error => 
         this.cepInvalido = false );
  }
  

  ValidarCEP(cep) {

    cep = cep.replace("-","");

    if (cep.length == 0) {
      return false;
    };
    if (cep.length == 8) {
      return cep.charAt(0) + cep.charAt(1) + '.' +
        cep.charAt(2) + cep.charAt(3) + cep.charAt(4) + '-' +
        cep.charAt(5) + cep.charAt(6) + cep.charAt(7);
    }
    else {
      return ;
    };

  };

}



