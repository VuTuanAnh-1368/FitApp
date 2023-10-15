import APIManager from "./APIManager";

export const userGetCaptcha = async (email) => {
    try {
        const result = await APIManager('/user/getcaptcha', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: email
        });
        return result;
    } catch (error) {
        return error;
    }
};

export const userLogin = async (data) => {
    try {
        const response = await APIManager('/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response;
    } catch (error) {
        return error;
    }
}


export const userLoginFacebook = async (data) => {
    try {
        const response = await APIManager('user/loginfacebook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error;
    }
}


