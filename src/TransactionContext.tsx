import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInputsProps = Omit<TransactionProps, 'id' | 'createdAt'>;

// type TransactionInputsProps = Pick<TransactionProps, 'title' | 'amount' | 'type' | 'category'>;

// interface TransactionInputsProps {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextDataProps {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInputsProps) => void;
}

export const TransactionContext = createContext<TransactionsContextDataProps>({} as TransactionsContextDataProps);



export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInputsProps) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}