import React from "react";
import ReactLoading from "react-loading";



const Loading = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">      
              
        <ReactLoading
          type="spinningBubbles"
          color="#F7AB0A"
          height={100}
          width={50}
        />
    
    </div>
  );
};

export default Loading;
