import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    _key: '30502638-8236fb6cc30a79f817dee13c3',
    _per_page: 12,
    _image_type: 'photo',
    _orientation: 'horizontal',
  },
});

export const searchImage = async (q, _page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      _page,
    },
  });
  return data;
};



