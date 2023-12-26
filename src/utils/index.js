import { getItem, removeItem, storeItem } from "./asyncStorage";
import { showToast, toastConfig } from "./ToastMessage";

export default utils = {
    AsyncStorage: {
        removeItem,
        getItem,
        storeItem
    },
    Toast: {
        showToast,
        toastConfig

    }
}