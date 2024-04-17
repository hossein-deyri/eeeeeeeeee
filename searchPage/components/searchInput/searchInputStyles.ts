import MuiStyles from '@/ts/types/MuiStyles';

const searchInputStyles: MuiStyles = () => ({
  textField: {
    '& .MuiInputBase-input': {
      py: 0.85
    }
  },

  startAdornment: {
    mt: '0 !important'
  }
});

export default searchInputStyles;
