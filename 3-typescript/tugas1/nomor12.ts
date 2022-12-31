function getDays(month:any, year:any){
    if(typeof month !== 'number' && typeof year !== 'number') {
        return 'inputan tahun dan bulan harus dalam integer'
    }
    else if (typeof month !== 'number') {
        return 'inputan bulan harus dalam integer'
    } else if(typeof year !== 'number') {
        return 'inputan tahun harus dalam integer'
    }else{
        let dayCount;
                switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                dayCount = 31
                break
            case 4:
            case 6:
            case 9:
            case 11:
                dayCount = 30
                break
            case 2:
                if ((year% 4 == 0 && !(year % 100 ==0)) || year % 400 ==0) {
                    dayCount = 29;
                }else{
                    dayCount =28;
                }
                break
            default:
            dayCount =-1
        }
        if (dayCount == 29) {
            return `this mont has ${dayCount} days, ${year} adalah tahun kabisat`
        } else {
            return `this month has ${dayCount} hari`
        }
    }
}
console.log(getDays('a',2022))
console.log(getDays('2','year'))
console.log(getDays('m','year'))
console.log(getDays(2,2000))
console.log(getDays(8,2021))

