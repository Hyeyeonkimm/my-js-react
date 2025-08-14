import React, { useState, useRef } from 'react';
import thumbnail1 from "../images/best/thumbnail1.png";
import thumbnail2 from "../images/best/thumbnail2.png";
import thumbnail3 from "../images/best/thumbnail3.png";
import thumbnail4 from "../images/best/thumbnail4.png";
import thumbnail5 from "../images/best/thumbnail5.png";

const cardData = [
  {
    id: 1,
    image: thumbnail1,
    title: "탑텐키즈 , 신상 패딩 출시!",
    bgColor: "#e49c34"
  },
  {
    id: 2,
    image: thumbnail2,
    title: "FT아일랜드, 최민환과 쌍둥이 ",
    bgColor: "#e49c34"
  },
  {
    id: 3,
    image: thumbnail3,
    title: "엄마의 꿈은 만화가였어요",
    bgColor: "#e49c34"
  },
  {
    id: 4,
    image: thumbnail4,
    title: "마망살롱, 소녀들의 드레스",
    bgColor: "#e49c34"
  },
  {
    id: 5,
    image: thumbnail5,
    title: "던킨도넛, sweet doughnut",
    bgColor: "#e49c34"
  }
];

function WhatsBestTitle() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative shrink-0">
      <div className="font-['Pretendard:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fd7c20] text-[64px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">What's Best?</p>
      </div>
    </div>
  );
}

function Card({ card, isActive }) {
  return (
    <div 
      className={`h-96 overflow-clip relative shrink-0 w-[317px] transition-transform duration-300 ${
        isActive ? 'scale-100' : 'scale-95'
      }`}
      style={{ backgroundColor: card.bgColor }}
    >
      {/* 이미지 - 선명하게 표시 */}
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[404px] left-0 top-[-15px] w-[318px]"
        style={{ 
          backgroundImage: `url('${card.image}')`,
          imageRendering: 'crisp-edges',
          imageRendering: '-webkit-crisp-edges',
          imageRendering: '-moz-crisp-edges'
        }}
      />
      
      {/* 텍스트 영역 - 그라디언트 배경과 텍스트 */}
      <div className="absolute left-0 bottom-0 w-full h-[100px] bg-gradient-to-t from-[#00000099] to-transparent" />
      <div className="absolute left-0 bottom-0 w-full px-[15px] py-5 z-10">
        <div className="font-['Pretendard:Bold',_sans-serif] text-[#ffffff] text-[24px] text-left font-bold drop-shadow-lg">
          <p className="block leading-[normal]">{card.title}</p>
        </div>
      </div>
    </div>
  );
}

function CarouselContainer({ currentIndex, onSlideChange }) {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    
    currentX.current = e.clientX;
    const diff = startX.current - currentX.current;
    
    if (Math.abs(diff) > 100) { // 100px 이상 드래그 시 슬라이드 변경
      if (diff > 0) {
        // 오른쪽으로 드래그 - 다음 슬라이드
        onSlideChange((currentIndex + 1) % cardData.length);
      } else {
        // 왼쪽으로 드래그 - 이전 슬라이드
        onSlideChange((currentIndex - 1 + cardData.length) % cardData.length);
      }
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  // 전체 카드 배열을 세 번 반복하여 무한 스크롤 효과
  const extendedCards = [...cardData, ...cardData, ...cardData];
  const translateX = -(currentIndex * (317 + 20)) - (317 + 20) * cardData.length;

  return (
    <div className="h-96 overflow-hidden relative shrink-0 w-full cursor-grab active:cursor-grabbing">
      <div
        ref={containerRef}
        className="absolute box-border content-stretch flex flex-row gap-5 items-center justify-start left-1/2 p-0 top-0 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${translateX}px)`,
          width: 'max-content'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {extendedCards.map((card, idx) => (
          <Card 
            key={`card-${idx}`} 
            card={card} 
            isActive={idx % cardData.length === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}

function Pagination({ currentIndex, totalSlides, onDotClick }) {
  return (
    <div className="h-[17px] relative shrink-0 w-28">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 17">
        <g id="Frame 6">
          {Array.from({ length: totalSlides }, (_, index) => (
            <circle
              key={index}
              cx={8.5 + index * 24}
              cy="8.5"
              r="8.5"
              fill={currentIndex === index ? "#242424" : "#DADADA"}
              className="cursor-pointer transition-colors duration-200"
              onClick={() => onDotClick(index)}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export function WhatsBest() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const handleDotClick = (index) => {
    handleSlideChange(index);
  };

  return (
    <div className="bg-[#feffeb] relative w-full h-[707px]">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-center justify-start px-5 py-[45px] relative size-full">
          <WhatsBestTitle />
          <CarouselContainer 
            currentIndex={currentIndex}
            onSlideChange={handleSlideChange}
          />
          <Pagination
            currentIndex={currentIndex}
            totalSlides={cardData.length}
            onDotClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  );
}