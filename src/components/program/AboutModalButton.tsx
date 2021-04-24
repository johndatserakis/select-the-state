import { useState } from 'react';
import { Info } from '@material-ui/icons';
import { Box, Button, DialogActions, DialogContent, DialogTitle, Link, Typography } from '@material-ui/core';
import { CoffeeButton } from './CoffeeButton';
import { Dialog } from '../mui/Dialog';

export const AboutModalButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} title="About">
        <Info />
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} scroll="paper">
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Info /> &nbsp; About
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" gutterBottom>
            Hi there - thanks for checking out <strong>Find the State</strong>.
          </Typography>

          <Typography variant="body1" gutterBottom>
            The purpose of building this application was to learn a bit more about using Mapbox and creating map
            interactions for the web.
          </Typography>

          <Typography variant="body1" gutterBottom>
            I figured the best way to do that would be to build a little game that would also help me educate myself
            better on the geography of the U.S.A. and the amazing states we have.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Both the{' '}
            <Link
              href="https://github.com/johndatserakis/find-the-state-ui"
              title="View on GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              frontend
            </Link>{' '}
            and{' '}
            <Link
              href="https://github.com/johndatserakis/find-the-state-api"
              title="View on GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              backend
            </Link>{' '}
            code are open-sourced - go ahead and take a look at the code that runs the site. The frontend is built using
            React and TypeScript and the backend is built using FastAPI with Python.
          </Typography>

          <Box display="flex" justifyContent="center" mt={4} mb={2}>
            <CoffeeButton />
          </Box>

          <Typography variant="body1" component={'div'} gutterBottom>
            <strong>Roadmap:</strong>
            <ul>
              <li>
                <s>Add an endpoint to save a user's best time to the backend</s>
              </li>
              <li>
                Add name personalization and highest streak to score-saving, along with the ability to opt-out of
                score-saving.
              </li>
              <li>
                Perhaps expand the game and add other countries to the mix - maybe for a country like Canada it would be
                about finding its provinces and territories
              </li>
              <li>Show total count of wrong answers for each state when looking at the wrong answer choropleth</li>
              <li>
                Show more general information about a user's game - total wrong answers, longest streak, stuff like that
              </li>
            </ul>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary" variant="contained">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
