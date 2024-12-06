import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";


export default function AboutUsCard({ person }) {
    const { firstName, lastName, image, description, linkedinUrl, gitHubUrl } = person;

    return (
        <Card sx={{
            // maxWidth: 350 ,
            // maxHeight: 700,
            // borderRadius: "10% 10% 0 0 ",
            transition: 'all 0.3s ease-in-out',
            // overflow: "auto",
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }
        }}
            id="about-us-card">
            <CardMedia id="indiv_pic"
                // sx={{ height: 300, width: "100%", objectFit: "contain" }}
                image={image} />
            <CardContent id="card_text">
                <Typography id="name_socials" gutterBottom variant="h5" component="div">
                    {firstName + " " + lastName}
                    <CardActions>
                        <Link
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                        >
                            <Button id="linkedin"><i className="fa-brands fa-linkedin" style={{ fontSize: "2.2em" }}></i></Button>
                        </Link>
                        <Link
                            href={gitHubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                        >
                            <Button id="github"><i className="fa-brands fa-github" style={{ fontSize: "2.2em" }}></i></Button>
                        </Link>
                    </CardActions>
                </Typography>
                <Typography id="about-us-description" variant="body2" sx={{ color: "text.secondary" }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
