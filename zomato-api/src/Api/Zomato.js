import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': '7607b14d690fce0d39f1b0ae86854e13'
    }
});

// 7607b14d690fce0d39f1b0ae86854e13