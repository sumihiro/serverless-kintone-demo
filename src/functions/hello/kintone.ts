import { KintoneRestAPIClient } from '@kintone/rest-api-client';

export const kintone = new KintoneRestAPIClient({
  baseUrl: process.env.KINTONE_BASE_URL ?? '',
  auth: {
    username: process.env.KINTONE_USERNAME ?? '',
    password: process.env.KINTONE_PASSWORD ?? ''
  }
})
