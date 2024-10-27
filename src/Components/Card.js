import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="cardContainer">
      {data?.map((curItem, index) =>
        curItem.urlToImage ? (
          <div key={index} className="card">
            <img src={curItem.urlToImage} alt={curItem.title} />
            <div className="content">
              <span className="title" onClick={() => readMore(curItem.url)}>
                {curItem.title}
              </span>
              <p>{curItem.description}</p>
              <button onClick={() => readMore(curItem.url)}>Read More</button>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Card;
