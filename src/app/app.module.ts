import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {AccountsListModule} from "./accounts-list/accounts-list.module";
import {ACCOUNT_LIST_ITEM_PLUGIN} from "./accounts-list/account-list-item-plugin.token";
import {BaseAccountsPluginService} from "./base-accounts/base-accounts-plugin.service";
import {LoanAccountsPluginService} from "./loans/loan-accounts-plugin.service";
import {DepositAccountsPluginService} from "./deposits/deposit-accounts-plugin.service";
import {LoanAccountsModule} from "./loans/loan-accounts.module";

@NgModule({
  imports: [BrowserModule, AccountsListModule, LoanAccountsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ACCOUNT_LIST_ITEM_PLUGIN,
      useClass: BaseAccountsPluginService,
      multi: true
    },
    {
      provide: ACCOUNT_LIST_ITEM_PLUGIN,
      useClass: DepositAccountsPluginService,
      multi: true
    }
  ]
})
export class AppModule {
}
