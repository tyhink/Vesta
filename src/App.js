import house from './images/smart_house.svg';
import moving from './images/family-moving-in.jpg';
import investor from './images/illustrations/investing.svg';
import logo1 from './images/partners/AI.png';
import logo2 from './images/partners/01_colorhex.png';
import logo3 from './images/partners/ADUCATION-AI-CS6.png';
import logo4 from './images/partners/Labyrinth-Brain-Logo.png';
import logo5 from './images/partners/PROTECTHOUSE-AI-CS6.png';
import logo6 from './images/partners/Triangle-color.png';
import investHouse from './images/icon-badges/house-invest-1.svg';
import smartHome from './images/icon-badges/smart-home.svg';
import integratedHome from './images/icon-badges/integrated-home.svg';
import invReturn from './images/icon-badges/investment-return.svg';
import invTransfer from './images/icon-badges/fund-transfer.svg';
import homeOwner from './images/icon-badges/home-ownership.svg';

import './App.css';
import {useRef, useState, useEffect} from "react";

function App() {
    const app = useRef(null);
    const [header, setHeader] = useState(false);

    const handleHeaderOnScroll = () => {
        if (window.scrollY > 748) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    window.addEventListener('scroll', handleHeaderOnScroll);

    return (
        <div className="App" ref={app}>
            <header className={header ? 'site-header scrolled' : 'site-header'}>
                <div className={header ? 'logo scrolled' : 'logo'}>
                    <svg version="1.1"
                         id="Layer_1"
                         x="0px"
                         y="0px"
                         viewBox="0 0 1024 1024"
                         >

                        <polygon
                            fill={'none'}
                            stroke={'#ffffff'}
                            strokeWidth={80}
                            strokeMiterlimit={10}
                            points="953,346.764 512.196,79.927 71.392,346.764 71.392,347.255 71.392,926 953,926 953,347.255 "/>
                        <path
                            fill={'none'}
                            stroke={'#ffffff'}
                            strokeWidth={80}
                            strokeMiterlimit={10}
                            d="M247.653,489.361c0,0,172.751,257.086,261.167,257.086s267.918-257.086,267.918-257.086"/>
                    </svg>
                    <span>
                        VESTA
                    </span>
                </div>

                <div className="visitor-menu">
                  <div className="page-links">
                    <ul className="site-links">
                      <li className="site-link">
                          Start Living
                      </li>
                      <li className="site-link">
                          Start Investing
                      </li>
                    </ul>
                  </div>
                  <div className="investor-btn">
                    <span>Login</span>
                      <span className="avatar">
                          <i className="fas fa-user fa-fw"></i>
                      </span>
                  </div>
                </div>
          </header>
      <section className="hero-welcome-section">
          <div className="welcome-image-overlay">
            <div className="hero-copy-wrapper">
                <div className="tag-line">
                    <h1>Vesta. Live Easy.</h1>
                </div>
                <div className="hero-search-container">
                    <input type="search"
                           className="hero-search form-field"
                           placeholder={'Search for a new place to live or invest...'}
                    />
                    <div className="form-field">
                        <label htmlFor="br">Bedrooms</label>
                        <select name="bedrooms" id="br" className={'hero-select'}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">4+</option>
                        </select>
                    </div>

                    <div className="form-field">
                        <label htmlFor="bath">Bathrooms</label>
                        <select name="baths" id="bath" className={'hero-select'}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">4+</option>
                        </select>

                    </div>

                    <div className="form-field">
                        <label htmlFor="minRent">Min Rent</label>
                        <input type="text" className={'hero-search-input'} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="maxRent">Max Rent</label>
                        <input type="text" className={'hero-search-input'} />
                    </div>
                    <button className={'hero-search-btn btn btn-primary'}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
          </div>
      </section>
      <section className="renters">
          <div className="renters-marketing">
              <div className="rent-taglines">
                  <h2 className="text-center">What Makes Living in a Vesta Home so Easy?</h2>
              </div>
              <div className="renters-left">
                  <div className="rent-copy">
                      <div className="rent-benefits">
                          <div className="benefit">
                              <i className="fas fa-piggy-bank fa-fw"></i>
                              You're not just a resident but an investor
                          </div>
                          <div className="benefit">
                              <i className="fas fa-hand-holding-water fa-fw"></i>
                              Easily set up utilities and smart home features
                          </div>
                          <div className="benefit">
                              <i className="fas fa-gem fa-fw"></i>
                              The comfort of home. The luxury of a hotel
                          </div>
                          <div className="benefit">
                              <i className="fas fa-digital-tachograph fa-fw"></i>
                              Tech enabled and tailored to you
                          </div>
                          <div className="benefit">
                              <i className="fas fa-network-wired fa-fw"></i>
                              Locally inspired. Locally wired
                          </div>
                          <div className="benefit">
                              <i className="fas fa-landmark fa-fw"></i>
                                Easily connect with your local community
                          </div>
                      </div>
                  </div>
              </div>
              <div className="renters-right">
                  <img className='renters-illustration' src={house}/>
              </div>
          </div>
          <div className="reasons-cards">
              <div className="reason-card">
                  <div className="reason-badge">
                      <img src={investHouse} alt="real estate investment service"/>
                  </div>
                  <h4 className="text-center">At Your Service. At Your Fingertips.</h4>
                  <p className="reason-copy text-center">
                      Sit back and relax, and let Vesta’s digital concierge set you up with
                      conveniences from maid service, to dry cleaning pickup, to care for
                      your furry friends.
                  </p>
              </div>
              <div className="reason-card">
                  <div className="reason-badge">
                      <img src={smartHome} alt="real estate investment service"/>
                  </div>
                  <h4 className='text-center'>Tech Enabled and Tailored to You.</h4>
                  <p className="reason-copy text-center">
                      Every home is designed with purpose and powered by smart technology.
                      Unlock your door, control the thermostat and use home automation to
                      make life a breeze.
                  </p>
              </div>
              <div className="reason-card">
                  <div className="reason-badge">
                      <img src={integratedHome} alt="real estate investment service"/>
                  </div>
                  <h4 className='text-center'>An Integrative Approach to Home.</h4>
                  <p className="reason-copy text-center">
                      Home internet, security, utilities and everything you need, setup from
                      day one - you start enjoying your home, we’ll handle the rest.
                  </p>
              </div>
          </div>
          <div className="browse-homes">
              <div className="browse-header">
                  <h3>Browse Homes</h3>
                  <span className="view-more">
                      View More
                      <i className="fas fa-arrow-right"></i>
                  </span>
              </div>
              <div className="rental-cards">
                  <div className="rental-card">
                      <div className="card-hero prop-one">
                          <div className="hero-overlay">
                              <div className="prop-address">
                                  <i className="fas fa-map-marker-alt"></i>
                                  1534 Post Oak rd. Austin, TX 75200
                              </div>
                          </div>
                      </div>
                      <div className="card-copy">
                          <div className="bed-rooms">
                              <i className="fas fa-home">&nbsp;</i>
                              4 bedrooms
                          </div>
                          <div className="baths">
                              <i className="fas fa-bath">&nbsp;</i>
                              3 baths
                          </div>
                          <div className="area">
                              <i className="fas fa-th-large">&nbsp;</i>
                              2,891 sqft.
                          </div>
                          <div className="lot-size">
                              <i className="fas fa-th">&nbsp;</i>
                              .29 acre
                          </div>
                          <div className="monthly-rent">
                              $2,950 per month
                          </div>
                      </div>
                      <div className="card-footer">
                          <div className="tag">Single Family</div>
                      </div>
                  </div>
                  <div className="rental-card">
                      <div className="card-hero prop-two">
                          <div className="hero-overlay">
                              <div className="prop-address">
                                  <i className="fas fa-map-marker-alt"></i>
                                  1207 Wildwood dr. San Diego, CA 90876
                              </div>
                          </div>
                      </div>
                      <div className="card-copy">
                          <div className="bed-rooms">
                              <i className="fas fa-home">&nbsp;</i>
                              4 bedrooms
                          </div>
                          <div className="baths">
                              <i className="fas fa-bath">&nbsp;</i>
                              3 baths
                          </div>
                          <div className="area">
                              <i className="fas fa-th-large">&nbsp;</i>
                              2,675 sqft.
                          </div>
                          <div className="lot-size">
                              <i className="fas fa-th">&nbsp;</i>
                              .34 acre
                          </div>
                          <div className="monthly-rent">
                              $3,780 per month
                          </div>
                      </div>
                      <div className="card-footer">
                          <div className="tag">Single Family</div>
                      </div>
                  </div>
                  <div className="rental-card">
                      <div className="card-hero prop-three">
                          <div className="hero-overlay">
                              <div className="prop-address">
                                  <i className="fas fa-map-marker-alt"></i>
                                  3260 Woodleigh ct. New York, NY 10128
                              </div>
                          </div>
                      </div>
                      <div className="card-copy">
                          <div className="bed-rooms">
                              <i className="fas fa-home">&nbsp;</i>
                              3 bedrooms
                          </div>
                          <div className="baths">
                              <i className="fas fa-bath">&nbsp;</i>
                              2.5 baths
                          </div>
                          <div className="area">
                              <i className="fas fa-th-large">&nbsp;</i>
                              2,183 sqft.
                          </div>
                          <div className="lot-size">
                              <i className="fas fa-th">&nbsp;</i>
                              .25 acre
                          </div>
                          <div className="monthly-rent">
                              $5,975 per month
                          </div>
                      </div>
                      <div className="card-footer">
                          <div className="tag">Single Family</div>
                      </div>
                  </div>
                  <div className="rental-card">
                      <div className="card-hero prop-four">
                          <div className="hero-overlay">

                              <div className="prop-address">
                                  <i className="fas fa-map-marker-alt"></i>
                                  Madison Blvd. Chicago, Il 60607
                              </div>
                          </div>
                      </div>
                      <div className="card-copy">
                          <div className="bed-rooms">
                              <i className="fas fa-home">&nbsp;</i>
                              6 bedrooms
                          </div>
                          <div className="baths">
                              <i className="fas fa-bath">&nbsp;</i>
                              3 baths
                          </div>
                          <div className="area">
                              <i className="fas fa-th-large">&nbsp;</i>
                              4,675 sqft.
                          </div>
                          <div className="lot-size">
                              <i className="fas fa-th">&nbsp;</i>
                              .30 acre
                          </div>
                          <div className="monthly-rent">
                              $6,485 per month
                          </div>
                      </div>
                      <div className="card-footer">
                          <div className="tag">Single Family</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="investors">
          <h2 className="text-center">What Makes Investing with Vesta so Easy</h2>
          <div className="investors-copy">
              <div className="inv-marketing">
                  <div className="inv-left">
                      <img className={'renters-illustration'} src={investor}/>
                  </div>
                  <div className="inv-right">
                      <div className="inv-benefits">
                          <div className="benefit">
                              <i className="fas fa-hand-holding-usd fa-fw"></i>
                              Buy and trade like stocks
                          </div>
                          <div className="benefit">
                              <i className="fas fa-users fa-fw"></i>
                              Real Estate investing available to the public
                          </div>
                          <div className="benefit">
                              <i className="fas fa-piggy-bank fa-fw"></i>
                              Commission-free investing & the tools you need to grow your portfolio
                          </div>
                          <div className="benefit">
                              <i className="fas fa-mobile-alt fa-fw"></i>
                              Everything you need to manage your residence and assets in an
                              easy to use mobile app
                          </div>
                          <div className="benefit">
                              <i className="fas fa-city fa-fw"></i>
                              Invest in a market, city, zip-code or even individual assets
                          </div>
                          <div className="benefit">
                              <i className="fas fa-briefcase fa-fw"></i>
                              Diversify your portfolio with low-risk real estate investments
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="reasons-cards inv">
              <div className="reason-card">
                  <div className="reason-badge">
                      <img src={investHouse} alt="real estate investment service"/>
                  </div>
                  <h4 className="text-center">A new way to invest and own a home</h4>
                  <p className="reason-copy text-center">
                      Invest as little or as much as you want and receive tokenized ownership
                      in a property. Then just like with a traditional mortgage,
                      your monthly payment amount will be determined by how much you invest.
                  </p>
              </div>
              <div className="reason-card">
                  <div className="reason-badge">
                      <img src={invReturn} alt="real estate investment service"/>
                  </div>
                  <h4 className="text-center">Welcome to Frictionless Home Ownership</h4>
                  <p className="reason-copy text-center">
                      Say goodbye to taking out home loans, expensive realtor
                      commissions and closing costs. With Vesta there are zero
                      transaction costs and we’ll even buy your home back from
                      you whenever you’re ready at its new appraised value.
                  </p>
              </div>
              <div className="reason-card">
                  <div className="reason-badge">
                      <img src={invTransfer} alt="real estate investment service"/>
                  </div>
                  <h4 className="text-center">All the gains of home-ownership with non of the stress.</h4>
                  <p className="reason-copy text-center">
                      As your home’s value appreciates, your investment grows.
                      Enjoy the returns of an investment, with none of the stress
                      of buying and selling a traditional home.
                  </p>
              </div>
              <div className="reason-card">
                  <div className="reason-badge">
                      <img src={homeOwner} alt="real estate investment service"/>
                  </div>
                  <h4 className="text-center">Don’t worry, it’s all included.</h4>
                  <p className="reason-copy text-center">
                      Never worry again about something breaking or expensive
                      unexpected repairs. Annual property maintenance is already
                      budgeted for in your monthly payment so any repairs are covered.
                  </p>
              </div>
          </div>
          <div className="browse-markets">
              <div className="browse-header">
                  <h3>Browse Markets</h3>
                  <span className="view-more">
                      View All Markets
                      <i className="fas fa-arrow-right"></i>
                  </span>
              </div>
              <div className="market-cards">
                  <div className="market-card ">
                    <div className="card-hero austin">
                        <div className="hero-overlay">
                           <div className="market-name">
                                Austin
                            </div>
                        </div>
                    </div>
                      <div className="market-copy">
                          <div className="market-value">
                              <span>Total Value:</span>
                              <span className="text-right">$14.5B</span>
                          </div>
                          <div className="qtr-increase">
                              <span>Previous Quarter:</span>
                              <span className="text-right">+8.74%</span>
                          </div>
                          <div className="yearly-increase">
                              <span>Previous Year:</span>
                              <span className="text-right">+15.8%</span>
                          </div>
                          <div className="total-increase">
                              <span>Since Inception:</span>
                              <span className="text-right">+20.2%</span>
                          </div>
                      </div>
                      <div className="card-footer">
                        <button className="btn btn-default full-width">
                            Start Investing
                        </button>
                      </div>
                  </div>
                  <div className="market-card ">
                      <div className="card-hero dallas">
                          <div className="hero-overlay">
                              <div className="market-name">
                                  Dallas
                              </div>
                          </div>
                      </div>
                      <div className="market-copy">
                          <div className="market-value">
                              <span>Total Value:</span>
                              <span className="text-right">$12.78B</span>
                          </div>
                          <div className="qtr-increase">
                              <span>Previous Quarter:</span>
                              <span className="text-right">+6.48%</span>
                          </div>
                          <div className="yearly-increase">
                              <span>Previous Year:</span>
                              <span className="text-right">+12.28%</span>
                          </div>
                          <div className="total-increase">
                              <span>Since Inception:</span>
                              <span className="text-right">+16.72%</span>
                          </div>
                      </div>
                      <div className="card-footer">
                          <button className="btn btn-flex btn-default full-width">
                              Start Investing
                          </button>
                      </div>
                  </div>
                  <div className="market-card ">
                      <div className="card-hero chicago">
                          <div className="hero-overlay">
                              <div className="market-name">
                                  Chicago
                              </div>
                          </div>
                      </div>
                      <div className="market-copy">
                          <div className="market-value">
                              <span>Total Value:</span>
                              <span className="text-right">$10.6B</span>
                          </div>
                          <div className="qtr-increase">
                              <span>Previous Quarter:</span>
                              <span className="text-right">+4.8%</span>
                          </div>
                          <div className="yearly-increase">
                              <span>Previous Year:</span>
                              <span className="text-right">+12.28%</span>
                          </div>
                          <div className="total-increase">
                              <span>Since Inception:</span>
                              <span className="text-right">+14.78%</span>
                          </div>
                      </div>
                      <div className="card-footer">
                          <button className="btn btn-flex btn-default full-width">
                              Start Investing
                          </button>
                      </div>
                  </div>
                  <div className="market-card">
                      <div className="card-hero ny">
                          <div className="hero-overlay">
                              <div className="market-name">
                                  New York
                              </div>
                          </div>
                      </div>
                      <div className="market-copy">
                          <div className="market-value">
                              <span>Total Value:</span>
                              <span className={'text-right value-amt'}>$25.24B</span>
                          </div>
                          <div className="qtr-increase">
                              <span>Previous Quarter:</span>
                              <span className={'text-right value-amt'}>+5.8%</span>
                          </div>
                          <div className="yearly-increase">
                              <span>Previous Year:</span>
                              <span className={'text-right value-amt'}>+14.8%</span>
                          </div>
                          <div className="total-increase">
                              <span>Since Inception:</span>
                              <span className={'text-right value-amt'}>+18.2%</span>
                          </div>
                      </div>
                      <div className="card-footer">
                          <button className="btn btn-flex btn-default full-width">
                              Start Investing
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
        <section className="our-partners">
            <h3>Our Partners</h3>
            <div className="partner-logos">
                <div className="partner-logo">
                    <img src={logo1} alt=""/>
                </div>
                <div className="partner-logo">
                    <img src={logo2} alt=""/>
                </div>
                <div className="partner-logo">
                    <img src={logo3} alt=""/>
                </div>
                <div className="partner-logo">
                    <img src={logo4} alt=""/>
                </div>
                <div className="partner-logo">
                    <img src={logo5} alt=""/>
                </div>
                <div className="partner-logo">
                    <img src={logo6} alt=""/>
                </div>
            </div>
        </section>
      <section className="contact">
          <h2 className={'contact-title text-center'}>Contact Us</h2>
          <div className="contact-us-copy">
              <p className="contact-copy">
                  It has survived not only five centuries,
                  but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages.
              </p>
          </div>
          <div className="form-container">
              <div className="contact-form">
                  <h5 className="form-title">Let's Chat</h5>
                  <form action="" type="submit">
                      <div className="form-field">
                          <label htmlFor="firstName">First Name</label>
                          <input id={'firstName'} type="text"/>
                      </div>
                      <div className="form-field">
                          <label htmlFor="lastName">Last Name</label>
                          <input id={'lastName'} type="text"/>
                      </div>
                      <div className="form-field">
                          <label htmlFor="firstName">E-mail</label>
                          <input id={'firstName'} type="text"/>
                      </div>
                      <div className="form-field">
                          <label htmlFor="firstName">Phone Number</label>
                          <input id={'firstName'} type="text"/>
                      </div>
                      <div className="form-field message">
                          <label htmlFor="">Message</label>
                          <textarea name="" id="" cols="30" rows="10"></textarea>
                      </div>
                      <div className="form-footer">
                          <button className={'btn btn-default'}>Clear Form</button>
                          <button className={'btn btn-primary'}>Submit</button>
                      </div>
                  </form>
              </div>

          </div>
      </section>

      <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-col">
                <h5>About</h5>
                <ul className="footer-links">
                    <li className="footer-link">How Vesta Works</li>
                    <li className="footer-link">How to become an Investor</li>
                    <li className="footer-link">How to become a Resident</li>
                    <li className="footer-link">Vesta Markets</li>
                    <li className="footer-link">Vesta Homes</li>
                    <li className="footer-link">Vesta Features</li>
                </ul>
            </div>
              <div className="footer-col">
                  <h5>Investors</h5>
                  <ul className="footer-links">
                      <li className="footer-link">Investing with Vesta</li>
                      <li className="footer-link">Make a Transfer</li>
                      <li className="footer-link">Set up a recurring Investment</li>
                      <li className="footer-link">Market Analytics</li>
                      <li className="footer-link">Investor Help</li>
                  </ul>
              </div>
              <div className="footer-col">
                  <h5>Residents</h5>
                  <ul className="footer-links">
                      <li className="footer-link">Pay Rent</li>
                      <li className="footer-link">Pay Utilities</li>
                      <li className="footer-link">Resident Services</li>
                      <li className="footer-link">Resident Account Help</li>
                  </ul>
              </div>
              <div className="footer-col">
                  <h5>Support</h5>
                  <ul className="footer-links">
                      <li className="footer-link">Help Center</li>
                      <li className="footer-link">Contact Us</li>
                  </ul>
              </div>
          </div>
          <div className="footer-legal-bar">
            <div className="company-legal">
                &copy; Vesta Inc.
            </div>
              <div className="social-links">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                  <i className="fab fa-twitter"></i>
              </div>
          </div>
      </footer>
    </div>
    );
}

export default App;
