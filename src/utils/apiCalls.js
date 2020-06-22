const proxy = "http://localhost:9000/";
const baseUrl = "https://verifierapi.accountchek.net/v1";

const proxyFlag = true;

const authCred = "Basic a3BldHJhY2NhQGZvcm1mcmVlLmNvbTpEMGN0b3JXaDBVMiE=";

export const GET = async (url) => {
  const response = await fetch(
    proxyFlag ? proxy + baseUrl + url : baseUrl + url,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authCred,
      },
    }
  );
  return await response.json();
};

export const GET_HTML = async (url) => {
  const response = await fetch(
    proxyFlag ? proxy + baseUrl + url : baseUrl + url,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authCred,
      },
    }
  );
  return await response.text();
};

export const GET_PDF = async (url) => {
  const response = await fetch(
    proxyFlag ? proxy + baseUrl + url : baseUrl + url,
    {
      method: "GET",
      headers: {
        Accept: "application/pdf",
        "Content-Type": "application/json",
        Authorization: authCred,
      },
    }
  );
  return await response.blob();
};

export const POST = async (url, body) => {
  const response = await fetch(
    proxyFlag ? proxy + baseUrl + url : baseUrl + url,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authCred,
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
        Authorization: authCred,
      },
      body: JSON.stringify(body),
    }
  );
  return await response.json();
};
