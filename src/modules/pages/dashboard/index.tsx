import { Container, Grid } from '@mui/material';

import PageTitle from '../../../components/PageTitle';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './components/pageHeader';
import Wallets from './components/Wallets';

function Dashboard() {
  return (
    <>
      <PageTitle title={'Dashboard'} />
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
