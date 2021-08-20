import OMDbService from '.';

export type MovieDataResult = {
  isOK: boolean;
  data: any;
};

const getMovieData = async (movieID: string): Promise<MovieDataResult> => {
  const response = await OMDbService.get('/', {
    params: {
      i: movieID,
    },
  });

  if (response.status !== 200) {
    return {
      isOK: false,
      data: null,
    };
  }

  if (response.data.Response === 'False') {
    return {
      isOK: false,
      data: null,
    };
  }

  return {
    isOK: true,
    data: response.data,
  };
};

export default getMovieData;
