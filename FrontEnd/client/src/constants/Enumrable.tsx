
// enums định nghĩa các type modal
type OverlayType = {
    Nothing: number,
    SideBar: number,
    MobileSearch: number,
    DesktopSerch: number,
    PreviewImage: number,
    Login: number
}

const Overlay = Object.freeze<OverlayType>({
    Nothing: 0,
    SideBar: 5,
    MobileSearch: 6,
    DesktopSerch: 7,
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

export const Enumrable = Object.freeze({
    Overlay,Screen,SortFilter
});