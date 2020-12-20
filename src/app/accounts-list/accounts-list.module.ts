import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AccountsListComponent} from "./accounts-list.component";
import {PolymorpheusModule} from "@tinkoff/ng-polymorpheus";

@NgModule({
  imports: [CommonModule, PolymorpheusModule],
  declarations: [AccountsListComponent],
  exports: [AccountsListComponent]
})
export class AccountsListModule {
}
