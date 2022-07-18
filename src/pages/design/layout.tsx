// libs
import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  Breadcrumbs,
  Link,
} from '@mui/material';

interface RenderCardProps {
  height?: number | string;
  label?: string;
}
function RenderCard({ height = '200px', label = 'Card' }: RenderCardProps) {
  return (
    <Box
      width="100%"
      height={height}
      bgcolor="#e1e2e1"
      border="1px solid #777"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography color="black">{label}</Typography>
    </Box>
  );
}

function Layout() {
  return (
    <Box width="100vw" height="100vh" bgcolor="#555">
      <Grid container>
        <Grid item xs={12}>
          <RenderCard height={'60px'} label="Navbar" />
        </Grid>
        <Grid item xs={3}>
          <RenderCard label="Sidebar" height="calc(100vh - 60px)" />
        </Grid>
        <Grid item xs={9}>
          <Box width="100%" height="100%" p={2}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={12}>
                <Breadcrumbs>
                  <Link>Home</Link>
                  <Link>Usuario</Link>
                  <Link href="/register">Perfil</Link>
                </Breadcrumbs>
              </Grid>
              <Grid item xs={4}>
                <RenderCard height={'200px'} label="Gráfico" />
              </Grid>
              <Grid item xs={4}>
                <RenderCard height={'200px'} label="Gráfico" />
              </Grid>
              <Grid item xs={4}>
                <RenderCard height={'200px'} label="Gráfico" />
              </Grid>
              <Grid item xs={6}>
                <RenderCard height={'200px'} label="Card" />
              </Grid>
              <Grid item xs={6}>
                <RenderCard height={'200px'} label="Card" />
              </Grid>
              <Grid item xs={12} container justifyContent="flex-end">
                <Grid item xs={3}>
                  <RenderCard height={'60px'} label="Filter-Button" />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <RenderCard height={'600px'} label="Table" />
              </Grid>
              <Grid item xs={12} container justifyContent="flex-end">
                <Grid item xs={3}>
                  <Button fullWidth color="primary" variant="text">
                    Footer
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export { Layout };
