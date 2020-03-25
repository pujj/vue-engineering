import NewsInfo from '@/views/news/news-info'

const newsRouter = [
  {
    path: '/news/:id',
    component: NewsInfo,
    name: 'newsInfo'
  }
]

export default newsRouter
