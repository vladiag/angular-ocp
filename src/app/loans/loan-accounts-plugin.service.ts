import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {AccountListItem, AccountListItemPlugin} from "../accounts-list/account-list-item-plugin";

@Injectable()
export class LoanAccountsPluginService implements AccountListItemPlugin {
  getItems(): Observable<AccountListItem[]> {
    return of([
      {
        id: 1,
        name: "Кредитный счет",
        amount: 1000,
        status: `Activation`
      }
    ]);
  }
}
