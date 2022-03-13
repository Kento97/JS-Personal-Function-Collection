const res = {
    code: 0,
    msg: 'success',
    data: {
        config: {
            style: {
                color: 'red'
            }
        },
        dataConfig: {
            x: 'tom',
            y: 11
        }
    }
}

const safeGet = (obj, path) => {
    const keys = path.split('.')
    keys.forEach((item) => {
        if (obj) {
            obj = obj[item];
        }
    })
    return obj;
}
safeGet(res, 'data.config.style.color')