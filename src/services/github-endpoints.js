export const fetchUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json());
};

export const fetchRepos = (url) => {
  return fetch(url)
    .then(res => res.json());
};
