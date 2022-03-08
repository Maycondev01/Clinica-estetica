import React from 'react'
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'
import './MapEst.css'

const Mapa = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCe1i26B4g2Na8hTDdEmDtyDIuQk6z0m1U"
      })
      const position = {
          lat: -8.101297,
          lng: -34.929859,
      }
      return(
          <div className='local'> <h1>Estamos Localizados Aqui</h1>
          <div className='map'>
              {isLoaded ? (
            <GoogleMap mapContainerStyle={{width: '100%', height: '100%'}}
                  center={position}
                  zoom={15}>
                <Marker position={position} options={{
                    label: {
                        text: 'Clínica Estética M',
                        className: "map-marker",
                    }
                }} />
            </GoogleMap>
              ) : <></>}
          </div>
          </div>
      )
}
export default Mapa;