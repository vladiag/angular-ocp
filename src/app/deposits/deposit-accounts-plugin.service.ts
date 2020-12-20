import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {AccountListItem, AccountListItemPlugin} from "../accounts-list/account-list-item-plugin";
import {DepositAccount} from "./deposit-account";
import {map} from "rxjs/operators";

@Injectable()
export class DepositAccountsPluginService
  implements AccountListItemPlugin<DepositAccount> {
  getItems(): Observable<AccountListItem<DepositAccount>[]> {
    return this.getAccounts().pipe(
      map(accounts =>
        accounts.map(account => ({
          id: account.accountNumber,
          name: account.name,
          account,
          amount: account.amount,
          status: `Закрывается ${account.closeDate}`
        }))
      )
    );
  }

  private getAccounts(): Observable<DepositAccount[]> {
    return of([
      {
        accountNumber: 100,
        name: "Депозит",
        amount: 100,
        closeDate: "2020-11-08T10:25:07.457Z"
      }
    ]);
  }
}
