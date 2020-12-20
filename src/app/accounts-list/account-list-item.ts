import {BaseAccount} from "../base-accounts/base-account";
import {DepositAccount} from "../deposits/deposit-account";
import {LoanAccount} from "../loans/loan-account";

type DepositListItem = Readonly<{
  info: DepositAccount;
  type: "deposit";
}>;

type LoanListItem = Readonly<{
  info: LoanAccount;
  type: "loan";
}>;

type BaseAccountListItem = Readonly<{
  info: BaseAccount;
  type: "base";
}>;

export type AccountListItem =
  | DepositListItem
  | LoanListItem
  | BaseAccountListItem;
