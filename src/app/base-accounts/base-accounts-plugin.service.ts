import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {AccountListItem, AccountListItemPlugin} from "../accounts-list/account-list-item-plugin";

@Injectable()
export class BaseAccountsPluginService implements AccountListItemPlugin {
  getItems(): Observable<AccountListItem[]> {
    return of([
      {
        id: 1000,
        name: "Рублевый",
        amount: 150
      }
    ]);
  }
}
