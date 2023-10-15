import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

//cái này ko cần cũng đc, t sợ login dài quá nên làm, nhưng giờ thấy kệ mẹ nó đc r. T viết vào login r
function Cancel(props){
    const {variable} = props
    return (
            <TouchableOpacity
            Onpress = {variable}
            style={{
                justifyContent:'center',
                marginLeft:66
            }}>
            <MaterialIcon
            style={{
                fontSize:35,
                justifyContent:'center',
                }}
            name = {'cancel'}
            color={'#D9D9D9'}
            ></MaterialIcon>

        </TouchableOpacity>
    )
}
export default Cancel