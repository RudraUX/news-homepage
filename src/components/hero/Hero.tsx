import styled from 'styled-components';
import HeroImage from '../../assets/images/image-web-3-desktop.jpg';
const HeroSection = styled.div`
  display: flex;
  margin: 3rem 0;
  img {
    height: 22rem;
    width: 55rem;
  }
  .hero-section-1 {
    .hero-section-fact {
      display: flex;
      width: 55rem;
      gap: 7rem;
      margin-top: 2rem;
      text-align: left;
    }
    h1 {
      font-size: 4.4rem;
      color: var(--VeryDarkBlue);
      line-height: 1;
    }
    p {
      font-size: 1rem;
      color: var(--DarkGrayishBlue);
      line-height: 1.6;
      width: 21rem;
      max-width: 100%;
      margin-bottom: 4rem;
    }

    a {
      height: 3rem;
      width: 5rem;
      background-color: var(--VeryDarkBlue);
      padding: 1.5rem 3rem;
      color: var(--OffWhite);
      font-weight: 700;
      letter-spacing: 0.4rem;
      &:hover {
        background-color: var(--SoftRed);
      }
    }
  }
  .hero-section-2 {
    margin-left: 2rem;
    padding: 2rem 2rem;
    background-color: var(--VeryDarkBlue);
    width: 29%;
    height: 40rem;
    h1 {
      color: var(--SoftOrange);
      margin-bottom: 2rem;
    }
    .hero-section-info h3 {
      color: var(--OffWhite);
      margin-bottom: 1rem;
      &:hover {
        color: var(--SoftOrange);
      }
    }

    .hero-section-info:not(:last-child) {
      margin-bottom: 3rem;
      padding-bottom: 4rem;
      border-bottom: 1px solid var(--GrayishBlue);
    }

    .hero-section-info p {
      color: var(--GrayishBlue);
      font-size: 15px;
      line-height: 1.5;
    }
  }
`;

function Hero() {
  return (
    <HeroSection>
      <>
        <div className='hero-section-1'>
          <img src={HeroImage} alt='Hero Image ' />
          <div className='hero-section-fact'>
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <a href='#'>READ MORE</a>
            </div>
          </div>
        </div>
        <div className='hero-section-2'>
          <h1>New</h1>
          <div className='hero-section-info'>
            <a href='#'>
              <h3>Hydrogen Vs Electric ars</h3>
            </a>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className='hero-section-info'>
            <a href='#'>
              <h3>The Downsides of AI Artistry</h3>
            </a>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className='hero-section-info'>
            <a href='#'>
              <h3>Is VC Funding Drying Up?</h3>
            </a>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </>
    </HeroSection>
  );
}

export default Hero;
