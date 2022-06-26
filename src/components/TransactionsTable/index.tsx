import { useTransactions } from "../../hooks/useTransactions";
import { Container, ThNone } from "./styles";

export function TrashedTransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <ThNone>Data</ThNone>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <ThNone>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </ThNone>
            </tr>
          )
          )}
        </tbody>
      </table>
    </Container>
  )
}