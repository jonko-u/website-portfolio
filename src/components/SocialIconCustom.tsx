import React from 'react';
interface SocialIconProps {    
    href: string;
    backgroundImage: string;
    alt: string;    
  }
const SocialIconCustom: React.FC<SocialIconProps> = ({ href, backgroundImage, alt }) => {
  const divStyle = {
    width: '30px',
    height: '30px',
    background: `url(${backgroundImage}) center/cover no-repeat`,
    cursor: 'pointer',
  };

  const redirectToHref = () => {
    window.location.href = href;
  };

  return (
    <div style={divStyle} onClick={redirectToHref} role="link" tabIndex={0} className='ml-[10px] mr-[10px]'>
      <img src={backgroundImage} alt={alt} style={{ display: 'none' }} />
    </div>
  );
};

export default SocialIconCustom;
