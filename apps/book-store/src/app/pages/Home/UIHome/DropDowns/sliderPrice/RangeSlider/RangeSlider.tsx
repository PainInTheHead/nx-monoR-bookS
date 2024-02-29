import { StyledSliderPrice } from "./rangeSlider.styled";
import Box from "@mui/material/Box";
import { useState } from "react";
import { CoolSlider } from "./MUI.styled";

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 10;

const RangeSliderPrice = () => {
  const [value1, setValue1] = useState<number[]>([30000, 170000]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <StyledSliderPrice>
      <Box sx={{ width: 370, padding: "0 6px" }}>
        <CoolSlider
          getAriaLabel={() => "Minimum distance"}
          min={30000}
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
