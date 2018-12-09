import { Component, OnInit } from "@angular/core";
import { PokeService } from "../poke.service";
@Component({
  selector: "app-search-footer",
  templateUrl: "./search-footer.component.html",
  styleUrls: ["./search-footer.component.scss"]
})
export class SearchFooterComponent implements OnInit {
  userSearchedPokemon = "";

  constructor(private pokeService: PokeService) {}

  onSearchPokemon() {
    this.pokeService.callPokedex(this.userSearchedPokemon);
  }

  ngOnInit() {}
}
