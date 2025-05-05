import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  background-color: white;
  padding: 60px 20px;
  min-height: calc(100vh - 300px); // Adjust based on your header/footer height
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  background: linear-gradient(to bottom, #ffffff, #f9f9f9);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: linear-gradient(to right, #00966e, #2c3e50);
    border-radius: 2px;
  }
`;

const ContactInfo = styled.div`
  margin: 50px 0;
  
  p {
    font-size: 20px;
    margin: 25px 0;
    color: #333;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  strong {
    color: #2c3e50;
  }
`;

const SocialLinks = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  
  a {
    display: inline-block;
    margin: 0 20px;
    color: #2c3e50;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 25px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    
    &:hover {
      color: #00966e;
      border-color: #00966e;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 150, 110, 0.1);
    }
  }
`;

function Contact() {
  return (
    <ContactWrapper>
      <ContactContainer>
        <Title>Свържете се с нас</Title>
        <ContactInfo>
          <p>
            <span role="img" aria-label="phone">📱</span>
            <strong>Телефон:</strong> 0885 339138
          </p>
          <p>
            <span role="img" aria-label="email">📧</span>
            <strong>Имейл:</strong> etnobroderybg@gmail.com
          </p>
        </ContactInfo>
        <SocialLinks>
          <a 
            href="https://www.facebook.com/EthnoBrodery/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a 
            href="https://www.instagram.com/ethnobrodery/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </SocialLinks>
      </ContactContainer>
    </ContactWrapper>
  );
}

export default Contact; 