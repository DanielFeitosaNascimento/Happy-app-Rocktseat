import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/landing.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

export default function index() {
  return (
    <div id="page--landing">
      <div className="content--wrapper">
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Teresina</strong>
          <span>Piauí</span>
        </div>
        <Link to="/orfanatos" className="enter--app" >
          <FiArrowRight size={24} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  )
}
