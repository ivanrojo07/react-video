import React, { useState, useEffect } from 'react'
import '../assets/styles/App.scss';

import Search from '../components/Search';
import Header from '../components/Header'
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = ()=>{
    const videos = useInitialState(API,[])
    
    return (
        <div className="App">
            <Header />
            <Search />
            {
                videos.mylist && videos.mylist.length > 0 &&  <Categories title={'Mi Lista'}>
                    <Carousel>
                        {
                            videos.mylist.map((item)=>{
                                return <CarouselItem key={item.id} {...item} />
                            })
                        }
                    </Carousel>
                </Categories>
            }

            {
                videos.trends && videos.trends.length > 0 &&  <Categories title={'Tendencias'}>
                    <Carousel>
                        {
                            videos.trends.map((item)=>{
                                return <CarouselItem key={item.id} {...item} />
                            })
                        }
                    </Carousel>
                </Categories>
            }

            {
                videos.originals && videos.originals.length > 0 &&  <Categories title={'Originales de Platzi'}>
                    <Carousel>
                        {
                            videos.originals.map((item)=>{
                                return <CarouselItem key={item.id} {...item} />
                            })
                        }
                    </Carousel>
                </Categories>
            }
            <Footer />
        </div>
    )
}

export default App