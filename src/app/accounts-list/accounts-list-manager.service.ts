import {Inject, Injectable} from "@angular/core";
import {combineLatest, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AccountListItem, AccountListItemPlugin} from "./account-list-item-plugin";
import {ACCOUNT_LIST_ITEM_PLUGIN} from "./account-list-item-plugin.token";

@Injectable()
export class AccountsListManager {
  constructor(
    @Inject(ACCOUNT_LIST_ITEM_PLUGIN)
    private readonly accountListItemPlugins: AccountListItemPlugin[]
  ) {
  }

  getAccounts(): Observable<AccountListItem[]> {
    return combineLatest(
      this.accountListItemPlugins.map(plugins => plugins.getItems())
    ).pipe(map(items => items.flat()));
  }
}
