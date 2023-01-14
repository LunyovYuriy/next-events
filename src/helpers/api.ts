const mutationRequest = (method: string, url: string, body: {}) =>
  fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);

const apiRequest = {
  get(url: string) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  },
  post(url: string, body: {}) {
    return mutationRequest('POST', url, body);
  },
  patch(url: string, body: {}) {
    return mutationRequest('PATCH', url, body);
  },
  delete(url: string, body: {}) {
    return mutationRequest('DELETE', url, body);
  },
};

export default apiRequest;
