import React from 'react';
import labelImage from './icons/label-svgrepo-com.svg';
import englishFlagImage from './flag/english-flag.png';
import tamilFlagImage from './flag/tamil-flag.png';
import logoImage from './logo/logo.png';
import CallImage from './icons/call-center-symbol-svgrepo-com.svg';
import CartImage from './icons/shopping_cart.svg';
import TopImage from './banners/topbanner-1.jpg';
import Slide1Image from './slide/slider-01-1046x450.jpg';
import Slide2Image from './slide/slider-02-1046x450.jpg';
import BottomImage from './banners/bottombanner-1.jpg';
import deliveryImage from './icons/icon-delivery.png';
import {Carousel} from 'react-bootstrap';

function Home() {
  return (
    <div className="home">
      <div className="list">
        <div className="container-xxl">
          <div className="tag left">
            <h6 className="deals">
              <img src={labelImage} alt="tag" style={{ width: '16px' }} />
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
              <img src={logoImage} alt="logo" />
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
                <img src={CallImage} alt="call" style={{ width: '32px' }} />
                <p className="call-details">
                  Call Center<br />
                  088-888-8888
                </p>
              </div>
              <div className="cart">
                <p>
                  Cart
                  <img src={CartImage} alt="cart" style={{ width: '24px' }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="flat container-xxl">
          <img src={TopImage} alt="top" className="banner" />
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
            <div className="container mt-4 category">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle"type="button" id="dropdownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <li className="dropdown-item" href="#">
                    Action 1
                  </li>
                  <li className="dropdown-item" href="#">
                    Action 2
                  </li>
                  <li className="dropdown-item" href="#">
                    Action 3
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="center">
            <Carousel className="cenpro" interval={2000} controls={false} indicators={false} >
              <Carousel.Item>
                <img className="d-block w-100" src={Slide1Image} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Slide2Image} alt="Second slide" />
              </Carousel.Item>
            </Carousel>
            <div className="cenbot">
              <img className="image" src={BottomImage} alt="bottombanner-1" />
            </div>
          </div>
          <div className="miniright">
            <div className="pro">
              <div className="icon">
              <img src={deliveryImage} alt="delivery" />
              </div>
              <div className="service">
                <h5>Free Shipping</h5>
                Deliver to door
              </div>
            </div>
            <div className="pro">
            <div className="icon"></div>
              <div className="service">

              </div>
            </div>
            <div className="pro">
            <div className="icon"></div>
              <div className="service">

              </div>
            </div>
            <div className="pro">
            <div className="icon"></div>
              <div className="service">

              </div>
            </div>
            <div className="pro">
            <div className="icon"></div>
              <div className="service">

              </div>
            </div>
            <div className="pro">
            <div className="icon"></div>
              <div className="service">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
