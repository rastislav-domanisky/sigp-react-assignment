import OMDbService from 'utils/OMDbService';

export const requestGetMovies = async (searchInput: string) =>
  OMDbService.get('/', {
    params: {
      s: searchInput,
    },
  });
