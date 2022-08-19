export default function(req, res, next) {
  const redirects = [
    {
      from: "/solutions/fuse/", 
      to: "/solutions/fuse"
    },
    {
      from: "/solutions/line/", 
      to: "/solutions/line"
    },
    {
      from: "/solutions/kaikong/", 
      to: "/solutions/kaikong"
    },
    {
      from: "/solutions/beary/", 
      to: "/solutions/beary"
    },
    {
      from: "/solutions/akita/", 
      to: "/solutions/akita"
    },
    {
      from: "/solutions/shipmunk/", 
      to: "/solutions/shipmunk"
    },
    {
      from: "/solutions/oc2plus/", 
      to: "/solutions/oc2plus"
    },
  ]
  const redirect = redirects.find((r) => r.from === req.url)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}