import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'primary.secondary',
      }}
    >
      <img src="src/assets/illustration_mail.svg" alt="letter icon" />
      <Typography variant="subtitle2">
        Selecciona un elemento para leerlo
      </Typography>
      <Typography variant="body2">No Hay nada seleccionado</Typography>
    </Grid>
  );
};
