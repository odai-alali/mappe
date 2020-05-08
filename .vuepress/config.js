module.exports={
    title: 'Mappe',
    base: '/mappe/',
    description: 'Mappe',
    themeConfig: {
        nav:[
            {text: 'Home', link:'/'},
            {text: 'Guide', link:'/guide/'},
        ],
        sidebar: {
            '/guide/': [
                '',
                'First_Project',
                'Second_Project'
            ]
        }

    }
}