import SearchBarForm from './SearchBarForm/SearchBarForm';
import styles from './search-bar.module.css';

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={styles.SearchBar}>
      <SearchBarForm onSubmit={onSubmit} />
    </header>
  );
};


export default SearchBar;
