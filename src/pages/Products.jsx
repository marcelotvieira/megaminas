// /* eslint-disable react/no-array-index-key */
// /* eslint-disable react/prefer-stateless-function */
// import React, { Component } from 'react';
// import { categorys } from '../data/data';

// export default class Products extends Component {
//   render() {
//     const categoryCardEl = categorys.map((cat, index) => (
//       <div className="category-card" key={index}>
//         <img src={cat.thumbnail} alt="" />
//         <h3>{cat.name}</h3>
//         <button type="button">
//           <a href={cat.sourceCatalog} download>Download</a>
//         </button>
//       </div>
//     ));

//     return (
//       <div className="products-page">
//         <div className="page-container">
//           <h2>Conheça nossos catálogos de produtos:</h2>
//           <div className="category-list">
//             { categoryCardEl }
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
