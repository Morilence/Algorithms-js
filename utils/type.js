function isNum(target) {
    return typeof target != "number" ? false : isNaN(target) ? false : true;
}

function isArray(target) {
    return Object.prototype.toString.call(target) == "[object Array]";
}

module.exports = {
    isNum,
    isArray,
};
