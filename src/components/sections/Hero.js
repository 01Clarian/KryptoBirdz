import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import './FeaturedTiles.css';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-md">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom multicolortext" style={{fontSize:'60px'}} data-reveal-delay="200">
              KryptoBirdz
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              The KryptoBirdz are an NFT space opera satire of 500 uniquely algorithmically generated collectibles. 
              There are only one of each bird, and each one of them can be uniquely owned by one single person or secret entity on the Ethereum blockchain. 
              The project was created as a joke by developer Clarian.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
              </div>
            </div>
          </div>
          <div className="hero-figure" data-reveal-value="20px" data-reveal-delay="800">
        <iframe style={{marginLeft:'-5px'}} src='https://opensea.io/collection/kryptobirdz-official?embed=true%22'
        width='90%'
        height='800px'
        frameBorder='10'
        AllowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;