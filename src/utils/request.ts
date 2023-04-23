import axios from 'axios';
import { getAuth } from './helper/AuthHelper';

const Config: any = {
  ServerUrl: process.env.NEXT_PUBLIC_API_URL || '',
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'PURGE';

const processAPI = async <T = any>(method: HttpMethod, url: string, body?: T, header?: object | null, option?: any) => {
  const reqMethod: HttpMethod = method || 'GET';

  let reqUrl = url;

  // eslint-disable-next-line no-useless-escape
  if (!reqUrl.match(/^(http[s]{0,1}[:][\/]{2})/i)) {
    const rurl = Config?.ServerUrl || Config?.serverUrl || '';
    reqUrl = `${rurl}/${reqUrl.startsWith('/') ? reqUrl.substr(1) : reqUrl}`;
  }

  const reqHeader: any = { ...(header || {}) };
  const token = getAuth()?.api_token;
  if (token) {
    if (!option?.ignoreToken) {
      reqHeader.Authorization = `Bearer ${token}`;
    }
  }

  const rs = await axios({
    method: reqMethod,
    url: reqUrl,
    headers: reqHeader,
    data: body,
    ...(option || {}),
  });

  if (option?.returnRaw) return rs;
  return rs?.data;
};

const GET = async (url: string, header?: any, option?: any) => await processAPI('GET', url, false, header, option);

const POST = async <T = any>(url: string, body?: T, header?: any, option?: any) =>
  await processAPI('POST', url, body, header, option);

const PUT = async <T = any>(url: string, body?: T, header?: any, option?: any) =>
  await processAPI('PUT', url, body, header, option);

const DELETE = async <T = any>(url: string, body?: T, header?: any, option?: any) =>
  await processAPI('DELETE', url, body, header, option);

const PATCH = async <T = any>(url: string, body?: T, header?: any, option?: any) =>
  await processAPI('PATCH', url, body, header, option);

const PURGE = async <T = any>(url: string, body?: T, header?: any, option?: any) =>
  await processAPI('PURGE', url, body, header, option);

const request = {
  GET,
  POST,
  PUT,
  DELETE,
  PATCH,
  PURGE,
};

export default request;
