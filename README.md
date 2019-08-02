# nuxt-izitoast

Nuxt module for the [iziToast](http://izitoast.marcelodolza.com/) notification library.

## Setup

Install nuxt-izitoast using npm

    npm install nuxt-izitoast

or yarn

    yarn add nuxt-izitoast

Add the module to your `nuxt.config.js`:

```js
{
  modules: [
    'nuxt-izitoast'    
  ]
}

```

You can provide global configuration to iziToast with the `izitoast` field in `nuxt.config.js`. For example:

```js
{
  izitoast: {
    position: 'bottomRight',
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
  }
}
```

## Usage

iziToast will be available as both `$izitoast` and `$notify` in your components.

```js
export default {
  name: 'my-component',
  mounted() {
    this.$notify.success({
      title: 'Hooray',
      message: 'I am using iziToast!'
    })
  }
}

```
