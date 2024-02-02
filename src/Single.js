import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Single() {

  let { id } = useParams();

  let [prod, setprod] = useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        setprod(response.data);
        setselectedImage(response.data.images[0] || null);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  let [selectedImage, setselectedImage] = useState(null);
  const handleImageClick = (image) => {
    setselectedImage(image);
  }

  return (
    <div className="App">
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
      <div className='single_item d-flex'>
        <Row className='d-flex'>
          <Col lg={1} className='single'>
            {
              prod.images && Array.isArray(prod.images) && prod.images.map((ele, ind) => (
                <ul key={ind} onClick={() => handleImageClick(ele)}>
                  <li><img src={ele} alt={`Image ${ind + 1}`} className='small_img' /></li>
                </ul>
              ))}
          </Col>
          <Col className="single1" lg={4}>
            {selectedImage && (
              <div className='selected'>
                <img src={selectedImage} alt="Selected Image" className='single_img' />
              </div>
            )}
            <div className='d-flex'>
              <button className='cart_btn'><span className='single_icon'><FaShoppingCart></FaShoppingCart></span> ADD TO CART</button>
              <button className='cart_btn1'><span className='single_icon'><FaBoltLightning></FaBoltLightning></span> BUY NOW</button>
            </div>
          </Col>
          <Col lg={6}>
            <p className='single_p'> Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens  (Black)</p>
            <div>
              <button className='btn2'>4.2 <FaStar></FaStar></button>
              <span className='rating'>508 Ratings & 57 Reviews</span>
              <span className="logo1"> <img src={require('./img/logo1.png')}></img></span>

            </div>
            <div>
              <p className='s_price'>Special price</p>
            </div>
            <div className='d-flex'>
              <h5 className='rup'>₹14,999</h5>
              <span className='s_rup'><strike> ₹20,270</strike></span>
              <span className='off'> 26% off</span>
            </div>
            <div>
              <p className='s_avil'>Available offers</p>
              <div className='d-flex'><p className='s_bank'><img src={require('./img/logo.png')}></img>Bank Offer</p><span className='s_per'>10% off on Axis Bank Credit Card Transactions of ₹5,000 and aboveT&C</span></div>
              <div className='d-flex'><p className='s_bank'><img src={require('./img/logo.png')}></img>Bank Offer</p><span className='s_per'>5% Cashback on Flipkart Axis Bank CardT&C</span></div>
              <div className='d-flex'><p className='s_bank'><img src={require('./img/logo.png')}></img>Bank Offer</p><span className='s_per'>Buy 3 or more items save ₹1000See all productsT&C</span></div>
            </div>
            <div><p className='s_view'>View 11 more offers</p>
                <div>
                <p className='s_exc'> - Buy without Exchange</p>
                <div className='all_exc'>
                  <div className='d-flex'>
                    <input type='radio' checked></input>
                    <p className='s_buy'> Buy with Exchange</p>
                  </div>
                  <p> - Get extra ₹400 off on exchange of select models</p>
                  <p className='pin'> - Enter pincode to check if exchange is available</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default Single;