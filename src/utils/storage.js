export const getPosts = () => JSON.parse(localStorage.getItem('blogs')) || [];
export const savePosts = (posts) => localStorage.setItem('blogs', JSON.stringify(posts));
