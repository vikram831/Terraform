window.acceleratedDataQueue = window.acceleratedDataQueue || [];
window.acceleratedDataQueue.push({
'ACC_YG_Cart_11': {
redirectCart:function(){
let self=this;
document.querySelector('#boost-cart-app')?.remove();
window.location.href="/cart";
},
init() {
let self=this;

self.runAt("button.boost-collections__cart-trigger",function([target]){
if(!target) return;
target.addEventListener("click",function(e){
e.preventDefault();
window.location.href="/cart";
})
})

self.runAt("#boost-cart-app",function([target]){
if(!target) return;
document.querySelector('#boost-cart-app')?.remove();

document.querySelectorAll('a[href="/cart"]').forEach(function(elm) {
elm.removeAttribute('href');
elm.onclick = function(event) {
event.preventDefault();
window.location.href="/cart";
return false; 
};
});

})

function perfObserver(list, observer, options) {
list.getEntries().forEach((entry) => {
if (/^https:\/\/www\.yagcho\.de\/cart\/add\.js(\?boost=1)?$/.test(entry.name)) {self.redirectCart();}

});

}

const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });



}
}
});