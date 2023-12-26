import { fetchLocations, fetchWeatherForecast } from "./WeatherAPI";
import {
    userGetCaptcha, userLogin, userLoginFacebook, handleGetUserInformation, handleEditInformation, handleUpdateTarget,
    handleUpdateReceiveNotification, handleLogout, handleDeleteTarget, handleGetStateDataFollowDay, userGetAllStateData,
    userSendResponse

} from "./UserAPI";
import { handleSetCurrentLog } from './LogAPI'
import { handleGetStateData, handleGetAllStateData, handleGetWeeklyTimeSleep } from './StateAPI'
import { handlePostSportHistory, handleGetAllSportHistory } from './MapAPI'
export default api = {
    WeatherAPI: {
        fetchLocations,
        fetchWeatherForecast
    },
    UserAPI: {
        userGetCaptcha,
        userLogin,
        userLoginFacebook,
        handleGetUserInformation,
        handleEditInformation,
        handleUpdateTarget,
        handleUpdateReceiveNotification,
        handleLogout,
        handleDeleteTarget,
        handleGetStateDataFollowDay,
        userGetAllStateData,
        userSendResponse


    },
    LogAPI: {
        handleSetCurrentLog

    },
    StateAPI: {
        handleGetStateData,
        handleGetAllStateData,
        handleGetWeeklyTimeSleep
    },
    MapAPI: {
        handlePostSportHistory,
        handleGetAllSportHistory
    }
}