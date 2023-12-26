import APIManager from "./APIManager";
export const handleGetStateData = async () => {
    try {
        const result = await APIManager('/state/getStateData', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        return result;
    } catch (error) {
        return error;
    }
};

export const handleGetAllStateData = async () => {
    try {
        const result = await APIManager('/state/getAllStateData', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        return result;
    } catch (error) {
        return error;
    }
};

export const handleGetWeeklyTimeSleep = async (data) => {
    try {
        const result = await APIManager('/state/getWeeklyTimeSleep', {
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

