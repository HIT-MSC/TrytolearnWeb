//如何解决因为闭包导致的内存泄漏
// 方法1 不使用'el',用 this 代替
function addHandler() {
    document.getElementById('el').onclick = function() {
        this.style.backgroundColor = 'red';
    };
}
//方法二 
//解决因闭包而引入的循环引用，添加另外一个闭包：
function addHandler() {
    var clickHandler = function() {
        this.style.backgroundColor = 'red';
    };
    (function() {
        var el = document.getElementById('el');
        el.onclick = clickHandler;
    })();
}