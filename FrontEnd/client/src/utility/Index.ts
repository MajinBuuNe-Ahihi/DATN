import moment from "moment";
type CheckClosingTimes = {
    label: string,
    value: string
}
class Utility {
    constructor() {
    }

    CheckClosingTimes(date: Date,open: number,close: number):CheckClosingTimes {
        let currentTime = moment(date)
        let startTime = moment().startOf('day').hour(open);
        let endTime = moment().startOf('day').hour(close);
        if (!currentTime.isBetween(startTime, endTime)) {
            return {
                label: 'Đóng cửa',
                value: 'closing'
            };
        }else {
            if(endTime.diff(date,'minute') < 30)
                return  {
                    label: 'Sắp đóng cửa',
                    value: 'closingsoon'
                }; 
            else 
                return {
                        label: 'Đang mở cửa',
                        value: 'opening'
                    };
        }
    }
}

export default new Utility();