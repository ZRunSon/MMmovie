export default {
    path: '/cinema',
    component : () => import('@/views/Cinema'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
    ]
}