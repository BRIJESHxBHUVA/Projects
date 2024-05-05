import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';

export default class App extends Component {

   pageSize = 15;
   apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 10
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  render() {

    return (

      <div>

        <Router>
        
      
        <Navbar/>
        
        <LoadingBar
        color='#f11946'
        height='5px'
        progress={this.state.progress}
      />

        <Routes>
        
          <Route exact path='/' element={<Home setProgress={this.setProgress} key="Home" />}></Route>
          {/* <Route exact path='/' element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} apiKey={this.apiKey} country={'in'} category={'general'}/>}></Route> */}
          <Route exact path='/business' element={<News setProgress={this.setProgress}key="business" pageSize={this.pageSize} apiKey={this.apiKey} country={'in'} category={'business'}/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress}key="entertainment"pageSize={this.pageSize} apiKey={this.apiKey} country={'in'} category={'entertainment'}/>}></Route>
          <Route exact path='/general' element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} apiKey={this.apiKey} country={'in'} category={'general'}/>}></Route>
          <Route exact path='/health' element={<News setProgress={this.setProgress}key="health" pageSize={this.pageSize} apiKey={this.apiKey} country={'in'} category={'health'}/>}></Route>
          <Route exact path='/science' element={<News setProgress={this.setProgress}key="science" pageSize={this.pageSize} apiKey={this.apiKey} country={'in'} category={'science'}/>}></Route>
          <Route exact path='/sports' element={<News setProgress={this.setProgress}key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country={'in'} category={'sports'}/>}></Route>
          <Route exact path='/technology' element={<News setProgress={this.setProgress}key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country={'in'} category={'technology'}/>}></Route>


                {/* If you want to watch news with types of country */}

          {/* 1. USA */}

          <Route exact path='/' element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'general'}/>}></Route>
          <Route exact path='/USA' element={<News setProgress={this.setProgress}key="business" pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'business'}/>}></Route>
          <Route exact path='/USA' element={<News setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'entertainment'}/>}></Route>
          <Route exact path='/USA' element={<News setProgress={this.setProgress}key="health" pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'health'}/>}></Route>
          <Route exact path='/USA' element={<News setProgress={this.setProgress}key="science" pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'science'}/>}></Route>
          <Route exact path='/USA' element={<News setProgress={this.setProgress}key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'sports'}/>}></Route>
          <Route exact path='/USA' element={<News setProgress={this.setProgress}key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'technology'}/>}></Route>

          {/* 2. JAPAN */}

          <Route exact path='/JAPAN' element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} apiKey={this.apiKey} country={'jp'} category={'general'}/>}></Route>
          <Route exact path='/JAPAN' element={<News setProgress={this.setProgress}key="business" pageSize={this.pageSize} apiKey={this.apiKey} country={'jp'} category={'business'}/>}></Route>
          <Route exact path='/JAPAN' element={<News setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country={'jp'} category={'entertainment'}/>}></Route>
          <Route exact path='/JAPAN' element={<News setProgress={this.setProgress}key="health" pageSize={this.pageSize} apiKey={this.apiKey} country={'jp'} category={'health'}/>}></Route>
          <Route exact path='/JAPAN' element={<News setProgress={this.setProgress}key="science" pageSize={this.pageSize} apiKey={this.apiKey} country={'jp'} category={'science'}/>}></Route>
          <Route exact path='/JAPAN' element={<News setProgress={this.setProgress}key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country={'jp'} category={'sports'}/>}></Route>
          <Route exact path='/JAPAN' element={<News setProgress={this.setProgress}key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country={'jp'} category={'technology'}/>}></Route>
          
          
          {/* 2. AUSTRALIA */}
          

          <Route exact path='/AUSTRALIA' element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} apiKey={this.apiKey} country={'au'} category={'general'}/>}></Route>
          <Route exact path='/AUSTRALIA' element={<News setProgress={this.setProgress}key="business" pageSize={this.pageSize} apiKey={this.apiKey} country={'au'} category={'business'}/>}></Route>
          <Route exact path='/AUSTRALIA' element={<News setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country={'au'} category={'entertainment'}/>}></Route>
          <Route exact path='/AUSTRALIA' element={<News setProgress={this.setProgress}key="health" pageSize={this.pageSize} apiKey={this.apiKey} country={'au'} category={'health'}/>}></Route>
          <Route exact path='/AUSTRALIA' element={<News setProgress={this.setProgress}key="science" pageSize={this.pageSize} apiKey={this.apiKey} country={'au'} category={'science'}/>}></Route>
          <Route exact path='/AUSTRALIA' element={<News setProgress={this.setProgress}key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country={'au'} category={'sports'}/>}></Route>
          <Route exact path='/AUSTRALIA' element={<News setProgress={this.setProgress}key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country={'au'} category={'technology'}/>}></Route> 


        {/* 2. CANADA */}


          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} apiKey={this.apiKey} country={'ca'} category={'general'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="business" pageSize={this.pageSize} apiKey={this.apiKey} country={'ca'} category={'business'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country={'ca'} category={'entertainment'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="health" pageSize={this.pageSize} apiKey={this.apiKey} country={'ca'} category={'health'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="science" pageSize={this.pageSize} apiKey={this.apiKey} country={'ca'} category={'science'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country={'ca'} category={'sports'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country={'ca'} category={'technology'}/>}></Route> 
          


        {/* 2. RUSSIA */}

          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} apiKey={this.apiKey} country={'ru'} category={'general'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="business" pageSize={this.pageSize} apiKey={this.apiKey} country={'ru'} category={'business'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country={'ru'} category={'entertainment'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="health" pageSize={this.pageSize} apiKey={this.apiKey} country={'ru'} category={'health'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="science" pageSize={this.pageSize} apiKey={this.apiKey} country={'ru'} category={'science'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country={'ru'} category={'sports'}/>}></Route>
          <Route exact path='/CANADA' element={<News setProgress={this.setProgress}key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country={'ru'} category={'technology'}/>}></Route> 


          </Routes>

        </Router>


      </div>
    )
  }
}

