import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { LoadingModalComponent } from "./loading-modal/loading-modal.component";
import { SearchFooterComponent } from "./search-footer/search-footer.component";
import { PokeHeaderComponent } from "./poke-entry/poke-header/poke-header.component";
import { PokeEntryComponent } from "./poke-entry/poke-entry.component";
import { PokeTextComponent } from "./poke-entry/poke-text/poke-text.component";
import { PokeSpriteComponent } from "./poke-entry/poke-sprite/poke-sprite.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoadingModalComponent,
    SearchFooterComponent,
    PokeHeaderComponent,
    PokeEntryComponent,
    PokeTextComponent,
    PokeSpriteComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
