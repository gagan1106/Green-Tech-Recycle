import React from "react";

const Gmap = () => {
  return (
    <div>
      <div style={{ marginTop: "-7%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7294423.884471104!2d70.73582383969831!3d26.784862099025226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e9f7b4a09d3%3A0xf6a5476d3617249d!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713682670903!5m2!1sen!2sin"
          width="100%"
          height="550"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default Gmap;
