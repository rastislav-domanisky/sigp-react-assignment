import OMDbService from 'utils/OMDbService';

export const requestGetMovies = async (searchInput: string, page: number) =>
  OMDbService.get('/', {
    params: {
      s: searchInput,
      page,
    },
  });
