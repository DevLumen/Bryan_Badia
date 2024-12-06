import AboutUsCard from "../components/AboutUsCard";
import "../styles/AboutUs.css";
import { user } from "../data/userObj";
import Navbar from '../components/Navbar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

export default function AboutUs() {
    return (
      <>
        <Navbar />
        <div id="about-us-header">
          <p>My Clients</p>
        </div>
        <Container id="container"  sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
          <Grid container spacing={3}>
              {user.map(person => {
                return (
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }} key={person.firstName} id="about-us">
                    <AboutUsCard person={person}/>
                </Grid>)
              })}
          </Grid>
        </Container>
      </>
    )
  }
