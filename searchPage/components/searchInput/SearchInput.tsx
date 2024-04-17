import {
  Chip,
  Grid,
  GridProps,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import searchInputStyles from './searchInputStyles';
import SearchChipWrapper from '../searchChipWrapper/SearchChipWrapper';

const SearchInput = (props: GridProps) => {
  const classes = searchInputStyles();

  return (
    <Grid item {...props}>
      <TextField
        sx={classes.textField}
        variant="filled"
        fullWidth
        placeholder="جستجو ..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={classes.startAdornment}>
              <CiSearch />
            </InputAdornment>
          )
        }}
      />
      <SearchChipWrapper />
    </Grid>
  );
};

export default SearchInput;
