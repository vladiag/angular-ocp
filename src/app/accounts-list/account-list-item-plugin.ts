import {Observable} from "rxjs";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";

export type AccountListItem<A = unknown> = Readonly<{
  id: number;
  name: string;
  amount: number;
  status?: PolymorpheusContent<AccountListItemContext<A>>;
}>;

export type AccountListItemContext<A> = {
  account: A;
};

export interface AccountListItemPlugin<A = unknown> {
  getItems(): Observable<AccountListItem<A>[]>;
}
