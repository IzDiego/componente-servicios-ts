import {
  CardContent,
  Card,
  Typography,
  Box,
  Button,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type Servicios = {
  titulo: String;
  contenido: String;
  botonlink: String;
  imagenlink: String;
};

export default function ListaServicios(servicios:Array<Servicios>) {
  const getServicesDisplay = () => {
    let tarjetas:Array<any> = [];
    Object.values(servicios).forEach((servicio:any) => {
      tarjetas.push(
        <Card
          key={servicio.titulo}
          direction="column"
          justify="center"
          sx={{
            display: "inline-block",
            m: 1,
            width: 400,
            border: "1p #0CA8C7",
          }}
        >
          <Box>
            <CardContent>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <CardMedia
                      component="img"
                      sx={{ display: "inline-block", width: 120 }}
                      src={servicio.imagenlink}
                      alt="imagen"
                    />
                  </Grid>
                  <Typography variant="h6">{servicio.titulo}</Typography>
                  <Typography component="div">
                    Contenido: {servicio.contenido}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    href={servicio.botonlink}
                    target="_blank"
                  >
                    Visitar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </Card>
      );
    });
    return tarjetas;
  };

  return (
    <section key="listaServicios">
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12}>
          <Item>Servicios</Item>
        </Grid>
        <Grid item xs={12}>
          <Box key="listaServiciosBox" sx={{ p: 2 }}>{getServicesDisplay()}</Box>
        </Grid>
      </Grid>
    </section>
  );
}

const Item = styled(Paper)(({ theme }:any) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));