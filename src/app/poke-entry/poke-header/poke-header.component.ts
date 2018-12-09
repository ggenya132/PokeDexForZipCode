import { Component, OnInit } from "@angular/core";
import { PokeService } from "src/app/poke.service";

@Component({
  selector: "app-poke-header",
  templateUrl: "./poke-header.component.html",
  styleUrls: ["./poke-header.component.scss"]
})
export class PokeHeaderComponent implements OnInit {
  constructor(private pokeService: PokeService) {
    this.pokeService.pokePayloadChange.subscribe(({ pokedexEntry }) => {
      console.log({ pokedexEntry });
    });
  }

  ngOnInit() {}
}
