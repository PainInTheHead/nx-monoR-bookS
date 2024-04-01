import { StyledDropDowns } from './dropdown.styled';
import DropdownCategories from '../categories/DropdownCategories';
import PriceSlider from '../sliderPrice/PriceSlider';
import SortPrice from '../sortPrice/SortPrice';
import { useState } from 'react';
import { OptionsDrop } from '../../Types/types';

const DropDowns = () => {
  const [activeDrop, setActiveDrop] = useState<OptionsDrop>({
    Genre: false,
    Price: false,
    Sort: false,
  });

  const handleChangeDropDownActive = (optionsDrop: keyof OptionsDrop) => {
    setActiveDrop({
      ...Object.keys(activeDrop).reduce((acc, key) => {
        acc[key as keyof OptionsDrop] = false;
        return acc;
      }, {} as OptionsDrop),
      [optionsDrop]: !activeDrop[optionsDrop],
    });
  };

  return (
    <StyledDropDowns>
      <DropdownCategories
        handleChangeDropDownActive={handleChangeDropDownActive}
        activeDrop={activeDrop}
      />
      <PriceSlider
        handleChangeDropDownActive={handleChangeDropDownActive}
        activeDrop={activeDrop}
      />
      <SortPrice
        handleChangeDropDownActive={handleChangeDropDownActive}
        activeDrop={activeDrop}
      />
    </StyledDropDowns>
  );
};

export default DropDowns;
