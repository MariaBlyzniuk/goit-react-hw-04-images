import React, { useState  } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { SearchbarStyles } from './Searchbar.styled';
import { SearchFormStyles } from './Searchbar.styled';
import { SearchButton } from './Searchbar.styled';
import { SearchInput } from './Searchbar.styled';
import {BsSearch} from "react-icons/bs"

export default function Searchbar ({onSubmit}) {
  const [findValue, setFindValue] = useState('');

  const handleInputChange = e => {
    setFindValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (findValue.trim() === '') {
      toast.error('Type something to find');
      return;
    }

    onSubmit(findValue);
    setFindValue('');
  };

    return (
      <SearchbarStyles>
        <SearchFormStyles onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <BsSearch/>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={findValue}
            onChange={handleInputChange}
          />
        </SearchFormStyles>
      </SearchbarStyles>
    );
  }


Searchbar.propTypes = { onSubmit: PropTypes.func };