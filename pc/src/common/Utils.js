export default {
    /**
     * 判断数值是否存在
     * @param val
     * @returns {boolean}
     */
    isEmpty(val) {
        return val === null || typeof val === 'undefined' || val === '';
    },
    /**
     * 本地数据操作
     * @param key
     * @param value
     */
    data(key, value) {
        let getItemValue = () => {
            let data = localStorage.getItem(key);
            try {
                data = JSON.parse(data);
            } catch (e) {
                console.log(e);
            }
            return data;
        };
        if (key && typeof value === 'undefined') {
            return getItemValue();
        }
        switch (toString.call(value)) {
            case '[object Undefined]':
                return getItemValue();
            case '[object Null]':
                localStorage.removeItem(key);
                break;
            default:
                localStorage.setItem(key, JSON.stringify(value));
                break;
        }
    }
}