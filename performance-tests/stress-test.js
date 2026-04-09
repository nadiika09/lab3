import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 30 }, // розгін до 30 користувачів
    { duration: '5m', target: 30 }, // тримаємо 30 користувачів
    { duration: '2m', target: 0 },  // зупинка
  ],
};

export default function () {
  http.get('http://localhost:8080/');
  sleep(1);
}
