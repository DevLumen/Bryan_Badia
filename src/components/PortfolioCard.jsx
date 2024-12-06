import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function PortfolioCard({ site }) {
    const { siteImg, siteTitle, siteDescription } = site;

    return (
        <>
            <Card sx={{ maxWidth: 365 }} id="portfolio-card">
                <CardActionArea>
                    <CardMedia
                        id="card-img"
                        component="img"
                        height="280"
                        image={siteImg}
                        alt="portfolio site"
                        
                    /> 
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {siteTitle}
                        </Typography>
                        <Typography
                            id="card-text"
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                        >
                            {siteDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
