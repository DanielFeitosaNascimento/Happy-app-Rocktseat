import React, { useEffect, useState } from 'react';
import mapMarkerImg from '../../assets/map.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import '../../styles/pages/orphanages.css';
import api from '../../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [171, 1]
})

interface OrphanageProps {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function Index() {
  const [orphanages, setOrphanages] = useState<OrphanageProps[]>([])

  useEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);


  return (
    <div id="page--orphanages">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />


          <h2>
            Veja uma ocorrência ou 
            Crie uma no Mapa.
          </h2>
          <p>
            Cuidar da sua cidade é importante! Não esqueça as fotos
            e os relatos.
          </p>
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

        {orphanages.map(orphanage => {
          return (
            < Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup 
                closeButton={false} 
                minWidth={240} 
                maxWidth={240} 
                className='map--popup'>
                  {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`} >
                  <FiArrowRight size={22} color='#FFF' />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>


      <Link to="/orphanages/create" className="create--orphanages" >
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default Index
