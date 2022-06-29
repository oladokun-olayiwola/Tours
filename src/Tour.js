import React from 'react';

const Tour = ({tours, setTours}) => {
  const [readMore, setReadMore] = React.useState(false);

  const render = tours.map((tour) => {
      const {image, info, id, name, price} = tour
        const remove = (id) => {
          const newTours = tours.filter((tour) => tour.id !== id);
          setTours(newTours);
        };
        return (
          <>
            <article className="single-tour" key={id}>
              <img src={image} alt={name} />
              <footer>
                <div className="tour-info">
                  <h4>{name}</h4>
                  <h4 className="tour-price">${price}</h4>
                </div>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? "show less" : "  read more"}
                </button>
                <button className="delete-btn" onClick={() => remove(id)}>
                  not interested
                </button>
              </footer>
            </article>
          </>
        );
      })
  
  return <div>{render}</div>

    }

export default Tour;
