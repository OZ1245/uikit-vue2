import Vue from 'vue'
import CldNotice from './CldNotice'
const CldNoticeComponent = Vue.extend(CldNotice);

let $instance;

const Component = function (opt) {
  const options = Object.assign({
    position: opt.position || 'top-right',
    type: opt.type || 'neutral',
    title: opt.title || 'Сообщение',
    closeButton: opt.closeButton || true,
    message: opt.message || '',
    time: opt.time || 6000,
  })

  $instance = new CldNoticeComponent({
    data: options
  })

  $instance.$slots.default = options.message
  $instance.$mount()
  document.body.appendChild($instance.$el)
  $instance.cldNotice_isShow = true
}

Component.close = function () {
  $instance.cldNotice_isShow = false
}

export default Component