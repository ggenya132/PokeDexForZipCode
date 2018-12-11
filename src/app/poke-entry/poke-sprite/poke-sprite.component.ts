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
      this.addBlurEffectOnLoad().then(() => {
        document
          .querySelector("#sprite-image")
          .classList.remove("blurin-animation-active");
      });
    });
  }

  ngOnInit() {}

  addBlurEffectOnLoad() {
    return new Promise((res, rej) => {
      document
        .querySelector("#sprite-image")
        .classList.add("blurin-animation-active");
      setTimeout(() => {
        res();
      }, 500);
    });
  }
}
