let url = `https://google.com/a=1&b=2&c=3&d=4&e=5`;

const queryURLParams = (URL) => {
  let url = URL.split("?")[1];
  const urlSearchParams = new URLSearchParams(url);
  const params = Object.fromEntries(urlSearchParams.entries);
  return params;
};
