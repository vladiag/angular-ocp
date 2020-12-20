import {ChangeDetectionStrategy, Component} from "@angular/core";
import {AccountsListManager} from "./accounts-list-manager.service";

@Component({
  selector: "accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountsListManager]
})
export class AccountsListComponent {
  readonly accounts$ = this.accountsListManager.getAccounts();

  constructor(private readonly accountsListManager: AccountsListManager) {
  }
}
