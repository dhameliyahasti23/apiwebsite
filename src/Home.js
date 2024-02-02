import logo from './logo.svg';

import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';




function Home() {
  let [data,setdata]=useState([]);
  let [img,setimg]=useState([]);

  axios({
    method: 'get',
    url: 'https://dummyjson.com/products/categories',
  })
    .then(function (response) {
    setdata(response.data);
    },[]);

    axios({
      method: 'get',
      url: 'https://dummyjson.com/products',
    })
      .then(function (response) {
      setimg(response.data.products);
      },[]);

    
  return(
    <>
    <div className="top-header p-2">
      <Container>
        <Row>
          <Col>
            <div className="left-info d-flex">
              <div className="logo">
              <img src={require('./img/logo.SVG')}></img>
              </div>
              <div className="serch-bar d-flex" style={{ position: "relative", width: "100%", height: "40%" }}>
                <input className="serch-text" type="serch-bar" placeholder="Search for Products, Brands and More" title="Search for Products, Brands and More" autoComplete="off" style={{ width: "100%", height: "40px", border: "none", marginRight: "10px" }}></input>
                <FaSearch className="serch-icon me-2"></FaSearch>   
              </div>
            </div>
          </Col>
          <Col className="right d-lg-block d-md-none">
            <div className="right-info ms-auto text-end pt-1">
              <span className="me-4 right-icon"><BsCart3 className="me-2"></BsCart3>Cart</span>
              <span className="me-4 right-icon"><BsShop className="me-2"></BsShop>Become A Seller</span>
            </div>
          </Col>
        </Row>
        
      </Container>
    </div>
    {/* -------------------------------------------------------------------------------- */}
    <div className="all">
      <Row>
          <Col className="first1" lg={2}>
            <div className="first_txt">
              <h5 >CATEGORIES</h5>
            {
              data.map((ele,ind) => {
                return(
                  <>
                    <ul key={ind}>
                      <li className="cat">{ele}</li></ul>   
                    </>
                )
              })
            }
            </div>
          </Col>

          <Col className="first2"lg={10}>
          {
              img.map((ele,ind) => {
                return(
                  <>
                  <div className="text d-flex">

                  <div className="product">
                    <img src={ele.thumbnail}></img>
                  </div>



                  <div className="text1">
                    <div className="title"><FaHeart className="heart"></FaHeart> {ele.id} <Link to={`/Single/${ele.id}`} className="nav-link">{ele.title}</Link></div>
                    <button className="btn2">4.5<IoIosStar></IoIosStar></button> <span className="rating">88 Rating & 10 Reviews</span>
                    
                            <span className="logo1"> <img src={require('./img/logo1.png')}></img></span>

                    <div className="description"> - {ele.description}</div>
                    <div> - {ele.price}</div>
                    <div> - {ele.discountPercentage}</div>
                    <div> - {ele.rating}</div>
                    <div> - {ele.stock}</div>
                    <div> - {ele.brand}</div>
                    <button className="btn1"><FaCartArrowDown></FaCartArrowDown> Add to Cart</button>

                  </div>
                    </div>
                    <hr></hr>
                    </>
                )
              })
            }
          </Col>
      
    
      </Row>


      </div>
    </>
  )
}
export default Home;