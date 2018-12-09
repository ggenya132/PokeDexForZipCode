import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { debug } from "util";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PokeService {
  pokemonSpriteEndpoint: string = "http://localhost:9001/pokemon/";
  pokedexEndpoint: string = "http://localhost:9001/pokemon/pokedex/";

  pokedexEntry = "";
  spriteImageEndpoint = "";
  loading = false;
  pokemonName = "";

  currentPokePayload = {};

  private pokePayloadSubject = new Subject<any>();
  public pokePayloadChange = this.pokePayloadSubject.asObservable();

  constructor(private http: HttpClient) {}

  emitPokepayloadChange() {
    this.pokePayloadSubject.next(this.currentPokePayload);
  }

  getPokemonData(pokemonId) {
    let pokemonSpriteEndpoint = `${this.pokemonSpriteEndpoint}${pokemonId}`;
    let pokedexEndpoint = `${this.pokedexEndpoint}${pokemonId}`;

    let pokedexRequest = this.http.get(pokedexEndpoint);
    let pokeSpriteRequest = this.http.get(pokemonSpriteEndpoint);

    return forkJoin([pokedexRequest, pokeSpriteRequest]);
  }

  callPokedex(pokemonId) {
    this.getPokemonData(pokemonId).subscribe(data => {
      this.handlePokePayload(data);
    });
  }

  handlePokePayload(mergedPayload) {
    //Trigger our fake loading modal
    this.loading = true;

    let [pokedexData, spriteData] = mergedPayload;
    let {
      sprites: { front_default: spriteImageEndpoint }
    } = spriteData;
    let { flavor_text_entries, names } = pokedexData;
    const INDEX_OF_ENGLISH_FLAVORTEXT_ENTRY = 1;
    const INDEX_OF_ENGLISH_NAME_ENTRY = 0;
    //
    let { flavor_text: pokedexEntry } = flavor_text_entries[
      INDEX_OF_ENGLISH_FLAVORTEXT_ENTRY
    ];
    let { name: pokemonName } = names[INDEX_OF_ENGLISH_NAME_ENTRY];

    this.pokedexEntry = pokedexEntry;
    this.spriteImageEndpoint = spriteImageEndpoint;
    this.loading = false;
    this.pokemonName = pokemonName;

    this.currentPokePayload = {
      pokedexEntry,
      spriteImageEndpoint,
      pokemonName
    };

    console.log(this.pokemonSpriteEndpoint);
    console.log(this.currentPokePayload);

    this.emitPokepayloadChange();
  }
  getPokemonPokedexData(pokemonId) {
    let endpoint = `${this.pokedexEndpoint}${pokemonId}`;
    return this.http.get(endpoint);
  }
}
