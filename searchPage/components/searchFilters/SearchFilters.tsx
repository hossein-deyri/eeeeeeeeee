import { Grid, Paper, PaperProps } from '@mui/material';
import SearchProductionDateFilter from '../searchProductionDateFilter/SearchProductionDateFilter';

const SearchFilters = (props: PaperProps) => {
  return (
    <Paper
      {...props}
      sx={{
        minHeight: '60rem',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <SearchProductionDateFilter/>
    </Paper>
  );
};

export default SearchFilters;
