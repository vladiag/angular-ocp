import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AccountsListComponent} from "./accounts-list.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AccountsListComponent],
  exports: [AccountsListComponent]
})
export class AccountsListModule {
}
