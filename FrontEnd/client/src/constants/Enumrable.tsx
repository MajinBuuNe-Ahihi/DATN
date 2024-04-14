
// enums định nghĩa các type modal
type Enum = {
    [key: string]: number
}


const Overlay = Object.freeze<Enum>({
    Nothing: 0,
    SideBar: 5,
    MobileSearch: 6,
    DesktopSearch: 7,
    PreviewImage: 8,
    Login: 9
})

type  EnumObject = {
    [key: string]: {
        Name: string,
        Size: number
    }

}

// Screen
const Screen =Object.freeze<EnumObject>( {
    Mobile: {
        Name: "mobile",
        Size: 989
    },
    Tablet: {
        Name: "table",
        Size: 1040
    },
    PC: {
        Name: "desktop",
        Size: 1280
    }
})


const SortFilter = Object.freeze<Enum>({
    Correct: 0,
    Point: 1,
    NearYou: 2
})


const Convenience = Object.freeze<Enum>({
    WeatherParty: 1,
    KidsPlay: 2,
    MotoPark: 3,
    AllowPet: 4,
    CardPayment: 5,
    Dessert: 6,
    CarPark: 7,
    Smoking: 8,
    Wifi: 9,
    AirConditional: 10,
    DisplayFootball: 11,
    Shipping: 12,
    TakeOutFood: 13,
    LiveMusic: 14
})

export const Enumrable = Object.freeze({
    Overlay,Screen,SortFilter,Convenience
});