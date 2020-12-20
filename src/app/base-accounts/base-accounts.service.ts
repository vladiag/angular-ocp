import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {BaseAccount} from "./base-account";

@Injectable()
export class BaseAccounts {
  getAccounts(): Observable<BaseAccount[]> {
    return of([
      {
        id: 1000,
        name: "Рублевый",
        balance: 150
      }
    ]);
  }
}
