import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Target from './target'
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'

import '../scss/product.scss';
import RenderPage from './components/render-page';

// const hash = window.location.hash.replace('#', '')
// const main = document.getElementById('main')
// main.innerHTML = 

// ReactDOM.render((
//   <RenderPage data={} />
// ), document.getElementById('main'))

ReactDOM.render((
  <Router>
    <Route path="target" compontent={Target}></Route>
  </Router>
), document.getElementById('main'))

ReactDOM.render(
  <Header />,
  document.getElementById('header')
)
// ReactDOM.render(
//   <Banner {...data.banner} />,
//   document.getElementById('banner')
// )
ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
)