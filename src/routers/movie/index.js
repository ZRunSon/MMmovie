export default {
    path: '/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : 'detail/1/:movieId',
            components : {
                default: ()=> import('@/components/NowPlaying'),
                detail : ()=> import('@/views/Movie/detail')
            },
            //如果没有写动态路由components，props:true就可以了
            props: {
                detail: true
            }
        },
        {
            path : 'detail/2/:movieId',
            components : {
                default: ()=> import('@/components/ComingSoon'),
                detail : ()=> import('@/views/Movie/detail')
            },
            //如果没有写动态路由components，props:true就可以了
            props: {
                detail: true
            }
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}