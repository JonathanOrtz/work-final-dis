import { Grid, Typography, Paper } from "@mui/material";
import { styled } from '@mui/system';

import { SocketContext } from "../socketConnection";

const StyledVideo = styled('video')({
    width: '550px',
});

const StyledGrid = styled(Grid)({
    justifyContent: 'center',
});

const StyledPaper = styled(Paper)({
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
});

export default function VideoPlayer() {
    return (
        <>
            {/* my video feed */}
            <StyledGrid container>
                <StyledPaper>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Name
                        </Typography>
                        <StyledVideo
                            playsInline
                            muted
                            ref={null}
                            autoPlay
                        />
                    </Grid>
                </StyledPaper>
            </StyledGrid>

            {/*user calling video feed */}

            <StyledGrid container>
                <StyledPaper>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Name
                        </Typography>
                        <StyledVideo
                            playsInline
                            muted
                            ref={null}
                            autoPlay
                        />
                    </Grid>
                </StyledPaper>
            </StyledGrid>
        </>
    );
}