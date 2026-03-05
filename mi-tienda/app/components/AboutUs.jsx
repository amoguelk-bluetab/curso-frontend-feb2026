import React from 'react';
import { Box, Container, Typography, Grid, Avatar, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, LocationOn, Phone } from '@mui/icons-material';

const BlackSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: theme.spacing(12, 0),
}));

const WhiteSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#000000',
  padding: theme.spacing(12, 0),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 140,
  height: 140,
  filter: 'grayscale(100%)',
  border: '1px solid #444',
  marginBottom: theme.spacing(3),
  transition: '0.3s',
  '&:hover': {
    filter: 'grayscale(0%)',
    transform: 'scale(1.05)',
  }
}));

const DarkTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': { borderColor: '#444' },
    '&:hover fieldset': { borderColor: '#fff' },
    '&.Mui-focused fieldset': { borderColor: '#fff' },
  },
  '& .MuiInputLabel-root': { color: '#888' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#fff' },
  marginBottom: '20px',
});

const PrimaryButton = styled(Button)({
  backgroundColor: '#fff',
  color: '#000',
  padding: '12px 30px',
  borderRadius: 0,
  fontWeight: 700,
  '&:hover': {
    backgroundColor: '#000',
    color: '#fff',
    border: '1px solid #fff'
  },
});

const AboutUs = () => {
  return (
    <Box>
      <BlackSection>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: 5, color: '#666' }}>
            NOSOTROS
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '3rem', md: '5rem' }, mt: 2, mb: 4, lineHeight: 1 }}>
            MENOS <br /> ES MÁS.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 300, color: '#aaa', maxWidth: '600px' }}>
            Diseñamos soluciones digitales donde la claridad es el motor de la innovación. Sin distracciones, solo resultados.
          </Typography>
        </Container>
      </BlackSection>

      <WhiteSection>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 8, textAlign: 'center' }}>
            EL EQUIPO
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} sm={4} key={item} sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <StyledAvatar src={`https://dummyjson.com/icon/${item + 5}/150`} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Talento {item}</Typography>
                  <Typography variant="body2" sx={{ color: '#666', textTransform: 'uppercase', letterSpacing: 1 }}>
                    Lead Designer
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </WhiteSection>

      <BlackSection>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} md={5}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
                HABLEMOS.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Email sx={{ mr: 2 }} />
                <Typography>hola@tustudio.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Phone sx={{ mr: 2 }} />
                <Typography>+52 55 1234 5678</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 2 }} />
                <Typography>CDMX, México</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box component="form" noValidate>
                <DarkTextField fullWidth label="Nombre completo" variant="outlined" />
                <DarkTextField fullWidth label="Correo electrónico" variant="outlined" />
                <DarkTextField fullWidth label="Mensaje" multiline rows={4} variant="outlined" />
                <PrimaryButton fullWidth size="large">ENVIAR</PrimaryButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BlackSection>
    </Box>
  );
};

export default AboutUs;