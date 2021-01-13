import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import data from './data'
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from "../components/footer"
import RenderPage from '../components/render-page'


ReactDOM.render(
  <RenderPage data={data} />,
  document.getElementById('main')
)
ReactDOM.render(
  <Header />,
  document.getElementById('header')
)
ReactDOM.render(
  <Banner {...data.banner} />,
  document.getElementById('banner')
)
ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
)