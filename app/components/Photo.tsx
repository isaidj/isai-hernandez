import React from "react";

const Photo = ({ id, pathname }: { id: string; pathname: string }) => {
  return (
    <div>
      <h1>Photo</h1>
      <p>id: {id}</p>
      <p>pathname: {pathname}</p>
    </div>
  );
};

export default Photo;
