module.exports = {
     trailingSlash: true,
     swcMinify: false,
     async headers() {
          return [
            {
              source: "/api/:path*",
              headers: [
                {key: "Access-Control-Allow-Origin", value: "https://dev.nndym.org/,https://prod.nndym.org/"},
              ]
            }
          ]
     }
   //   images: {
   //    loader: 'cloudinary',
   //    path: 'https://res.cloudinary.com/nndym/image/upload/'
   //   },
  }