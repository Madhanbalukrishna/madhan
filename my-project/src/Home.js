import React from 'react';
// import { Container, Row, Col, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Container, Row, Col, Dropdown, ButtonGroup } from 'bootstrap';
import englishFlagImage from './english-flag.png';
import tamilFlagImage from './tamil-flag.png';

function Home() {
  return (
    <div className="home">
      <div className="list">
        <div className="container-xxl">
          <div className="tag left">
            <h6 className="deals">
              <img src="./label-svgrepo-com.svg" alt="tag" style={{ width: '16px' }} />
              Wants to explore Upcoming Deals on Weekends?
            </h6>
          </div>
          <div className="lcmw right">
            <ul>
              <li>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={englishFlagImage} alt="en-flag" style={{ width: '16px' }} />
                    Language
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                      <img src={englishFlagImage} alt="en-flag" style={{ width: '16px' }} />
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      <img src={tamilFlagImage} alt="tn-flag" style={{ width: '16px' }} />
                        Tamil
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    $ Currency
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dollars
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Rupees
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My Account
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Register
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button className="btn btn-secondary " type="button" aria-expanded="false">
                    Wishlist(0)
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="megashop">
        <div className="container-xxl">
          <div className="row">
            <div className="title col-3">
              <img src="./logo/logo.png" alt="logo" />
            </div>
            <div className="search col-6">
              <div id="header-search" className="input-group">
                <input type="text" name="search" value="" placeholder="Search" className="form-control input-lg" />
                <div className="select-wrapper">
                  <select name="category_id" className="form-control innner-search">
                    <option value="">Categories</option>
                    <option value="">Clothes</option>
                    <option value="">Footwears</option>
                    <option value="">Toys</option>
                    <option value="">Accessories</option>
                    <option value="">
                      Electronics
                    </option>
                  </select>
                </div>
                <span className="input-group-btn">
                  <button type="button" className="btn search-btn">
                    <i className="fa fa-search"></i>
                    Search
                  </button>
                </span>
              </div>
            </div>
            <div className="callcart col-3">
              <div className="call">
                <img src="./call-center-symbol-svgrepo-com.svg" alt="call" style={{ width: '32px' }} />
                <p className="call-details">
                  Call Center<br />
                  088-888-8888
                </p>
              </div>
              <div className="cart">
                <p>
                  Cart
                  <img src="./shopping_cart.svg" alt="cart" style={{ width: '24px' }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="flat container-xxl">
          <img src="./topbanner-1.jpg" alt="top" className="banner" />
        </div>
        <div className="megapro">
          <div className="minileft">
            <div className="category">
              Categories
            </div>
            <div className="category">
              Clothes
            </div>
            <div className="category">
              Footwears
            </div>
            <div className="category">
              Toys
            </div>
            <div className="category">
              Accessories
            </div>
            <div className="dropdown dropright category">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                Dropright button
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Link 1</a>
                <a className="dropdown-item" href="#">Link 2</a>
                <a className="dropdown-item" href="#">Link 3</a>
              </div>
            </div>
          </div>
          <div className="center">
            <div id="imageCarousel" className="carousel slide cenpro" data-ride="carousel" data-interval="2000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="image" src="./slider-01-1046x450.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="image" src="./slider-02-1046x450.jpg" alt="Second slide" />
                </div>
              </div>
            </div>
            <div className="cenbot">
              <img className="image" src="./bottombanner-1.jpg" alt="bottombanner-1" />
            </div>
          </div>
          <div className="miniright">
            <div className="pro"></div>
            <div className="pro"></div>
            <div className="pro"></div>
            <div className="pro"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
