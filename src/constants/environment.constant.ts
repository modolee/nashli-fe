export const APP_ENV: string | undefined = process.env.REACT_APP_APP_ENV; // 실행 환경
export const BE_HOST: string | undefined = process.env.REACT_APP_BE_HOST; // 호스트 주소
export const BE_PORT: string | undefined = process.env.REACT_APP_BE_PORT; // 포트 번호

let API_ENDPOINT: string | undefined; // API 엔드포인트

if (APP_ENV === 'local') {
  API_ENDPOINT = `${BE_HOST}:${BE_PORT}`;
} else {
  API_ENDPOINT = BE_HOST;
}

export { API_ENDPOINT };
