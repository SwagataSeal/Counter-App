import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './action/index';

export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <Container maxWidth="sm">
        <h1>Counter App</h1>
        <Box tp={3}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => dispatch(decNumber())}>
              -
            </Button>
            <Button variant="outlined">{myState}</Button>
            <Button variant="contained" onClick={() => dispatch(incNumber())}>
              +
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
