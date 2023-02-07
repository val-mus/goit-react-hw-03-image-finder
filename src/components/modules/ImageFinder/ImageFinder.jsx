import { Component } from 'react';

import axios from 'axios';
import { Notify, Loading } from 'notiflix';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

class ImageFinder extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true });
      axios
        .get(
          `https://pixabay.com/api/?q=${search}&page=1&key=30502638-8236fb6cc30a79f817dee13c3&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(({ data }) => {
          this.setState({ items: data.hits });
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  searchImage = ({ search }) => {
    this.setState({ search });
  };

  render() {
    const { items, loading, error, search } = this.state;
    const { searchImage } = this;
    loading ? Loading.arrows() : Loading.remove();
    return (
      <>
        <SearchBar onSubmit={searchImage} />
        <ImageGallery items={items} />
        {error && Notify.failure('Qui timide rogat docet negare')}
      </>
    );
  }
}

export default ImageFinder;
