import React from "react";
import "./Portfolio.css";
import portfolioData from "./portfolioData";

const Portfolio = () => {
      return <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {
            portfolioData.map(({id, image, title, github, demo}) => {
              return (
                  <article className="portfolio__item" key={id}>
                    <div className="portfolio__item_image">
                      <img src={image} alt={`img${id}`}/>
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className="btn" rel="noopener">Github</a>
                      <a href={demo} className="btn btn-primary" rel="noopener">LiveDemo</a>
                    </div>
                  </article>
              );
            })
          }
        </div>
      </section>;
    }
;

export default Portfolio;
