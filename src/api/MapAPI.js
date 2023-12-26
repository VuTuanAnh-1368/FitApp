import APIManager from "./APIManager";
export const handlePostSportHistory = async (data) => {
    try {
        const result = await APIManager('/map/postSportHistory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        });
        return result;
    } catch (error) {
        return error;
    }
};

export const handleGetAllSportHistory = async (data) => {
    try {
        const result = await APIManager('/map/getAllSportHistory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        });
        return result;
    } catch (error) {
        return error;
    }
};

