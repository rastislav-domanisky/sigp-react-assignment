export const getFavorites = (): Array<string> => {
  const storageValue = localStorage.getItem('favorites');
  let data: Array<string> = [];
  try {
    if (storageValue) {
      data = JSON.parse(storageValue);
    }
  } catch (e) {
    return [];
  }

  return data;
};

export const removeFromFavorites = (value: string) => {
  const favorites = getFavorites();
  const index = favorites.indexOf(value);
  if (index > -1) {
    favorites.splice(index, 1);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const addToFavorites = (value: string) => {
  const favorites = getFavorites();
  favorites.push(value);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
