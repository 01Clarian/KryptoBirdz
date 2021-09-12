import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import './FeaturedTiles.css';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
 
    paragraph: 'We are the KryptoBirdz - the underground anti-heroes of a not so distant dystopian galaxy. We are all caught in a shadow war of machines and birds, awake or asleep. Please help us save the meta-verse from the Evil Empire of Big Institutional Oblivion. We are 489x476 pixel art image files, generated with a combination of algorithms through node.js, human hand interference, and a secret square-to-pixel protocol. Most of us are your general variety of neo-noir pigeons, chickens, and vultures, but there are a few rarer types mixed in: vampires, body snatchers, and tiktok supernova-stars. Every K-Bird has their own profile page that shows our attributes as well as our ownership/for-sale status. Whether impossible or laughable, we continue to walk the path of birdz!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container ml-200">
        <h1 className='multicolortext2 text-center' style={{textAlign:'center'}}>Kryptopedia</h1>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content ml-200 " />
          <div className={tilesClasses}>
            
            <div className="multicolortext2" data-reveal-delay="400">
              <div>
                <div>
                  <div>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div>
                  <h2 className="multicolortext2" style={{fontSize:'40px'}}>
                    Featured Example:
                    </h2>
                    <div className='contained'> 
                  <nft-card 
                  style={{minWidth:'500', position:'relative'}}
                  contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e" 
                  tokenId="72448555997048199970373615651430281795522827893938176318660963930788413308929"> </nft-card>               
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;