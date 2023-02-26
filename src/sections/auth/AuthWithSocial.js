// @mui
import { Divider, IconButton, Stack } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------
/* eslint-disable */
export default function AuthWithSocial() {
  const { loginWithGoogle, loginWithGithub } = useAuthContext();

  const handleGoogleLogin = async () => {
    try {
      if (loginWithGoogle) {
        loginWithGoogle();
      }
      console.log('GOOGLE LOGIN');
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      if (loginWithGithub) {
        loginWithGithub();
      }
      console.log('GITHUB LOGIN');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: 'overline',
          color: 'text.disabled',
          '&::before, ::after': {
            borderTopStyle: 'dashed',
          },
        }}
      >
        ИЛИ
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={2}>
        {/*<IconButton onClick={handleGoogleLogin}>*/}
        {/*  <Iconify icon="eva:google-fill" color="#DF3E30" />*/}
        {/*</IconButton>*/}

        <IconButton color="inherit" onClick={handleGithubLogin}>
          <Iconify icon="eva:github-fill" />
        </IconButton>
      </Stack>
    </div>
  );
}
