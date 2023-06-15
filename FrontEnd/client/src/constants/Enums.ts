// enums kích thước màn hình
const EnumsScreen = Object.freeze({
    Mobile: {
        Name: "mobile",
        Size: 989
    },
    Tablet: {
        Name: "tablet",
        Size: 1000
    }
    ,
    PC: {
        Name: "desktop",
        Size: 1280
    }
})
/*
 value:
 0 : nothing open 
 5 : open sidebar
 6 : open search mobile
 7 : open search home
 8 : open preview image
 9 : open login popup
 */
// enum handle các mode mở modal
const EnumsTriggerOverLay = Object.freeze( {
    Nothing: 0, // đóng tất cả
    Sidebar: 5, // mở side bar
    SearchMobile: 6,// mở form search ở mobile
    SearchHome: 7, // mở form search ở home
    PreviewImage: 8, // xem preview ảnh
    Login: 9 // mở login

})

export const Enums = Object.freeze({
    EnumsScreen,
    EnumsTriggerOverLay
})