import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { useState } from "react";
import { styled } from "@mui/material/styles";

export const CoolSlider = styled(Slider)({
  color: "#BFCC94",
  
  backgroundColor: "#F0F4EF",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#F7F7FC",
    boxShadow: "0px 0px 10px 0 #BFCC94",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(125, 190, 34, 0.16)",
    },
  },
  "& .MuiSlider-valueLabel": {
    display: "none",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#D6D8E7",
  },
});
