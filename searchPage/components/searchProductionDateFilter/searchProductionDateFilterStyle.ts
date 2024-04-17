import MuiStyles from '@/ts/types/MuiStyles';

const searchProductionDateFilterStyle: MuiStyles = () => ({
  dateFilterWrapper: {
    p: 1,
    display:'flex',
    justifyContent:'end'
  },
  titleFilterTextWrapper: {
    width: '10rem',
    display: 'flex',
    height: '4.6rem',
    alignItems: 'center'
  },
  titleFilterText: {
    paddingLeft: '1rem'
  },
  radioGroupWrapper: {
    width: 1
  },
  formControlLabelWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  label: {
    margin: '0px'
  },
  slider: {
    '.MuiSlider-rail': {
      width: 1,
      height: '0.1rem',
      backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    '.MuiSlider-track ': {
      height: '0.1rem',
      transition: '0s !important'
    },
    '.MuiSlider-thumb': {
      width: '0.8rem',
      height: '0.8rem',
      zIndex: 1
    },
    '.MuiSlider-markLabel': {
      transform: 'translate(50%, -30%)'
    },
    ' .MuiSlider-thumb': {
      transform: 'translate(50%, -50%) !important'
    },
   
  },
  sliderWrapper: {
    height:'auto',
    position: 'relative !important',
    display: 'flex',
    flexWrap:'wrap',
    alignItems: 'center',
    padding: '0px 1rem'
  },
  buletRight: {
    width: '0.8rem',
    height: '0.8rem',
    background: 'rgba(217, 217, 217, 1)',
    borderRadius: '50%',
    position: 'absolute',
    left: '.6rem',
    top: '22%'
  },
  buletLeft: {
    width: '0.8rem',
    height: '0.8rem',
    background: 'rgba(217, 217, 217, 1)',
    borderRadius: '50%',
    position: 'absolute',
    right: '.6rem',
    top: '22%'
  },
  textFieldYear: {

    background: 'rgba(21, 21, 24, 1)',
    '.MuiInputBase-root':{
      width: '9.3rem',
      height: '2.8rem',
      borderRadius:'.4rem'
    }
  },
  textFieldYearWrapper:{
    display:'flex',
    flexWrap:'wrap'
  }
});

export default searchProductionDateFilterStyle;
