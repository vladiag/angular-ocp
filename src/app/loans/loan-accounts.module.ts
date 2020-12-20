import {NgModule} from "@angular/core";
import {LoanAccountStatusComponent} from "./loan-account-status.component";
import {ACCOUNT_LIST_ITEM_PLUGIN} from "../accounts-list/account-list-item-plugin.token";
import {LoanAccountsPluginService} from "./loan-accounts-plugin.service";

@NgModule({
  declarations: [LoanAccountStatusComponent],
  exports: [LoanAccountStatusComponent],
  entryComponents: [LoanAccountStatusComponent],
  providers: [
    {
      provide: ACCOUNT_LIST_ITEM_PLUGIN,
      useClass: LoanAccountsPluginService,
      multi: true
    }
  ]
})
export class LoanAccountsModule {
}
