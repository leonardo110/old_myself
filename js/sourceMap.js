// 在控制台中临时添加调试代码
// 1. 设置全局错误捕获
window.addEventListener('error', (e) => {
    console.log('错误发生在:', e.filename, '行号:', e.lineno, '列号:', e.colno);
});

// 2. 重写 console 方法添加时间戳
const originalConsole = {...console};
console.log = (...args) => {
    originalConsole.log(`[${new Date().toISOString()}]`, ...args);
};