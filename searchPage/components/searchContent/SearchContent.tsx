import { Grid, GridProps, Paper } from '@mui/material';

const SearchContent = (props: GridProps) => {
  return (
    <Grid item {...props}>
      <Paper
        sx={{
          border: '1px dashed #bbb',
          borderRadius: '1rem',
          minHeight: '52rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none'
        }}
      >
        محل محتوا
      </Paper>
    </Grid>
  );
};

export default SearchContent;
