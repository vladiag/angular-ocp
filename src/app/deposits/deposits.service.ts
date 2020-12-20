import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {DepositAccount} from "./deposit-account";

@Injectable()
export class DepositsService {
  getAccounts(): Observable<DepositAccount[]> {
    return of([
      {
        accountNumber: 100,
        name: "Депозит",
        amount: 1000,
        closeDate: new Date().toJSON()
      }
    ]);
  }
}
