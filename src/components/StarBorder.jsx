import React from 'react';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = '#0066ff',
  speed = '4s',
  thickness = 2,
  innerClassName = '',
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[30px] transition-transform duration-200 hover:scale-105 ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-90 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-90 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed
        }}
      ></div>
      <div className={`relative z-10 ${innerClassName || 'bg-white text-[#9d0d12] font-semibold text-[14.5px] py-[10px] px-[28px] rounded-[28px] text-center shadow-md'}`}>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
