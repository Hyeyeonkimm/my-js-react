import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// 이미지 import
import visual1 from '../images/visual1.png';
import visual2 from '../images/visual2.png';
import visual3 from '../images/visual3.png';
import visual4 from '../images/visual4.png';
import visual5 from '../images/visual5.png';

const carouselData = [
  {
    id: 1,
    image: visual1,
    backgroundColor: '#9CA3AF',
    title: "FRESH SUMMER, 뜨거운 여름 쿨하게 즐기기",
    description: "시원한 여름을 위한 특별한 컬렉션"
  },
  {
    id: 2,
    image: visual2,
    backgroundColor: '#9CA3AF',
    title: "COZY AUTUMN, 따뜻한 가을 감성",
    description: "포근한 가을을 위한 라이프스타일 제품"
  },
  {
    id: 3,
    image: visual3,
    backgroundColor: '#9CA3AF',
    title: "WINTER WARMTH, 겨울의 따뜻함",
    description: "추운 겨울을 따뜻하게 만들어줄 아이템"
  },
  {
    id: 4,
    image: visual4,
    backgroundColor: '#9CA3AF',
    title: "SPRING BLOOM, 봄의 생기",
    description: "새로운 시작을 위한 봄 컬렉션"
  },
  {
    id: 5,
    image: visual5,
    backgroundColor: '#9CA3AF',
    title: "TRAVEL MEMORIES, 여행의 추억",
    description: "특별한 여행지에서 가져온 소중한 것들"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] lg:h-[912px] overflow-hidden rounded-lg">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative bg-center bg-cover bg-no-repeat flex items-center justify-center"
            style={{ 
              backgroundImage: slide.image ? `url('${slide.image}')` : 'none',
              backgroundColor: slide.backgroundColor || 'transparent'
            }}
          >
            {slide.image && (
              <div className="absolute bottom-0 left-0 right-0 h-[285px] bg-gradient-to-t from-[#0000007d] to-[#b6b6b600]" />
            )}
            
            {slide.backgroundColor && !slide.image && (
              <div className="absolute bottom-0 left-0 right-0 h-[285px] bg-gradient-to-t from-[#00000040] to-[#00000000]" />
            )}
            
            <div className="absolute bottom-[80px] lg:bottom-[111px] left-1/2 transform -translate-x-1/2 text-center z-10 w-full px-4">
              <h2 className="font-pretendard font-bold text-white text-3xl lg:text-[40px] mb-4">
                {slide.title}
              </h2>
              <p className="font-pretendard text-white text-lg lg:text-xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-[46px] top-1/2 transform -translate-y-1/2 w-12 h-12 lg:w-[60px] lg:h-[60px] flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 z-10"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-[46px] top-1/2 transform -translate-y-1/2 w-12 h-12 lg:w-[60px] lg:h-[60px] flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 z-10"
        aria-label="다음 슬라이드"
      >
        <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
}