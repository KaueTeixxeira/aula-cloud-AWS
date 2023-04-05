import { Component, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';
import { CartaService } from 'src/app/service/carta.service';

@Component({
  selector: 'app-cartas-page',
  templateUrl: './cartas-page.component.html',
  styleUrls: ['./cartas-page.component.css']
})
export class CartasPageComponent implements OnInit {

  constructor(private meuServico: CartaService) { }
  listaDeCartas!: Array<Carta>;
  ngOnInit(): void {
    this.meuServico.getAllCards().subscribe((data: Array<Carta>) => {
      this.listaDeCartas = data;
      
    });

    // BUSCAR UMA CARTA 
    //this.meuServico.getOneCard(1).subscribe((data: Carta) => {
    //   console.log(data)
    // })

    // DELETA CARTA
    // this.meuServico.deleteCard(1).subscribe((data: Carta) => {
    //   console.log(data);
    // })

   
    let carta: Carta = new Carta("https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547","Dr.Dre",87,96,98,75,"S");
    this.meuServico.createCard(carta).subscribe((data: Carta) => {
      console.log(data)
    })

    // EDITAR
    // let carta: Carta = new Carta("https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547","Dr.Dre",87,96,98,75,"A");
    // this.meuServico.editCard(2,carta).subscribe((data: Carta) => {
    //   console.log(carta);
    // })
      
    
  }

}

export class Carta {
  id!: number;
  freestyle!: number;
  originalidade!: number;
  impacto!: number;
  maisOuvidas!: number;
  nome!: string;
  ranking!: string;
  url!: string;


  constructor(url: string, nomeCarta: string, freestyle: number, originalidade: number, impacto: number,
     maisOuvidas: number, ranking: string)
  {
    this.url = url;
    this.nome = nomeCarta;
    this.freestyle = freestyle
    this.originalidade = originalidade
    this.impacto = impacto
    this.maisOuvidas = maisOuvidas
    this.ranking = ranking
  }
}
