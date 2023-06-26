import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import categories from '../categories';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home() {
  return (
    <div>
      <img
        src='https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png'
        className='home-banner'
        style={{ width: '100%', height: 'auto' }}
        alt='Home Banner'
      />
      <div className='featured-product-container container mt-4'>
        <h2>Last Products</h2>
        <div>
          <Link
            to="/catagory/all"
            style={{ textAlign: 'right', display: 'block', textDecoration: 'none' }}
          >
            See more &gt;&gt;
          </Link>
        </div>
      </div>
      <div>
        {/*sale banner*/}
        <div className='sale__banner--container mt-4'>
          <img
            src='https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png'
            style={{ width: '100%', height: 'auto' }}
            alt='Sale Banner'
          />
        </div>
      </div>
      <div className='recent-products-container container mt-4'>
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer to={`categories/${category.name.toLocaleLowerCase()}`}>
              <Col md={4}>
                <div
                  className='category-tile'
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${category.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '200px',
                    gap: '10px',
                  }}
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
