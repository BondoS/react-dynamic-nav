const checkStatus = (response: Response) => {
  if (response.ok) {
    return response;
  }
  return Promise.reject(response.statusText);
};

async function apiCall<T>(url: string): Promise<T> {
  return fetch(url)
    .then(checkStatus)
    .then((result) => result.json());
}

export default apiCall;
