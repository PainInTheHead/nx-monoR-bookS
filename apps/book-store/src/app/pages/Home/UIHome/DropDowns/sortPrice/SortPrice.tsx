import { StyledSortPrice } from './sortPrice.styled';
import ButtonDrop from '../btn-drop/ButtonDrop';
import { useState, useEffect } from 'react';
import { OptionsDrop, OptionsSort } from '../../../../Types/types';
import { handleProprsForDrop } from '../../../../Types/interfaces';
import { useAppDispatch } from '../../../../../hooks/hookStore';
import { setSortBy } from '../../../../../store/slices/bookSlice';


const SortPrice: React.FC<handleProprsForDrop> = ({
  handleChangeDropDownActive,
  activeDrop,
}) => {
  const dispatch = useAppDispatch()
  const [options, setOptions] = useState<OptionsSort>({
    Price: true,
    Name: false,
    Author_name: false,
    Rating: false,
    Date_of_issue: false,
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
    console.log(trueOption);
    dispatch(setSortBy(trueOption));
  }, [options, dispatch]);

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
            checked={options.Price}
            onChange={() => handleOptionChange('Price')}
          />
          <span className={options.Price ? 'checked' : 'uncheked'}>Price</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.Name}
            onChange={() => handleOptionChange('Name')}
          />
          <span className={options.Name ? 'checked' : 'uncheked'}>Name</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.Author_name}
            onChange={() => handleOptionChange('Author_name')}
          />
          <span className={options.Author_name ? 'checked' : 'uncheked'}>
            Author name
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.Rating}
            onChange={() => handleOptionChange('Rating')}
          />
          <span className={options.Rating ? 'checked' : 'uncheked'}>
            Rating
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.Date_of_issue}
            onChange={() => handleOptionChange('Date_of_issue')}
          />
          <span className={options.Date_of_issue ? 'checked' : 'uncheked'}>
            Date of issue
          </span>
        </label>
      </div>
    </StyledSortPrice>
  );
};

export default SortPrice;
