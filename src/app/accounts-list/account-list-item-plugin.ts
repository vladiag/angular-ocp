import {Observable} from "rxjs";

export type AccountListItem = Readonly<{
  id: number;
  name: string;
  amount: number;
  status?: string;
}>;

export interface AccountListItemPlugin {
  getItems(): Observable<AccountListItem[]>;
}
