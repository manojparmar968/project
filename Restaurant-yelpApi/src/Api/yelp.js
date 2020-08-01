import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer BNo_hJwfUFZ5HumJLIJfxBMK_Mzxm9fc5KTqFN0O9T_cAiIxIRc4rcYcACpVEeaAUXT7Wp0JDFFbnequMbVd3GeiRCKJvMIX6AdY7Rx42pNZdqxE6fIeRGZdx_aJXnYx'
    }
});