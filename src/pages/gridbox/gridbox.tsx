import { Calculate } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';

function GridBox() {
  return (
    <Box
      bgcolor="#555555"
      width="100vw"
      height="100vh"
      color="#000000"
      textAlign="center"
    >
      <Grid
        container
        xs={12}
        bgcolor="#e1e2e1"
        height="60px"
        border="5px solid #777777"
      >
        <Grid item xs={12}>
          <Box>Navbar</Box>
        </Grid>
      </Grid>
      <Grid container /* spacing={4} */>
        <Grid
          item
          xs={3}
          height="100%"
          bgcolor="#e1e2e1"
          border="5px solid #777777"
        >
          <Box>Side-panel</Box>
        </Grid>
        <Grid container xs={9}>
          <Grid
            item
            xs={12}
            height="60px"
            bgcolor="#e1e2e1"
            border="5px solid #777777"
          >
            <Box>Page-header</Box>
          </Grid>
          <Grid container item justifyContent="space-between">
            <Grid
              item
              xs={4}
              height="200px"
              bgcolor="#e1e2e1"
              border="5px solid #777777"
            >
              <Box>Grafico</Box>
            </Grid>
            <Grid
              item
              xs={4}
              height="200px"
              bgcolor="#e1e2e1"
              border="5px solid #777777"
            >
              <Box>Grafico</Box>
            </Grid>
            <Grid
              item
              xs={4}
              height="200px"
              bgcolor="#e1e2e1"
              border="5px solid #777777"
            >
              <Box>Grafico</Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid
              item
              xs={4}
              height="60px"
              bgcolor="#e1e2e1"
              border="5px solid #777777"
            >
              <Box>Filter-buttons</Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              height="500px"
              bgcolor="#e1e2e1"
              border="5px solid #777777"
            >
              <Box>Tabela</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export { GridBox };
