let izitoast
if (process.client) {
  izitoast = require('izitoast')
}
else {
  const noop = () => {}
  izitoast = {
    destroy: noop,
    error: noop,
    hide: noop,
    info: noop,
    progress: noop,
    question: noop,
    settings: noop,
    show: noop,
    success: noop,
    warning: noop,
  }
}

export default function (ctx, inject, c, d) {
  izitoast.settings(<%= serialize(options) %>)
  inject('izitoast', izitoast)
  inject('notify', izitoast)
}
