import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {AccountListItem, AccountListItemPlugin} from "../accounts-list/account-list-item-plugin";
import {BaseAccount} from "./base-account";
import {map} from "rxjs/operators";

@Injectable()
export class BaseAccountsPluginService
  implements AccountListItemPlugin<BaseAccount> {
  getItems(): Observable<AccountListItem<BaseAccount>[]> {
    return this.getAccounts().pipe(
      map(accounts =>
        accounts.map(account => ({
          id: account.id,
          name: account.name,
          account,
          amount: account.balance
        }))
      )
    );
  }

  private getAccounts(): Observable<BaseAccount[]> {
    return of([
      {
        id: 101,
        name: "Рублевый",
        balance: 100
      }
    ]);
  }
}
