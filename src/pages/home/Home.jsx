import React from 'react'
import Banner from '../../components/Banner'
import Record from '../../components/Record'
import PodcastTheme from '../../components/commoncomponents/PodcastTheme'
import PopularPodcast from '../../components/PopularPodcast'
import Pricing from '../../components/pricing/Pricing'
import Blog from '../blog/Blog'
import Reviews from '../reviews/Reviews'



const Home = () => {
  return (
    <>
     <Banner/>
     <Record/>
     <PodcastTheme/>
     <PopularPodcast/>
     <Pricing/>
     <Blog/>
     <Reviews/>
    </>
  )
}

export default Home