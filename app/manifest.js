export default function manifest() {
    return {
        name: 'jobhub world',
        short_name: 'jobhub',
        description: 'JobHub - Find the best jobs in Chandigarh, India. Post jobs, hire candidates, and manage recruitment with our employer & admin dashboard services.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/log.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
        categories: ['jobs', 'business', 'career', 'productivity', 'employment'],
    }
}