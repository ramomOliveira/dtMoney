import { Summary } from '../Summary';
import { TrashedTransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TrashedTransactionsTable />
    </Container>
  );
}