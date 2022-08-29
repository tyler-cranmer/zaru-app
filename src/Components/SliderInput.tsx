import React from 'react';
import { Slider, Input, Typography, Box } from '@mui/material';
import theme from '../theme';


interface SliderInputProps {
  label?: string;
  id?: string;
  maxValue: number;
  value: number | string | (string | number)[];
  onChange: (newValue: number | string | Array<number | string>) => void;
  disabled?: boolean;
  [x: string]: any;
}


const style = {
  display: 'grid',
  gap: theme.spacing(3),
  gridTemplateRows: 'auto',
  gridTemplateColumns: '1fr auto',
};

export const SliderInput = ({
  label = '',
  id = 'input-slider',
  maxValue,
  value,
  onChange,
  disabled = false,
  ...rest
}: SliderInputProps) => {
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    onChange(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      onChange(0);
    } else if (value > maxValue) {
      onChange(maxValue);
    }
  };

  const sliderStep = maxValue / 100;
  const inputStep = maxValue / 50;


  const sliderMarks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: maxValue,
      label: '100%',
    },
  ];

  // ... is a "Spread" operator
  // standard javascript thing
  // works on iterables
  // expands a list
  return (
    <div {...rest}>
      {label && (
        <Typography id={id} gutterBottom>
          {label}
        </Typography>
      )}

      <Box sx={style}>
        <div>
          <Slider
            value={typeof value === 'number' ? value : 0}
            step={sliderStep}
            onChange={handleSliderChange}
            aria-labelledby={id}
            max={maxValue}
            disabled={disabled}
            marks={disabled ? [] : sliderMarks}
          />
        </div>
        <div>
          <Input
            value={value}
            margin='dense'
            onChange={handleInputChange}
            onBlur={handleBlur}
            disabled={disabled}
            inputProps={{
              step: inputStep,
              min: 0,
              max: maxValue,
              type: 'number',
              'aria-labelledby': id,
            }}
          />
        </div>
      </Box>
    </div>
  );
};
