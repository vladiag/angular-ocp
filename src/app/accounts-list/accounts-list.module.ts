import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccountsListComponent } from "./accounts-list.component";
import { BaseAccounts } from "../base-accounts/base-accounts.service";
import { DepositsService } from "../deposits/deposits.service";
import { LoansService } from "../loans/loans.service";

@NgModule({
  imports: [CommonModule],
  declarations: [AccountsListComponent],
  exports: [AccountsListComponent],
  providers: [BaseAccounts, DepositsService, LoansService]
})
export class AccountsListModule {}
