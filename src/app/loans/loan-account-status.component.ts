import {ChangeDetectionStrategy, Component, Inject} from "@angular/core";
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {AccountListItemContext} from "../accounts-list/account-list-item-plugin";
import {LoanAccount} from "./loan-account";

@Component({
  selector: 'loan-account-status',
  template: `<span class="negative">{{context.account.info.status}}</span>`,
  styles: ['.negative {color: red;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanAccountStatusComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    readonly context: AccountListItemContext<LoanAccount>
  ) {
  }
}
