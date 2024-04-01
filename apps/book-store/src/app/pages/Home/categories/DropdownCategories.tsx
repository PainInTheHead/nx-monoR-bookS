import React, { useEffect, useState } from 'react';
import { StyledDropdownCategories } from './dropCat.styled';
import ButtonDrop from '../btn-drop/ButtonDrop';
import { OptionsDrop, OptionsSort, Options } from '../../Types/types';
import { handleProprsForDrop } from '../../Types/interfaces';
import { useAppDispatch, useAppSelector } from '../../../hooks/hookStore';
import {
  actionGetGenresFilters,
  addGenres,
} from '../../../store/slices/bookSlice';

const DropdownCategories: React.FC<handleProprsForDrop> = ({
  handleChangeDropDownActive,
  activeDrop,
}) => {
  const dispatch = useAppDispatch();
  const genresFilters = useAppSelector((state) => state.books.genresFilter);
  useEffect(() => {
    dispatch(actionGetGenresFilters());
    const initialOptionsState: { [key: string]: boolean } = {};
    const keyOfGenres = genresFilters.map((genre) => {
      return (initialOptionsState[genre.name] = false);
    });
    setOptions(initialOptionsState);
  }, []);

  const [options, setOptions] = useState<{ [key: string]: boolean }>({});

  const handleToggle = () => {
    handleChangeDropDownActive('Genre');
  };

  const handleOptionChange = (option: string, genre: number) => {
    setOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions, [option]: !prevOptions[option] };
      dispatch(addGenres({ genreId: genre }));
      return updatedOptions;
    });
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
        {genresFilters.map((genre) => {
          const genreName = genre.name;
          const id = genre.id;
          return (
            <label key={id}>
              <input
                type="checkbox"
                checked={options[genreName] || false}
                onChange={() => handleOptionChange(genreName, id)}
              />
              <div
                className={options[genreName] ? 'checked' : 'uncheked'}
              ></div>
              <span>{genreName}</span>
            </label>
          );
        })}
      </div>
    </StyledDropdownCategories>
  );
};

export default DropdownCategories;
