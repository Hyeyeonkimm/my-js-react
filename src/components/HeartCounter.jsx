import React, { useState } from 'react';

function ClarityHeartSolid({ onClick }) {
  return (
    <div 
      className="relative shrink-0 w-[82px] h-[82px] cursor-pointer hover:scale-110 transition-transform duration-200" 
      data-name="clarity:heart-solid"
      onClick={onClick}
    >
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 82">
        <g clipPath="url(#clip0_4_414)" id="clarity:heart-solid">
          <path 
            d="M41 71.5C41 71.5 7.5 52 7.5 28.5C7.5 21.5 11.5 10.5 22.5 10.5C29.5 10.5 36 14.5 41 20.5C46 14.5 52.5 10.5 59.5 10.5C70.5 10.5 74.5 21.5 74.5 28.5C74.5 52 41 71.5 41 71.5Z" 
            fill="#FD7C20" 
            id="Vector" 
          />
          <g id="Vector_2"></g>
        </g>
        <defs>
          <clipPath id="clip0_4_414">
            <rect fill="white" height="82" width="82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CounterDisplay({ count }) {
  const formattedCount = count.toString().padStart(3, '0');
  const digits = formattedCount.split('');

  return (
    <div className="box-border content-stretch flex flex-row font-['Merriweather'] font-bold gap-5 items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[70px] text-center">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="block leading-normal whitespace-pre">{digits[0]}</p>
      </div>
      <div className="flex flex-col h-[86px] justify-center relative shrink-0 w-[47px]">
        <p className="block leading-normal">{digits[1]}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="block leading-normal whitespace-pre">{digits[2]}</p>
      </div>
    </div>
  );
}

function HeartAndCounter({ count, onHeartClick }) {
  return (
    <div className="box-border content-stretch flex flex-row gap-[27px] items-center justify-center p-0 relative shrink-0">
      <ClarityHeartSolid onClick={onHeartClick} />
      <CounterDisplay count={count} />
    </div>
  );
}

export function HeartCounter() {
  const [count, setCount] = useState(0);

  const handleHeartClick = () => {
    setCount(prevCount => Math.min(prevCount + 1, 999));
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center justify-center relative w-full h-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center px-5 py-[55px] relative w-full h-full">
          <HeartAndCounter count={count} onHeartClick={handleHeartClick} />
          <div
            className="font-['Pretendard'] font-light leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[32px] text-center"
            style={{ width: "min-content" }}
          >
            <p className="block leading-normal">응원의 하트를 눌러주세요!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Default export 추가
export default HeartCounter;