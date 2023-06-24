export type StateMap = {
    longitude: number,
    latitude: number,
    zoom: number
}
export type MarkerMap = {
    longitude: number,
    latitude: number,
    main: boolean
    popup?: PopupMap
}

export type PopupMap = {
    image: string,
    name: string,
    address: string,
    star: number,
    countStar: number
}