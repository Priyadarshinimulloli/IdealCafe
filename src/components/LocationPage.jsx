// import React, { useState } from "react";

// const locations = {
//   bangalore: {
//     name: "Bangalore",
//     address: "MG Road, Bangalore, Karnataka",
//     phone: "+91 98765 43210",
//     email: "blr@idealcafe.com",
//     hours: "9:00 AM – 10:00 PM",
//     mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.932018800051!2d77.59369017481912!3d12.97159861495885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c86bdb5f%3A0x42f9c2a4223e0dfc!2sMG%20Road%2C%20Bangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1681288349656",
//     directionsLink: "https://www.google.com/maps/dir/?api=1&destination=MG+Road,+Bangalore,+Karnataka",
//   },
//   mangalore: {
//     name: "Mangalore",
//     address: "Hampankatta, Mangalore, Karnataka",
//     phone: "+91 91234 56789",
//     email: "mng@idealcafe.com",
//     hours: "8:00 AM – 9:00 PM",
//     mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.926149239127!2d74.84227377480892!3d12.870270719493337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3508b86e4e37f%3A0x1097339b91f6607b!2sHampankatta%2C%20Mangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1681290009999",
//     directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Hampankatta,+Mangalore,+Karnataka",
//   },
//   mysore: {
//     name: "Mysore",
//     address: "Devaraja Mohalla, Mysore, Karnataka",
//     phone: "+91 99887 66554",
//     email: "mys@idealcafe.com",
//     hours: "10:00 AM – 11:00 PM",
//     mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.040833592254!2d76.64127127481991!3d12.30324402938956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7011cc87b38b%3A0x3b8b0a08976e0baf!2sDevaraja%20Mohalla%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1681290140141",
//     directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Devaraja+Mohalla,+Mysore,+Karnataka",
//   },
// };

// const LocationPage = () => {
//   const [selectedLocationKey, setSelectedLocationKey] = useState("bangalore");
//   const selected = locations[selectedLocationKey];

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>📍 Ideal Café - Our Locations</h2>

//       {/* Dropdown */}
//       <div style={styles.dropdownContainer}>
//         <label htmlFor="location-select" style={{ fontWeight: "bold", marginRight: "10px" }}>
//           Choose a location:
//         </label>
//         <select
//           id="location-select"
//           value={selectedLocationKey}
//           onChange={(e) => setSelectedLocationKey(e.target.value)}
//           style={styles.select}
//         >
//           {Object.keys(locations).map((key) => (
//             <option key={key} value={key}>
//               {locations[key].name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Grid layout */}
//       <div style={styles.grid}>
//         {/* Map */}
//         <div style={styles.mapContainer}>
//           <iframe
//             title={`Map of ${selected.name}`}
//             src={selected.mapEmbed}
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//         {/* Info */}
//         <div style={styles.infoSection}>
//           <h3>{selected.name} Branch</h3>
//           <p><strong>📍 Address:</strong> {selected.address}</p>
//           <p><strong>📞 Phone:</strong> {selected.phone}</p>
//           <p><strong>📧 Email:</strong> {selected.email}</p>
//           <p><strong>⏰ Hours:</strong> {selected.hours}</p>
//           <a
//             href={selected.directionsLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.directionsButton}
//           >
//             🧭 Get Directions
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "40px 20px",
//     maxWidth: "1100px",
//     margin: "0 auto",
//     fontFamily: "sans-serif",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "30px",
//     fontSize: "32px",
//     fontWeight: "bold",
//     color: "#333",
//   },
//   dropdownContainer: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   select: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "20px",
//   },
//   mapContainer: {
//     height: "400px",
//     borderRadius: "12px",
//     overflow: "hidden",
//     boxShadow: "0 0 15px rgba(0,0,0,0.1)",
//   },
//   infoSection: {
//     padding: "20px",
//     borderRadius: "12px",
//     backgroundColor: "#f9f9f9",
//     boxShadow: "0 0 10px rgba(0,0,0,0.05)",
//     fontSize: "16px",
//     lineHeight: "1.6",
//   },
//   directionsButton: {
//     display: "inline-block",
//     marginTop: "15px",
//     padding: "10px 20px",
//     backgroundColor: "#ff5722",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "8px",
//     fontWeight: "bold",
//     transition: "background-color 0.3s",
//   },
// };

// export default LocationPage;
import React from "react";
import { FaLocationArrow, FaPlus, FaHome, FaClock, FaEllipsisH, FaShareAlt } from "react-icons/fa";

const LocationSelector = () => {
  const currentLocation = "Karnataka, India";
  const savedAddresses = [
    {
      label: "Home",
      address: "thekkunje house, Mithakodi, Karnataka, India",
      phone: "+91-7204720276",
      distance: "17 km"
    }
  ];
  const recentLocations = [
    { label: "Balthila", address: "India", time: "0 m" },
    { label: "Balthila", address: "India", time: "27 m" },
    { label: "Home", address: "thekkunje house, Mithakodi, Karnataka, India", time: "17 km" }
  ];

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>▼ Select a location</h3>

      {/* Search */}
      <input
        type="text"
        placeholder="Search for area, street name..."
        style={styles.searchInput}
      />

      {/* Current location */}
      <div style={styles.locationBox}>
        <FaLocationArrow color="#e91e63" />
        <div style={styles.locationInfo}>
          <p style={styles.locationTextRed}>Use current location</p>
          <p style={styles.subText}>{currentLocation}</p>
        </div>
      </div>

      {/* Add Address */}
      <div style={styles.locationBox}>
        <FaPlus color="#e91e63" />
        <p style={styles.locationTextRed}>Add Address</p>
      </div>

      {/* Saved Addresses */}
      <h4 style={styles.sectionHeader}>SAVED ADDRESSES</h4>
      {savedAddresses.map((item, index) => (
        <div key={index} style={styles.savedBox}>
          <div style={styles.rowSpaceBetween}>
            <div style={styles.row}>
              <FaHome size={20} />
              <div style={styles.locationInfo}>
                <p><strong>{item.label}</strong></p>
                <p style={styles.subText}>{item.address}</p>
                <p style={styles.subText}>Phone number: <strong>{item.phone}</strong></p>
              </div>
            </div>
            <p style={styles.distance}>{item.distance}</p>
          </div>
          <div style={styles.actions}>
            <FaEllipsisH size={18} />
            <FaShareAlt size={18} />
          </div>
        </div>
      ))}

      {/* Recent Locations */}
      <h4 style={styles.sectionHeader}>RECENT LOCATIONS</h4>
      {recentLocations.map((item, index) => (
        <div key={index} style={styles.recentBox}>
          <FaClock size={16} />
          <div style={styles.recentText}>
            <p><strong>{item.label}</strong></p>
            <p style={styles.subText}>{item.address}</p>
          </div>
          <span style={styles.time}>{item.time}</span>
        </div>
      ))}

      {/* Footer */}
      <p style={styles.footer}>powered by <span style={{ color: "#4285F4", fontWeight: "bold" }}>Google</span></p>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: "sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9fb",
    minHeight: "100vh"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  searchInput: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "16px"
  },
  locationBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.05)",
    cursor: "pointer"
  },
  locationInfo: {
    lineHeight: "1.4"
  },
  locationTextRed: {
    color: "#e91e63",
    fontWeight: "bold"
  },
  subText: {
    fontSize: "13px",
    color: "#555"
  },
  sectionHeader: {
    marginTop: "25px",
    fontSize: "14px",
    color: "#777",
    fontWeight: "bold",
    letterSpacing: "1px"
  },
  savedBox: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "10px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.05)"
  },
  rowSpaceBetween: {
    display: "flex",
    justifyContent: "space-between"
  },
  row: {
    display: "flex",
    gap: "10px"
  },
  distance: {
    fontSize: "13px",
    color: "#777"
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "10px"
  },
  recentBox: {
    backgroundColor: "#fff",
    padding: "12px",
    borderRadius: "10px",
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.05)"
  },
  recentText: {
    flex: 1
  },
  time: {
    fontSize: "12px",
    color: "#999"
  },
  footer: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "13px",
    color: "#888"
  }
};

export default LocationSelector;
