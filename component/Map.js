import React from 'react';

const Map = () => {
    return (
        <div className="h-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.359148056498!2d77.20584937580366!3d28.63102725659868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1e7d6b13ff%3A0x7a8b0b0c0f9b6f4e!2sSouth%20Campus!5e0!3m2!1sen!2sin!4v1594978785435!5m2!1sen!2sin"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="map"
            ></iframe>
        </div>
    );
}

export default Map;
