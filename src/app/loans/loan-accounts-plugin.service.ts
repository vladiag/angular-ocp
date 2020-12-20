import {Injectable, Injector} from "@angular/core";
import {Observable, of} from "rxjs";
import {AccountListItem, AccountListItemPlugin} from "../accounts-list/account-list-item-plugin";
import {LoanAccount} from "./loan-account";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {map} from "rxjs/operators";
import {LoanAccountStatusComponent} from "./loan-account-status.component";

@Injectable()
export class LoanAccountsPluginService
  implements AccountListItemPlugin<LoanAccount> {
  private readonly accountStatus = new PolymorpheusComponent(
    LoanAccountStatusComponent,
    this.injector
  );

  constructor(private readonly injector: Injector) {
  }

  getItems(): Observable<AccountListItem<LoanAccount>[]> {
    return this.getAccounts().pipe(
      map(accounts => {
        return accounts.map(account => ({
          id: account.id,
          name: account.info.name,
          amount: account.info.amount,
          account,
          status: this.accountStatus
        }));
      })
    );
  }

  private getAccounts(): Observable<LoanAccount[]> {
    return of([
      {
        id: 1,
        info: {
          name: "Кредитный счет",
          amount: 1000,
          status: "Activation"
        }
      }
    ]);
  }
}
