import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartaService } from 'src/app/service/carta.service';
import { Carta } from 'src/app/interfaces/Carta';

@Component({
  selector: 'app-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.css']
})
export class SelectedCardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartaService: CartaService) { }

  carta: Carta = {
    id: 0,
    freestyle: 0,
    originalidade: 0,
    impacto: 0,
    maisOuvidas: 0,
    nome: "Loading",
    ranking: "O",
    url: "https://example.com/carta-ficticia",
    uuid: "https://hackernoon.com/images/0*zzg_YoHtb5wXe98Z.gif" 
  };
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      const numericId = parseInt(id, 10);
      this.cartaService.getOneCard(numericId).subscribe((data: Carta) => {
        this.carta = data
      });
    }
  }

}
