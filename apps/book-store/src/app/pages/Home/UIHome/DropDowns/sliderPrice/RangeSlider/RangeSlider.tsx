import { StyledSliderPrice } from './rangeSlider.styled';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { CoolSlider } from './MUI.styled';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../hooks/hookStore';
import { setPrices } from '../../../../../../store/slices/bookSlice';

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 10;

const RangeSliderPrice = () => {
  const dispatch = useAppDispatch();
  const prices = useAppSelector((state) => state.books.prices);
  const [value1, setValue1] = useState<number[]>([100, 999900]);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(() => {
      console.log('value:', value1);
      dispatch(setPrices(value1));
    }, 1000);

    setTimerId(newTimerId);

    return () => {
      if (newTimerId) {
        clearTimeout(newTimerId);
      }
    };
  }, [value1]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    setValue1((prevValue) => {
      if (activeThumb === 0) {
        return [Math.min(newValue[0], prevValue[1] - 100), prevValue[1]];
      } else {
        return [prevValue[0], Math.max(newValue[1], prevValue[0] + 100)];
      }
    });
  };

  return (
    <StyledSliderPrice>
      <Box sx={{ width: 370, padding: '0 6px' }}>
        <CoolSlider
          getAriaLabel={() => 'Minimum distance'}
          min={100}
          max={999900}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
      <div className="value-slider">
        <span>
          $ {Math.floor(value1[0] / 100)},{value1[0] % 100}
        </span>
        <span>$ {value1[1] / 100}</span>
      </div>
    </StyledSliderPrice>
  );
};

export default RangeSliderPrice;
