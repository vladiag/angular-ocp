import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {AccountsListModule} from "./accounts-list/accounts-list.module";

@NgModule({
  imports: [BrowserModule, AccountsListModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
