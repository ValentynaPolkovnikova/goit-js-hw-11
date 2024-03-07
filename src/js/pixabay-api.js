const KEY = '42615619-ca5031c73a3fd9196fe527b84';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const LINK = `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}