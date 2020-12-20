export type LoanAccount = Readonly<{
  id: number;
  info: {
    name: string;
    amount: number;
    status: string;
  };
}>;
