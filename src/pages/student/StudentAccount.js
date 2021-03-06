import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import StudentProfile from 'src/components/student/studentprofile/StudentProfile';
import StudentProfileDetails from 'src/components/student/studentprofile/StudentProfileDetails';

const StudentAccount = () => (
  <>
    <Helmet>
      <title>Course details</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <StudentProfile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <StudentProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default StudentAccount;
