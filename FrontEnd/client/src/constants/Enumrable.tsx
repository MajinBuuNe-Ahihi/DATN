
// enums định nghĩa các type modal
type OverlayType = {
    Nothing: number,
    SideBar: number,
    MobileSearch: number,
    DesktopSearch: number,
    PreviewImage: number,
    Login: number
}

const Overlay = Object.freeze<OverlayType>({
    Nothing: 0,
    SideBar: 5,
    MobileSearch: 6,
    DesktopSearch: 7,
    PreviewImage: 8,
    Login: 9
})

type  ScreenType = {
    Mobile: {
        Name: string,
        Size: number
    },
    Tablet: {
        Name: string,
        Size: number
    }, 
    PC: {
        Name: string,
        Size: number
    }
}

// Screen
const Screen =Object.freeze<ScreenType>( {
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

type SortFilterType = {
    Correct: number,
    Point: number,
    NearYou: number
}

const SortFilter = Object.freeze<SortFilterType>({
    Correct: 0,
    Point: 1,
    NearYou: 2
})

type ConvenienceType = {
    WeatherParty: number,
    KidsPlay: number,
    MotoPark: number,
    AllowPet: number,
    CardPayment: number
    Dessert: number,
    CarPark: number,
    Smoking: number,
    Wifi: number,
    AirConditional: number,
    DisplayFootball:  number,
    Shipping: number,
    TakeOutFood: number,
    LiveMusic: number


}

const Convenience = Object.freeze<ConvenienceType>({
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