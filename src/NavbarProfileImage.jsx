import React, { useEffect, useState } from 'react';


const NavbarProfileImage = ({ userId }) => {
    const [url, setUrl] = useState('');
   
   
      
        useEffect(() => {
          const fetchProfileImage = async () => {
            try {
              const storedUrl = localStorage.getItem(`profileImageUrl_${userId}`);
              if (storedUrl) {
                setUrl(storedUrl);
              } else {
                // If there is no stored URL, set the default image URL
                setUrl('/bilder/persona.icon.png');
              }
            } catch (error) {
              console.error('Error getting profile image URL:', error);
              // Handle the case where the image cannot be fetched or an error occurs
              // Set a default URL or handle it according to your requirements
              setUrl('/bilder/persona.icon.png');
            }
          };
      
          fetchProfileImage();
        }, [userId]);

  return (
    <img
      src={url || '/public/bilder/persona.icon.png'}
  
      className=" rounded-circle border"
      height="40px"
      width="40px"
      
      loading="lazy"
    />
  );
};

export default NavbarProfileImage;

  