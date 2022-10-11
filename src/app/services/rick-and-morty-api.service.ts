import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {

  private charactersUrl: string = 'https://rickandmortyapi.com/api/character/?page=1'
  private characterUrl: string = 'https://rickandmortyapi.com/api/character/?name='

  constructor(private http: HttpClient) { }

  getAllCharacters(page?: number): Observable<any>{
    return this.http.get(this.charactersUrl + page)
  }

  getCharacter(name: string){
    return this.http.get(this.characterUrl + name)
  }
}
