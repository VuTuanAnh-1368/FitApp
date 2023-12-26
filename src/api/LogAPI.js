import APIManager from "./APIManager";
export const handleSetCurrentLog = async (data) => {
    try {
        const result = await APIManager('/log/setCurrentLog', {
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
