import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL =
      "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  

  return (
    <div className="InfoBox">
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="100"
          image={INIT_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature:{info.temp}&deg;C</p>
            <p>Humidity:{info.humidity}</p>
            <p>MIN TEMP:{info.tempMin}&deg;C</p>
            <p>MAX TEMP:{info.tempMax}&deg;C</p>
            <p>
              The Weather can be described as <b>{info.weather}</b> and feels
              like {info.feelslike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
