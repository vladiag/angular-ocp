import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {AccountListItem, AccountListItemPlugin} from "../accounts-list/account-list-item-plugin";

@Injectable()
export class DepositAccountsPluginService implements AccountListItemPlugin {
  getItems(): Observable<AccountListItem[]> {
    return of([
      {
        id: 100,
        name: "Депозит",
        amount: 1000,
        status: `Закрывается ${new Date().toJSON()}`
      }
    ]);
  }
}
