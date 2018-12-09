import { Component, OnInit } from "@angular/core";
import { PokeService } from "src/app/poke.service";

@Component({
  selector: "app-poke-text",
  templateUrl: "./poke-text.component.html",
  styleUrls: ["./poke-text.component.scss"]
})
export class PokeTextComponent implements OnInit {
  pokedexEntry = "";
  constructor(private pokeService: PokeService) {
    this.pokeService.pokePayloadChange.subscribe(({ pokedexEntry }) => {
      this.pokedexEntry = pokedexEntry;
    });
  }

  ngOnInit() {}
}
