import Vue from 'vue'
import Main from './Loading.vue'

let LoadingConstructor = Vue.extend(Main)

let instance
const Loading = function (options) {
  options = options || {}
  instance = new LoadingConstructor({
    data: options
  })


  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.overlay = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = 10000
  return instance.vm
}
Loading.close = function () {
  if (instance) {
    instance.close();
  }
}

export default Loading