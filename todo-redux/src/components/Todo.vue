<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>The time is now: {{`${hours}:${minutes}:${seconds}`}}</h2>
  </div>
</template>

<script>
import { padd } from '@/filters/ZeroPadding'

export default {
  name: 'TODO',
  data () {
    return {
      msg: 'TODO App',
      now: Date.now(),
      hours: '',
      minutes: '',
      seconds: ''
    }
  },
  mounted () {
    setInterval(this.update, 1000)
  },
  methods: {
    update () {
      let now = new Date()
      this.now = now
      this.hours = now.getHours()
      this.minutes = padd(now.getMinutes())
      this.seconds = padd(now.getSeconds())
      this.hours = this.hours % 12 || 12
    }
  }
}
</script>