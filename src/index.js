import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import Card from './components/Card';
import Header from './components/Header';
import Home from './components/Home';



ReactDOM.render(
<> 
<Header />
<Home />

<div className='cards-container'>
<Card name="sabit" jobTitle="CSE"/>
<Card name="badal" jobTitle="CSE" />
<Card name ="pritam" jobTitle="CSE"/>
<Card name="siba"jobTitle="CSE"/>

</div>
</>


,document.getElementById('root'));


