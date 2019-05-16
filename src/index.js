import React from 'react';
import ReactDOM from 'react-dom';
import NewsListItem from './newslistitem.jsx'
import NavBar from "./navbar.jsx"
import './index.css';



const App = () => {
    
    return (
        <div>
            <NavBar navbar={navbarItems}/>
            <NewsListItem feeds={news}/>
        </div>    
    )
}





const navbarItems = ["new","threads","comments","show","ask","jobs","submit"]


const news = [
    {
        id: 1,
        title: "Why I'm Suing the US Government",
        source: "bunniestudios.com",
        points: 1346,
        uploaded_at: "08-12-2014",
        comments: 257,
        user: "marksdd"
    },
    {
        id: 2,
        title: "Zeneizziiiznfff",
        source: "wikipedia.org",
        points: 140,
        uploaded_at: "04-01-2017",
        comments: 40,
        user: "vinchuco"
    },
    {
        id:3,
        title: "A Practical security guide for web developers",
        source: "github.com",
        points: 72,
        uploaded_at: "12-22-2014",
        comments: 6,
        user: "zianwar"
    },
    {
        id:4,
        title: "I got arrested in Kazhakhstan and represented myself in the court",
        source: "medium.com",
        points: 370,
        uploaded_at: "06-01-2019",
        comments: 79,
        user: "drpp"
    },
    {
        id:5,
        title: "Superformula",
        source: "wikipedia.org",
        points: 77,
        uploaded_at: "07-08-2018",
        comments: 31,
        user: "GuiA"
    },
    {
        id:6,
        title: "Scuplture of Housing Prices Ripping San Francisco Apart",
        source: "dougmccune.com",
        points: 254,
        uploaded_at: "03-12-2019",
        comments: 149,
        user: "dougmccune"
    }
]


ReactDOM.render(<App/>,document.querySelector('#root'))