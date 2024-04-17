import searchPageStyles from './searchPageStyles';
import { Divider, Grid } from '@mui/material';
import SearchFilters from './components/searchFilters/SearchFilters';
import SearchInput from './components/searchInput/SearchInput';
import SearchContent from './components/searchContent/SearchContent';

const SearchPage = () => {
  const classes = searchPageStyles();
  return (
    <Grid container spacing={2.4} sx={classes.container}>
      <Grid item xs={12}>
        <Divider sx={classes.divider} />
      </Grid>
      <Grid item xs={3}>
        <SearchFilters />
      </Grid>
      <Grid item xs={9}>
        <SearchInput />
        <SearchContent />
      </Grid>
    </Grid>
  );
};

export default SearchPage;
