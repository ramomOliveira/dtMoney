import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

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
  createTransaction: (transaction: TransactionInputsProps) => Promise<void>;
}

const TransactionContext = createContext<TransactionsContextDataProps>({} as TransactionsContextDataProps);



export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInputsProps) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}