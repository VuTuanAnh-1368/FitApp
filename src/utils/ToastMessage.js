import Toast, { BaseToast, ErrorToast, InfoToast } from "react-native-toast-message";

export const showToast = (type, title, content, position = 'top') => {
    Toast.show({
        type: type,
        text1: title,
        text2: content,
        autoHide: true,
        visibilityTime: 1500,
        position: position,

    })

}
export const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'green' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 18,
                fontWeight: '400'
            }}
            text2Style={{
                fontSize: 14
            }}

        />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 18
            }}
            text2Style={{
                fontSize: 14
            }}
        />
    ),
    info: (props) => (
        <InfoToast
            {...props}
            text1Style={{
                fontSize: 20,
                fontWeight: 400
            }}
            text2Style={{
                fontSize: 14
            }}
        />
    )
    ,
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({ text1, props }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    )
};
