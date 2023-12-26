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


export const handleGetUserInformation = async (data) => {
    try {
        const response = await APIManager('user/getInformation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error
    }
}

export const handleEditInformation = async (data) => {
    try {
        const response = await APIManager('user/editInformation', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',

            },
            data: data
        })
        return response
    } catch (error) {
        return error
    }
}

export const handleUpdateTarget = async (data) => {
    try {
        const response = await APIManager('user/updateTarget', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error
    }
}

export const handleUpdateReceiveNotification = async (data) => {
    try {
        const response = await APIManager('user/updateNotification', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error
    }
}


export const handleLogout = async (data) => {
    try {
        const response = await APIManager('user/logout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error
    }
}

export const handleDeleteTarget = async (data) => {
    try {
        const response = await APIManager('user/deleteTarget', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error
    }
}


export const handleGetStateDataFollowDay = async (data) => {
    try {
        const response = await APIManager('user/getStateFollowDay', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error
    }
}


export const userGetAllStateData = async (data) => {
    try {
        const response = await APIManager('user/getAllStateData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error
    }
}

export const userSendResponse = async (data) => {
    try {
        const response = await APIManager('user/achieveResponseFromUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error
    }
}








