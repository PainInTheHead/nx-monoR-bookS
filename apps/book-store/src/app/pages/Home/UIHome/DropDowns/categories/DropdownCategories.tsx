import React, { useState } from 'react';
import { StyledDropdownCategories } from './dropCat.styled';
import ButtonDrop from '../btn-drop/ButtonDrop';
import { OptionsDrop, OptionsSort, Options } from '../../../../Types/types';
import { handleProprsForDrop } from '../../../../Types/interfaces';

const DropdownCategories: React.FC<handleProprsForDrop> = ({
  handleChangeDropDownActive,
  activeDrop,
}) => {
  const [options, setOptions] = useState<Options>({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleToggle = () => {
    handleChangeDropDownActive('Genre');
  };

  const handleOptionChange = (option: keyof Options) => {
    setOptions({ ...options, [option]: !options[option] });
  };

  return (
    <StyledDropdownCategories>
      <ButtonDrop
        handleToggle={handleToggle}
        isOpen={activeDrop.Genre}
        btnName="Genre"
      />

      <div
        className={
          activeDrop.Genre ? 'dropdown-options active' : 'dropdown-options'
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
            checked={options.option1}
            onChange={() => handleOptionChange('option1')}
          />
          <div className={options.option1 ? 'checked' : 'uncheked'}></div>
          <span>Категория 1</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.option2}
            onChange={() => handleOptionChange('option2')}
          />
          <div className={options.option2 ? 'checked' : 'uncheked'}></div>
          <span>Категория 2</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.option3}
            onChange={() => handleOptionChange('option3')}
          />
          <div className={options.option3 ? 'checked' : 'uncheked'}></div>
          <span>Категория 3</span>
        </label>
      </div>
    </StyledDropdownCategories>
  );
};

export default DropdownCategories;
