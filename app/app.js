// dependencies
import Koa from '@uswitch/koa-core'
import Proxy from 'koa-proxies'
const { app, meters, signal } = Koa(
  /*{prometheusConf : [
  // Binance API weight
  { 
    "name": "weight_used_1m",
    "help": "Binance API weight used (over the last minute)",
    "type": "Gauge"
  }
]}*/
)
const proxy = Proxy('/', {
  target: 'https://www.binance.com',    
  changeOrigin: true
})

// middleware
app.use(proxy)

//meters.weight_used_1m.set(800)

app.listen(8888, () => signal.start("Listening on port 8888"))