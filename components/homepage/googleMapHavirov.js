import { useEffect, useState } from 'react';

const GoogleMapHavirov = () => {
  return (
    <div className="text-center">
      <div className="mb-2">
        <div className="h2">Kde nás najdete?</div>
        <h5>Sběrna Havířov</h5>
        <div>U Závor 591/3</div>
        <div>736 01 Havířov</div>
      </div>
      <div className="map-frame">
        <iframe
          width="100%"
          height="500"
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9713.812340847442!2d18.400727276869617!3d49.78925162208848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x176298a683aa325f!2zNDnCsDQ3JzIyLjYiTiAxOMKwMjQnMTEuNCJF!5e0!3m2!1sen!2scz!4v1646163088275!5m2!1sen!2scz"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapHavirov;
