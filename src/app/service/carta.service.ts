import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, take } from 'rxjs';
import { CartaComponentComponent } from '../components/carta-component/carta-component.component';
import { CartasPageComponent } from '../pages/cartas-page/cartas-page.component';
import { Carta } from '../interfaces/Carta';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

    apiUrl: string = "http://localhost:8081/carta"

    constructor(private httpClient: HttpClient){}

    getAllCards(): Observable<any>{ // Buscar todas
        return this.httpClient.get<any>(this.apiUrl + "/all")
    }
    
    getSomeCards(page: Number, size: Number): Observable<any>{
        return this.httpClient.get<any>(this.apiUrl + "?page=" + page + "&size=" + size)
    }

    getOneCard(id: Number): Observable<any>{ // Buscar uma
        return this.httpClient.get(this.apiUrl + "/" + id)
    }

    createCard(carta: Carta, file : File): Observable<any>{ // Criar carta
        console.log(carta.nome)
        var formData: FormData = new FormData
        formData.append('freestyle', carta.freestyle.toString());
        formData.append('originalidade', carta.originalidade.toString());
        formData.append('impacto', carta.impacto.toString());
        formData.append('maisOuvidas', carta.maisOuvidas.toString());
        formData.append('nome', carta.nome);
        formData.append('ranking', carta.ranking);
        formData.append('file', file)
        return this.httpClient.post<any>(this.apiUrl, formData).pipe(take(1))
    }

    deleteCard(id: Number): Observable<any>{ // Deletar carta
        return this.httpClient.delete<any>(this.apiUrl + "/delete/" + id);
    }

    editCard(id: Number, carta: Carta): Observable<any>{ // Editar carta
        return this.httpClient.put<any>(this.apiUrl + "/edit/" + id, carta);
    }

    starGame(): Observable<any>{ // Retorna uma lista com duas listas de cartas, para serem atribuidas para cada jogador
        return this.httpClient.get(this.apiUrl);
    }
}