export default (_, inject) => {
    inject('headUtil', data =>
        ({
            titleTemplate: '%s | Sellsuki',
            title: data.title || 'Home',
            htmlAttrs: {
            lang: data.lang,
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'keywords', content: ['Sellsuki', 'Solution', 'โฆษณาออนไลน์', 'วางแผนคอนเทนต์', 'ออกแบบเว็บไซต์' , 'คลังสินค้าครบวงจร'] },
                { 
                    hid: 'description', 
                    name: 'description', 
                    content: data.description || 'Sellsuki บริการ Solution ครบวงจรสำหรับคนทำธุรกิจออนไลน์ โฆษณาออนไลน์ วางแผนคอนเทนต์ ออกแบบเว็บไซต์ และคลังสินค้าครบวงจร'
                },
                { 
                    hid: 'og-site_name', 
                    property: 'og:site_name', 
                    name: 'og:site_name', 
                    content: data.site_name || 'Sellsuki'
                },
                { 
                    hid: 'og-title', 
                    property: 'og:title', 
                    name: 'og:title', 
                    content: data.title || 'Home'
                },
                { 
                    hid: 'og-description', 
                    property: 'og:description', 
                    name: 'og:description', 
                    content: data.description || 'Sellsuki บริการ Solution ครบวงจรสำหรับคนทำธุรกิจออนไลน์ โฆษณาออนไลน์ วางแผนคอนเทนต์ ออกแบบเว็บไซต์ และคลังสินค้าครบวงจร'
                },
                { 
                    hid: 'og-image', 
                    property: 'og:image', 
                    name: 'og:image', 
                    content: data.illustration || '	https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Home_826a845399.webp'
                },
                { 
                    hid: 'og-url', 
                    property: 'og:url', 
                    name: 'og:url', 
                    content: data.url || 'https://staging-sellsuki.bearyweb.com'
                }

            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            script: [
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
                async: true,
                crossorigin: "anonymous"
            }
            ]
        })
    )
}