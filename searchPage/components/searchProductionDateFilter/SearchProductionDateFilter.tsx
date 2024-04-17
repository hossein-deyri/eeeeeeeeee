import * as React from 'react';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import {
  Box,
  Grid,
  Icon,
  TextField,
  ThemeProvider,
  Typography
} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import searchProductionDateFilterStyle from './searchProductionDateFilterStyle';
import { CiSearch } from 'react-icons/ci';
import { MdCalendarMonth } from 'react-icons/md';

export default function SearchProductionDateFilter() {
  const classes = searchProductionDateFilterStyle();
  const [calendarType, setCalendarType] = useState<string>('EN');

  const [value, setValue] = useState<number[]>([1970, 2004]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    // TODO: @hosein: Here dispatch value slider
  };
  let marks = [
    {
      value: calendarType === 'EN' ? 1900 : 1300,
      label: calendarType === 'EN' ? '1900' : '1300'
    },
    {
      value: calendarType === 'EN' ? 2024 : 1402,
      label: calendarType === 'EN' ? '2024' : '1402'
    }
  ];

  const handleCalendarType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCalendarType(event.target.value);
  };
  return (
    <>
      <Grid container sx={classes.dateFilterWrapper}>
        <Grid item xs={4} sx={classes.titleFilterTextWrapper}>
          <MdCalendarMonth />
          <Typography sx={classes.titleFilterText}>سال ساخت</Typography>
        </Grid>
        <Grid item xs={8}>
          <FormControl sx={classes.radioGroupWrapper}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={classes.formControlLabelWrapper}
              value={calendarType}
              defaultValue={calendarType}
              onChange={handleCalendarType}
            >
              <FormControlLabel
                value="EN"
                control={<Radio />}
                label="میلادی"
                sx={classes.label}
              />
              <FormControlLabel
                value="IR"
                control={<Radio />}
                label="شمسی"
                sx={classes.label}
              />
            </RadioGroup>
          </FormControl>
          <Box sx={classes.sliderWrapper}>
            <ThemeProvider
              theme={(outerTheme) => ({ ...outerTheme, direction: 'ltr' })}
            >
              <Slider
                value={value}
                onChange={handleChange}
                marks={marks}
                sx={classes.slider}
                valueLabelDisplay="auto"
                min={calendarType === 'EN' ? 1900 : 1300}
                max={calendarType === 'EN' ? 2024 : 1403}
              />
            </ThemeProvider>
            <Typography sx={classes.buletRight}></Typography>
            <Typography sx={classes.buletLeft}></Typography>
          </Box>
          <Box sx={classes.textFieldYearWrapper} className={'border'}>
            <Typography>از</Typography>
            <TextField sx={classes.textFieldYear} variant="filled" />
            <Typography>تا</Typography>
            {/* <TextField sx={classes.textFieldYear} variant="filled" /> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
