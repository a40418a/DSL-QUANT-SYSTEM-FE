import axios from 'axios';

// GET 요청 보내기
axios
    .get('localhost:8080:8080')
    .then((response) => {
        // 응답 데이터를 처리합니다.
        console.log(response.data);
    })
    .catch((error) => {
        // 오류 처리를 수행합니다.
        console.error('There was a problem with the request:', error);
    });

// POST 요청 보내기
axios
    .post('localhost:8080:8080', { key: 'value' })
    .then((response) => {
        // 응답 데이터를 처리합니다.
        console.log(response.data);
    })
    .catch((error) => {
        // 오류 처리를 수행합니다.
        console.error('There was a problem with the request:', error);
    });
