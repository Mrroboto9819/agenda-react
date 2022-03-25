import React from "react" 
import { Button, Drawer, AppBar, Toolbar, Grid, Typography, CardMedia, CardContent,  CardActions, Card } from "@mui/material"

function App() {
  
  return (
    <div>
      <AppBar position="fixed" 
       sx={{
        width: "100%", 
        minHeight: "5vh"
      }}/>
      <Grid container spacing={2}>
        <Grid item xs = {3.33}>
        <Card>
      <CardMedia
        component="img"
        height="300"
        image="https://www.dccomics.com/sites/default/files/video/BMDamned_thumb_5d674fe2c626c4.93410746.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         BATMAN
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ROMAN
        </Typography>
        <Typography variant="body2" color="text.secondary">
          DIRECCION: 10 DE MAYO NO. 525 S/N, JACARANDAS, 82157
        </Typography>
        <Typography variant="body2" color="text.secondary">
          NUMERO: 55 5610-0204
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Borrar</Button>
        <Button size="small">Editar</Button>
      </CardActions>
    </Card>


         </Grid>
        <Grid item xs = {3.33}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="https://cdn.discordapp.com/attachments/700334487971561522/956842614081085480/Batman_The_Long_Halloween_Part_One_2271_1.webp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              GATUBELA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sandra
              </Typography>
              <Typography variant="body2" color="text.secondary">
                DIRECCION: MAESTRANZA 31, CENTRO, 44100
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NUMERO: 33 3558-7055
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Borrar</Button>
              <Button size="small">Editar</Button>
            </CardActions>
          </Card>
        </Grid>
        
        
        <Grid item xs = {3.33}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://cdn.discordapp.com/attachments/700334487971561522/956844905081208922/Sin_nombrePrueba8.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                HARLEYQUEEN
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Jennifer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  DIRECCION: CARRETERA CORTA A TOLUCA 250, LOMA LINDA, 32900
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  NUMERO: 55.5300-4397
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Borrar</Button>
                <Button size="small">Editar</Button>
              </CardActions>
            </Card>
         </Grid>
      </Grid>
    </div>
  );

    }
export default App;
