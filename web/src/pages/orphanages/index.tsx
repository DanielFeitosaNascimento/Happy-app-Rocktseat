import React from 'react';
import mapMarkerImg from '../../assets/map.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../styles/pages/orphanages.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [171, 1]
})

function index() {
  return (
    <div id="page--orphanages">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />


          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita ;)</p>
        </header>


        <footer>
          <strong>Teresina</strong>
          <p>Piauí</p>
        </footer>
      </aside>


      <Map
        center={[-5.0841814, -42.8073696]}
        zoom={13.25}
        style={{ width: '100%', height: '100%' }}
      >

        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_KEY_MAP}`} />

        < Marker
          icon={mapIcon}
          position={[-5.0841814, -42.8073696]}
        >
          <Popup closeButton={false} 
            minWidth={240} 
            maxWidth={240} 
            className='map--popup'>
            Lar das Meninas
            <Link to="/orphanages/1" >
              <FiArrowRight size={22} color='#FFF' />
            </Link>
          </Popup>
        </Marker>
      </Map>


      <Link to="/orphanages/create" className="create--orphanages" >
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default index
