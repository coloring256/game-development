export const downloadAsText = url => {
  return new Promise((res, rej) => {
    var request = new window.XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400)
        return res(request.responseText);
      rej(new Error(`HTTP: Failed to download ${url}`));
    };
    request.onerror = () => {
      rej(new Error(`HTTP: Failed to download ${url}`));
    };
    request.send();
  });
};
