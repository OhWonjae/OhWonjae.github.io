import '@/styles/common/_base.scss';
import { Container } from '@/layout/container';
import { ProfileCard } from '@/components/profile-card';
import { Introduce } from '@/components/introduce';
import { Experience } from '@/components/experience';
import { PersonalProjects } from '@/components/personal-projects';
import { ETC } from '@/components/etc';
const App = () => {
  return (
    <Container>
      <ProfileCard />
      <Introduce />
      <Experience />
      <PersonalProjects />
      <ETC />
    </Container>
  );
};

export default App;
