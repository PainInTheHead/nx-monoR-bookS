import { StyledSortPrice } from './sortPrice.styled';
import ButtonDrop from '../btn-drop/ButtonDrop';
import { useState, useEffect } from 'react';
import { OptionsDrop, OptionsSort } from '../../../../Types/types';
import { handleProprsForDrop } from '../../../../Types/interfaces';

const SortPrice: React.FC<handleProprsForDrop> = ({
  handleChangeDropDownActive,
  activeDrop,
}) => {
  const [options, setOptions] = useState<OptionsSort>({
    option_1: true,
    option_2: false,
    option_3: false,
  });

  const [trueOption, setTrueOption] = useState('');

  useEffect(() => {
    // Действия, которые будут выполнены при изменении `options`
    const trueOption = Object.keys(options).find(
      (option) => options[option as keyof OptionsSort]
    );
    if (!trueOption) return;
    const activeOption = trueOption.split('_').join(' ');
    setTrueOption(activeOption);
  }, [options]);

  const handleToggle = () => {
    handleChangeDropDownActive('Sort');
  };

  const handleOptionChange = (optionToggle: keyof OptionsSort) => {
    // setOptions({ ...options, [option]: !options[option] });
    setOptions({
      ...Object.keys(options).reduce((acc, key) => {
        acc[key as keyof OptionsSort] = false;
        return acc;
      }, {} as OptionsSort),
      [optionToggle]: !options[optionToggle],
    });
  };

  return (
    <StyledSortPrice>
      <ButtonDrop
        handleToggle={handleToggle}
        isOpen={activeDrop.Sort}
        btnName={`Sort by ${trueOption}`}
      />
      <div
        className={
          activeDrop.Sort ? 'dropdown-options active' : 'dropdown-options'
        }
      >
        <img
          className="three"
          src="/three.svg"
          width={33}
          height={20}
          alt="elem"
        />
        <label>
          <input
            type="checkbox"
            checked={options.option_1}
            onChange={() => handleOptionChange('option_1')}
          />
          <span className={options.option_1 ? 'checked' : 'uncheked'}>
            option 1
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.option_2}
            onChange={() => handleOptionChange('option_2')}
          />
          <span className={options.option_2 ? 'checked' : 'uncheked'}>
            option 2
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.option_3}
            onChange={() => handleOptionChange('option_3')}
          />
          <span className={options.option_3 ? 'checked' : 'uncheked'}>
            option 3
          </span>
        </label>
      </div>
    </StyledSortPrice>
  );
};

export default SortPrice;
