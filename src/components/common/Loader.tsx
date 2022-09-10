import React from 'react';

type LoaderProps = {
    variant: "light" | "dark";
}

const Loader = ({ variant }: LoaderProps) => {
  return (
    <div className={`${variant === "light" ? 'spinner-white' : 'spinner-dark'}`}></div>
  )
}

export default Loader