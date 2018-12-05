import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { debug } from "util";
@Injectable({
  providedIn: "root"
})
export class PokeService {
  pokemonSpriteEndpoint: string =
    "http://pokeapi.salestock.net/api/v2/pokemon/";
  pokedexEndpoint: string =
    "http://pokeapi.salestock.net/api/v2/pokemon-species/";
  constructor(private http: HttpClient) {}

  getPokemonData(pokemonId) {
    let pokemonSpriteEndpoint = `${this.pokemonSpriteEndpoint}${pokemonId}`;
    let pokedexEndpoint = `${this.pokedexEndpoint}${pokemonId}`;

    let pokedexRequest = this.http.get(pokedexEndpoint);
    let pokeSpriteRequest = this.http.get(pokemonSpriteEndpoint);

    return forkJoin([pokedexRequest, pokeSpriteRequest]);
  }
  getPokemonPokedexData(pokemonId) {
    let endpoint = `${this.pokedexEndpoint}${pokemonId}`;
    return this.http.get(endpoint);
  }
}
