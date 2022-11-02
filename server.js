// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      if (pathname === '/') {
        await app.render(req, res, '/', query)
      }
      else if (pathname === '/services') {
        await app.render(req, res, '/services/', query)
      }
      else if (pathname === '/heating-services') {
        await app.render(req, res, '/heating-services/', query)
      }
      else if (pathname === '/air-conditioning-servic/') {
        await app.render(req, res, '/air-conditioning-service/', query)
      }
      else if (pathname === '/commercial-hvac') {
        await app.render(req, res, '/commercial-hvac/', query)
      }
      else if (pathname === '/boilers') {
        await app.render(req, res, '/boilers/', query)
      }
      else if (pathname === '/boilers-maintenance') {
        await app.render(req, res, '/boilers-maintenance/', query)
      }
      else if (pathname === '/boilers-installation') {
        await app.render(req, res, '/boilers-installation/', query)
      }
      else if (pathname === '/boilers-repair') {
        await app.render(req, res, '/boilers-repair/', query)
      }
      else if (pathname === '/boilers-service') {
        await app.render(req, res, '/boilers-service/', query)
      }
      else if (pathname === '/tankless-water-heaters') {
        await app.render(req, res, '/tankless-water-heaters/', query)
      }
      else if (pathname === '/rebates-and-promotions') {
        await app.render(req, res, '/rebates-and-promotions/', query)
      }
      else if (pathname === '/emergency') {
        await app.render(req, res, '/emergency/', query)
      }
      else if (pathname === '/lennox-hvac') {
        await app.render(req, res, '/lennox-hvac/', query)
      }
      else if (pathname === '/financing-option') {
        await app.render(req, res, '/financing-option/', query)
      }
      else if (pathname === '/furnace-inspection') {
        await app.render(req, res, '/furnace-inspection/', query)
      }
      else if (pathname === '/service-areas') {
        await app.render(req, res, '/service-areas/', query)
      }
      else if (pathname === '/vancouver') {
        await app.render(req, res, '/vancouver/', query)
      }
      else if (pathname === '/burnaby') {
        await app.render(req, res, '/burnaby/', query)
      }
      else if (pathname === '/west-vancouver') {
        await app.render(req, res, '/west-vancouver/', query)
      }
      else if (pathname === '/north-vancouver') {
        await app.render(req, res, '/north-vancouver/', query)
      }
      else if (pathname === '/coquitlam') {
        await app.render(req, res, '/coquitlam/', query)
      }
      else if (pathname === '/richmond') {
        await app.render(req, res, '/richmond/', query)
      }
      else if (pathname === '/white-rock') {
        await app.render(req, res, '/white-rock/', query)
      }
      else if (pathname === '/tsawwassen') {
        await app.render(req, res, '/tsawwassen/', query)
      }
      else if (pathname === '/port-moody') {
        await app.render(req, res, '/port-moody/', query)
      }
      else if (pathname === '/pitt-meadows') {
        await app.render(req, res, '/pitt-meadows/', query)
      }
      else if (pathname === '/new-westminster') {
        await app.render(req, res, '/new-westminster/', query)
      }
      else if (pathname === '/maple-ridge') {
        await app.render(req, res, '/maple-ridge/', query)
      }
      else if (pathname === '/about-us') {
        await app.render(req, res, '/about-us/', query)
      }
      else if (pathname === '/write-a-review') {
        await app.render(req, res, '/write-a-review/', query)
      }
      else if (pathname === '/careers') {
        await app.render(req, res, '/careers/', query)
      }
      else if (pathname === '/brand') {
        await app.render(req, res, '/brand/', query)
      }
      else if (pathname === '/covid-19') {
        await app.render(req, res, '/covid-19/', query)
      }
      else if (pathname === '/lennox') {
        await app.render(req, res, '/lennox/', query)
      }
      else if (pathname === '/carrier') {
        await app.render(req, res, '/carrier/', query)
      }
      else if (pathname === '/trane') {
        await app.render(req, res, '/trane/', query)
      }
      else if (pathname === '/amana') {
        await app.render(req, res, '/amana/', query)
      }
      else if (pathname === '/bryant') {
        await app.render(req, res, '/bryant/', query)
      }
      else if (pathname === '/goodman') {
        await app.render(req, res, '/goodman/', query)
      }
      else if (pathname === '/american-standard') {
        await app.render(req, res, '/american-standard/', query)
      }
      else if (pathname === '/ameristar') {
        await app.render(req, res, '/ameristar/', query)
      }
      else if (pathname === '/aire-flo') {
        await app.render(req, res, '/aire-flo/', query)
      }
      else if (pathname === '/keeprite') {
        await app.render(req, res, '/keeprite/', query)
      }
      else if (pathname === '/daikin') {
        await app.render(req, res, '/daikin/', query)
      }
      else if (pathname === '/payne') {
        await app.render(req, res, '/payne/', query)
      }
      else if (pathname === '/coleman') {
        await app.render(req, res, '/coleman/', query)
      }
      else if (pathname === '/rinnai') {
        await app.render(req, res, '/rinnai/', query)
      }
      else if (pathname === '/viessmann') {
        await app.render(req, res, '/viessmann/', query)
      }
      else if (pathname === '/york-brand') {
        await app.render(req, res, '/york-brand/', query)
      }
      else if (pathname === '/navien') {
        await app.render(req, res, '/navien/', query)
      }
      else if (pathname === '/maytag-hvac') {
        await app.render(req, res, '/maytag-hvac/', query)
      }
      else if (pathname === '/luxaire') {
        await app.render(req, res, '/luxaire/', query)
      }
      else if (pathname === '/comfortmaker') {
        await app.render(req, res, '/comfortmaker/', query)
      }
      else if (pathname === '/arcoaire') {
        await app.render(req, res, '/arcoaire/', query)
      }
      else if (pathname === '/tempstar') {
        await app.render(req, res, '/tempstar/', query)
      }
      else if (pathname === '/heil-hvac') {
        await app.render(req, res, '/heil-hvac/', query)
      }
      else if (pathname === '/day-and-night-hvac') {
        await app.render(req, res, '/day-and-night-hvac/', query)
      }
      else if (pathname === '/armstrong') {
        await app.render(req, res, '/armstrong/', query)
      }
      else if (pathname === '/concord-air') {
        await app.render(req, res, '/concord-air/', query)
      }
      else if (pathname === '/frigidaire') {
        await app.render(req, res, '/frigidaire/', query)
      }
      else if (pathname === '/kenmore') {
        await app.render(req, res, '/kenmore/', query)
      }
      else if (pathname === '/contact-us') {
        await app.render(req, res, '/contact-us/', query)
      }
      else if (pathname === '/faq') {
        await app.render(req, res, '/faq/', query)
      }
      else if (pathname === '/privacy-policy') {
        await app.render(req, res, '/privacy-policy/', query)
      }
      else if (pathname === '/terms-of-service') {
        await app.render(req, res, '/terms-of-service/', query)
      }
      else if (pathname === '/blog') {
        await app.render(req, res, '/blog/', query)
      }
      else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})