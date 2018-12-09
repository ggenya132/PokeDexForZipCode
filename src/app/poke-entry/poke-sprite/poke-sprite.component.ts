import { Component, OnInit } from "@angular/core";
import { PokeService } from "src/app/poke.service";

@Component({
  selector: "app-poke-sprite",
  templateUrl: "./poke-sprite.component.html",
  styleUrls: ["./poke-sprite.component.scss"]
})
export class PokeSpriteComponent implements OnInit {
  spriteImageEndpoint;
  constructor(private pokeService: PokeService) {
    this.pokeService.pokePayloadChange.subscribe(({ spriteImageEndpoint }) => {
      this.spriteImageEndpoint = spriteImageEndpoint;
    });
  }

  ngOnInit() {}
}
