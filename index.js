function numberWithCommas(x) {
    //对右侧人口数字的格式化处理，三位数字用一个','(逗号)隔开
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
console.log(numberWithCommas(12345678)) //12,345,678