import { InjectionToken } from "@angular/core";
import { AccountListItemPlugin } from "./account-list-item-plugin";

export const ACCOUNT_LIST_ITEM_PLUGIN = new InjectionToken<
  AccountListItemPlugin
  >("Плагин для подключения счетов");
