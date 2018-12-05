import { Component, OnInit } from "@angular/core";
import { PokeService } from "../poke.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private pokeService: PokeService) {}

  ngOnInit() {}

  userSelectedPokemon: string = "";

  pokemonName = "";
  spriteImageEndpoint = "";
  pokedexEntry = "";

  loading = false;

  onCallPokedex() {
    //Trigger our fake loading modal
    this.loading = true;

    this.pokeService
      .getPokemonData(this.userSelectedPokemon)
      .subscribe((mergedPayload: any) => {
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
      });
  }
}
