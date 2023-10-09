import '@/styles/common/_base.scss';
import { Container } from '@/layout/container';
import { Card } from '@/components/card';
import { Introduce } from '@/layout/Introduce';
const App = () => {
  return (
    <Container>
      <Card />
      <Introduce />
    </Container>
  );
};

export default App;
