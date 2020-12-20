import {ChangeDetectionStrategy, Component} from "@angular/core";
import {BaseAccounts} from "../base-accounts/base-accounts.service";
import {DepositsService} from "../deposits/deposits.service";
import {LoansService} from "../loans/loans.service";
import {combineLatest, Observable} from "rxjs";
import {AccountListItem} from "./account-list-item";
import {map} from "rxjs/operators";

@Component({
  selector: "accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsListComponent {
  readonly accounts$ = combineLatest([
    this.getBaseAccounts(),
    this.getLoanAccounts(),
    this.getDepositAccounts()
  ]).pipe(map(accounts => accounts.flat()));

  constructor(
    private readonly baseAccounts: BaseAccounts,
    private readonly deposits: DepositsService,
    private readonly loans: LoansService
  ) {
  }

  private getBaseAccounts(): Observable<AccountListItem[]> {
    return this.baseAccounts.getAccounts().pipe(
      map(accounts =>
        accounts.map(account => ({
          info: account,
          type: "base"
        }))
      )
    );
  }

  private getDepositAccounts(): Observable<AccountListItem[]> {
    return this.deposits.getAccounts().pipe(
      map(accounts =>
        accounts.map(account => ({
          info: account,
          type: "deposit"
        }))
      )
    );
  }

  private getLoanAccounts(): Observable<AccountListItem[]> {
    return this.loans.getAccounts().pipe(
      map(accounts =>
        accounts.map(account => ({
          info: account,
          type: "loan"
        }))
      )
    );
  }
}
