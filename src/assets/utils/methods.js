//时间方法
export const dateTransform = (e) => {
    let d = new Date(e)
     
    let Y = d.getFullYear()
    let M = d.getMonth() + 1
    let D = d.getDate()
    if (D < 10) {
        D = '0' + D
    }
    if (M < 10) {
        M = '0' + M
    }
    let date = Y + '.' + M + '.' + D
    return date
}
//时间方法
export const getObjectURL = (file) => {
    var url = null
    if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file)
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file)
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file)
    }
    return url
}