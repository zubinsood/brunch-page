// import React from 'react'

// function Featured() {
//   return (
//     <div className='full-card-container'>
//         <div className='featured-title'>Featured</div>
//         <div className='full-card'>
//             <div className='full-card-img'></div>
//             <div className='full-card-body'>
//                 <div className='full-card-body-title'>Davelle’s Original Uni Pasta</div>
//                 <div className='full-card-body-text'>An uni (sea urchin) lover’s heaven filled with umami. Limited quantity available daily!</div>
//                 <div className='full-card-body-button'>
//                     <div className='full-card-body-button-text'>Read More</div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Featured

import React from 'react';
import CardImage from './FeaturedCardImg';
import CardBody from './FeaturedCardBody';

interface FeaturedProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

function Featured({ title, description, buttonText, imageUrl }: FeaturedProps) {
  return (
    <div className='full-card-container'>
      <div className='featured-title'>Featured</div>
      <div className='full-card'>
        <CardImage imageUrl={imageUrl} title={title} />
        <CardBody title={title} description={description} buttonText={buttonText} />
      </div>
    </div>
  );
}

export default Featured;
