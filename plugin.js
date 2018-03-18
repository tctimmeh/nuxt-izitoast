import izitoast from 'izitoast'

export default function (ctx, inject, c, d) {
  izitoast.settings(<%= serialize(options) %>)
  inject('izitoast', izitoast)
  inject('notify', izitoast)
}
