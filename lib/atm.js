const fs = require('fs-extra')

const checkATMuser = (userId, _dir) => {
    let position = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _dir[position].uang
    }
}

const addATM = (userId, _dir) => {
    const obj = {id: userId, uang : 0}
    _dir.push(obj)
    fs.writeFileSync('./database/user/uang.json', JSON.stringify(_dir))
}

const addKoinUser = (userId, amount, _dir) => {
    let position = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].uang += amount;
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(_dir))
    }
}

module.exports = {
    checkATMuser,
    addATM,
    addKoinUser
}