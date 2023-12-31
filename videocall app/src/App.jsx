
import { Typography, AppBar } from '@mui/material';
import { styled } from '@mui/system';

import VideoPlayer from '../src/components/VideoFeedPlayer';
//import Sidebar from './components/Sidebar';
//import Notifications from './components/Notifications';

const StyledAppBar = styled(AppBar)(() => ({
  borderRadius: 15,
  margin: '30px 100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  border: '2px solid black',
}));

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

const App = () => {
  return (
    <Wrapper>
      <StyledAppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </StyledAppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </Wrapper>
  );
};

export default App;

