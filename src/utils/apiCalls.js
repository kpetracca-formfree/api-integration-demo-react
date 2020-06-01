const proxy = "http://localhost:9000/";
const baseUrl = "https://verifierapi.accountchek.net/v1";

const proxyFlag = true;

export const POST = async (url, body) => {
  const response = await fetch(
    proxyFlag ? proxy + baseUrl + url : baseUrl + url,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic a3BldHJhY2NhQGZvcm1mcmVlLmNvbTpEMGN0b3JXaDBVMiE=",
      },
      body: JSON.stringify(body),
    }
  );
  return await response.json();
};

export const PATCH = async (url, body) => {
  const response = await fetch(
    proxyFlag ? proxy + baseUrl + url : baseUrl + url,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic a3BldHJhY2NhQGZvcm1mcmVlLmNvbTpEMGN0b3JXaDBVMiE=",
      },
      body: JSON.stringify(body),
    }
  );
  return await response.json();
};
