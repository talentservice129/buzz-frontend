import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Card, CardContent, Checkbox, CssBaseline, FormControlLabel, Grid, InputLabel, TextField, ThemeProvider, createTheme } from '@mui/material';
import { CheckBoxOutlineBlankRounded, CheckBoxRounded, Image, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#6366F1'
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(',')
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px'
        },
        input: {
          lineHeight: '26px',
          height: 'auto',
          padding: '10px 12px'
        }
      }
    }
  }
});

export default function App() {
  const [showPassword, setTogglePassword] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box component="main" className='min-h-screen w-full flex flex-col justify-center bg-cover bg-no-repeat bg-[#1F2937]' sx={{
        backgroundImage: "url('./images/bg.png')"
      }}>
        <CssBaseline />
        <Box sx={{}}>

        </Box>
        <Container className='max-w-[583px]'>
          <Box className='flex items-center justify-center mb-10'
          >
            <img src="/logo.png" alt="Buzz" width={42} height={43} />
            <Typography component="h1" variant="h5" className='text-white ml-5 text-[21px] font-semibold'>
              Buzz Coworking
            </Typography>
          </Box>
          <Card className='rounded-2xl px-8 py-10'>
            <CardContent className='p-0'>
              <Typography component="h1" variant="h5" className='text-[24px] text-center font-bold mb-10'>
                Login
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Typography component="label" className='block leading-6 font-medium mb-1.5'>
                  Email Address
                </Typography>
                <TextField
                  margin="none"
                  required
                  fullWidth
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className='mb-4'
                />
                <Typography component="label" className='block leading-6 font-medium mb-1.5'>
                  Password
                </Typography>
                <Box className="relative mb-4">
                  <TextField
                    margin="none"
                    required
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                  />
                  {showPassword ?
                    <VisibilityOffOutlined onClick={() => setTogglePassword(false)} className='absolute right-2 top-1/2 -translate-y-1/2 text-[#667085] cursor-pointer' />
                    :
                    <VisibilityOutlined onClick={() => setTogglePassword(true)} className='absolute right-2 top-1/2 -translate-y-1/2 text-[#667085] cursor-pointer' />
                  }
                </Box>
                <FormControlLabel
                  control={<Checkbox className='py-0' value="remember" color="primary" icon={<CheckBoxOutlineBlankRounded />} checkedIcon={<CheckBoxRounded />} />}
                  label="Remember me"
                />
                <Button
                  className='mt-10 py-[18px] px-6 text-center rounded-xl capitalize font-semibold leading-5'
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  Login
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
