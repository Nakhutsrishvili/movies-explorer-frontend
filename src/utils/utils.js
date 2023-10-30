const getDuration = (duration) => {
  return `${(duration / 60) | 0}ч ${duration % 60}м`;
};

const isOk = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
};

export { getDuration, isOk };
