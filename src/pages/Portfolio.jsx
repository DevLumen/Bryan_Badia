import PortfolioCard from "../components/PortfolioCard";
import "../styles/Portfolio.css";
import Navbar from "../components/Navbar";
import { portfolio } from "../data/portfolioData";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
export default function Portfolio() {
    return (
        <>
            <Navbar />
            <div id="portfolio_header">
                <p>Portfolio</p>
            </div>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "78vh",
                    minWidth: "80vw",
                }}
                id="portfolio-container"
            >
                <Grid container spacing={3}>
                    {portfolio.map((site) => {
                        return (
                            <Grid
                                size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                                key={site.siteTitle}
                                id="portfolio-cards"
                            >
                                <PortfolioCard site={site} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
}
