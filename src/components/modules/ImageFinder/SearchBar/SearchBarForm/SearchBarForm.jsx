import PropTypes from 'prop-types';
import { Component } from 'react';

import s from './search-bar-form.module.css';

class SearchBarForm extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={handleChange}
          name="search"
          required
        />
      </form>
    );
  }
}

SearchBarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBarForm;
