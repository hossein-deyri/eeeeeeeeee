import { Chip, Grid, Icon, Typography } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import searchChipWrapperStyles from './searchChipWrapperStyles';

const SearchChipWrapper = () => {
  const classes = searchChipWrapperStyles();

  return (
    <Grid sx={classes.chipWrapper}>
      <Chip
        sx={classes.chip}
        color="default"
        variant="outlined"
        label={
          <Grid item sx={classes.chipLabel}>
            <Icon component={CiSearch} sx={classes.chipLabelIcon} />
            <Typography sx={classes.chipLabelText}>ترسناک</Typography>
          </Grid>
        }
        // TODO: @ali: remove extra log
        onDelete={() => console.log('deleted')}
      />
    </Grid>
  );
};

export default SearchChipWrapper;
