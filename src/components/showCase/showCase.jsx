import React from 'react'
import { Cards } from "../data/Cards"
import NewPost from '../NewPost/NewPost';
export default function ShowCase() {
  return (
    <div>
        {
    Cards.map((card) =>(
        <NewPost item={card} key={card.id}/>

    ))
};

    </div>
  )
}
