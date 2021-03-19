import { TransactionTypeEnum } from '../enums/transaction-type.enum';

export interface ITransaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: TransactionTypeEnum;
  createdAt: string;
}