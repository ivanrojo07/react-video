import React, { Fragment } from 'react'

import { connect } from 'react-redux';

import '../assets/styles/App.scss';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';

// const API = 'http://localhost:3000/initialState';

const Home = ({mylist, trends, originals})=>{
    // const videos = useInitialState(API,[])
    
    return (
        <Fragment>
            <Header />
            <div className="Home">
                <Search isHome={true}/>
                {
                    mylist && mylist.length > 0 &&  <Categories title={'Mi Lista'}>
                        <Carousel>
                            {
                                mylist.map((item)=>{
                                    return <CarouselItem delete={true} key={item.id} {...item} />
                                })
                            }
                        </Carousel>
                    </Categories>
                }

                {
                    trends && trends.length > 0 &&  <Categories title={'Tendencias'}>
                        <Carousel>
                            {
                                trends.map((item)=>{
                                    return <CarouselItem key={item.id} {...item} />
                                })
                            }
                        </Carousel>
                    </Categories>
                }

                {
                    originals && originals.length > 0 &&  <Categories title={'Originales de Platzi'}>
                        <Carousel>
                            {
                                originals.map((item)=>{
                                    return <CarouselItem key={item.id} {...item} />
                                })
                            }
                        </Carousel>
                    </Categories>
                }
            </div>
        </Fragment>
    )
}

// export default Home
const mapStateToProps = state=>{
    return {
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps,null)(Home);