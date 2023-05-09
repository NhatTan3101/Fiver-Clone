import React from 'react';
import Featured from '../../components/featured/Featured';
import TrustesBy from '../../components/trustedBy/TrustesBy';
import Slide from '../../components/slide/Slide';
import { cards } from '../../data';
import Card from '../../components/card/Card';

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustesBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map(card => (
          <Card item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  )
}

export default Home