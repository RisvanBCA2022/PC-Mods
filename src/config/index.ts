export const PRODUCT_CATEGORIES = [
    {
        label:"Pre-builds",
        value:"pre-build-pc" as const,
        featured:[
            {
                name:"Entry Level",
                href:"#",
                imageSrc:'/nav/Pc-collection/entrylevel.jpg'
            },
            {
                name:"Mid Range Pc's",
                href:"#",
                imageSrc:'/nav/Pc-collection/midrange.jpg'
            },
            {
                name:"High-End Pcs",
                href:"#",
                imageSrc:'/nav/Pc-collection/highend.jpg'
            },
            
        ]
    },
    {
        label:"Top Rated",
        value:"Top Rated" as const,
        featured:[
            {
                name:"Trending",
                href:"#",
                imageSrc:'/nav/Top-rated/trending.png'
            },
            {
                name:"Bang for bucks",
                href:"#",
                imageSrc:'/nav/Top-rated/budget.jpg'
            },
            {
                name:"High End for Productivity",
                href:"#",
                imageSrc:'/nav/Top-rated/highend.webp'
            },
            
        ]
    }
]