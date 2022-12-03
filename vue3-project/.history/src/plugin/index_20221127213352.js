export default {
    install: (app, options) => {
        // 注入一个全局可用的 $translate() 方法
        app.config.globalProperties.$millimeterTransfer = (num) => {
            const judge = Object.prototype.toString.call(num).slice(8, -1).toLowerCase()
            if (!/^[1-9][0-9]*$/.test(num) || judge !== 'number') {
                return '数据格式不正确'
            }
            const reg = /\d{1,3}(?=(\d{3})+$)/g;
            return (num + '').replace(reg, '$&,');
        }
    }
}