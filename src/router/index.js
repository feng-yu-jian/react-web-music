import React from 'react'
import { Redirect } from 'react-router-dom'

const FDiscover = React.lazy(() => import('@/pages/discover'))
const FRecommend = React.lazy(() => import('@/pages/discover/child-pages/recommend'))
const FToplist = React.lazy(() => import('@/pages/discover/child-pages/toplist'))
const FSongs = React.lazy(() => import('@/pages/discover/child-pages/songs'))
const FDjradio = React.lazy(() => import('@/pages/discover/child-pages/djradio'))
const FArtist = React.lazy(() => import('@/pages/discover/child-pages/artist'))
const FAlbum = React.lazy(() => import('@/pages/discover/child-pages/album'))

const FSongDetail = React.lazy(() => import('@/pages/player'))
const FFriend = React.lazy(() => import('@/pages/friend'))
const FMine = React.lazy(() => import('@/pages/mine'))

const FSearch = React.lazy(() => import('@/pages/search'))
const FSingle = React.lazy(() => import('@/pages/search/child-pages/single'))
const FSinger = React.lazy(() => import('@/pages/search/child-pages/singer'))
const FSearchAlbum = React.lazy(() => import('@/pages/search/child-pages/album'))

const F404 = React.lazy(() => import('@/pages/404'))


const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: '/discover',
    component: FDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: '/discover/recommend', component: FRecommend },
      { path: '/discover/ranking', component: FToplist },
      { path: '/discover/album', component: FAlbum },
      { path: '/discover/djradio', component: FDjradio },
      { path: '/discover/artist', component: FArtist },
      { path: '/discover/songs', component: FSongs },
      { path: '/discover/song', component: FSongDetail },
    ],
  },
  { path: '/mine', component: FMine },
  { path: '/friend', component: FFriend },
  {
    path: '/search',
    component: FSearch,
    routes: [
      {
        path: '/search',
        exact: true,
        render: () => <Redirect to="/search/single?song=&type=1" />,
      },
      { path: '/search/single', component: FSingle },
      { path: '/search/singer', component: FSinger },
      { path: '/search/album/', component: FSearchAlbum }
    ]
  },
  {
    path: '*',
    exact: true,
    component: F404
  }
]

export default routes
