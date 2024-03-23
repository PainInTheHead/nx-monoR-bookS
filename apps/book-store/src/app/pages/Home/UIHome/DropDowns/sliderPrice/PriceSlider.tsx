import { StyledPriceSlider } from './priceSlider.styled';
import ButtonDrop from '../btn-drop/ButtonDrop';
import { handleProprsForDrop } from '../../../../Types/interfaces';
import RangeSliderPrice from './RangeSlider/RangeSlider';

const PriceSlider: React.FC<handleProprsForDrop> = ({
  handleChangeDropDownActive,
  activeDrop,
}) => {
  const handleToggle = () => {
    handleChangeDropDownActive('Price');
  };

  return (
    <StyledPriceSlider>
      <ButtonDrop
        handleToggle={handleToggle}
        isOpen={activeDrop.Price}
        btnName="Price"
      />
      <div
        className={
          activeDrop.Price ? 'dropdown-options active' : 'dropdown-options'
        }
      >
        <img
          className="three"
          src="/three.svg"
          width={33}
          height={20}
          alt="elem"
        />
        <RangeSliderPrice />
      </div>
    </StyledPriceSlider>
  );
};

export default PriceSlider;
