import SearchBarForm from './SearchBarForm/SearchBarForm';
import styles from './search-bar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({onSubmit}) => {
  return (
    <header className={styles.SearchBar}>
      <SearchBarForm onSubmit={onSubmit} />
    </header>
  );
};


SearchBarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
