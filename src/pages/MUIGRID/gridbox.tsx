import { Box, Grid } from '@mui/material';

function Teste() {
  return (
    <Box p={4}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box p={2} border="1px solid black" borderRadius="20px">
            <Grid container spacing={8}>
              <Grid item xs={3}>
                <Box
                  width="100%"
                  height="200px"
                  bgcolor="#ff0000"
                  border="1px solid black"
                >
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  width="100%"
                  height="200px"
                  bgcolor="#ff0000"
                  border="1px solid black"
                >
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  width="100%"
                  height="200px"
                  bgcolor="#ff0000"
                  border="1px solid black"
                >
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  width="100%"
                  height="200px"
                  bgcolor="#ff0000"
                  border="1px solid black"
                >
                  text
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2} width="200px" border="1px solid black" borderRadius="20px">
            <Grid container spacing={8} direction="column">
              <Grid item xs={3}>
                <Box
                  width="100%"
                  height="200px"
                  bgcolor="#00ff00"
                  border="1px solid black"
                >
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  width="100%"
                  height="200px"
                  bgcolor="#00ff00"
                  border="1px solid black"
                >
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  width="100%"
                  height="200px"
                  bgcolor="#00ff00"
                  border="1px solid black"
                >
                  text
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="#0000ff" height="200px">
                  text
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export { Teste };
