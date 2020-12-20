import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {LoanAccount} from "./loan-account";

@Injectable()
export class LoansService {
  getAccounts(): Observable<LoanAccount[]> {
    return of([
      {
        id: 1,
        info: {
          name: "Кредитный счет",
          amount: 1000,
          status: "Activation"
        }
      }
    ]);
  }
}
