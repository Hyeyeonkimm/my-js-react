import React from 'react';
// 이미지들을 import
import collabo1 from '../images/banner/sub/collabo/collabo1.png';
import toptenkids from '../images/brand/logo/toptenkids.png';
import elandkids from '../images/brand/logo/elandkids.png';
import kbs from '../images/brand/logo/kbs.png';
import yangyang from '../images/brand/logo/yangyang.png';
import hongcheon from '../images/brand/logo/hongcheon.png';
import solbeach from '../images/brand/logo/solbeach.png';
import kiana from '../images/brand/logo/kiana.png';
import ygkplus from '../images/brand/logo/ygkplus.png';
import barunson from '../images/brand/logo/barunson.png';
import amang from '../images/brand/logo/amang.png';
import eliseandclaire from '../images/brand/logo/eliseandclaire.png';

function BitcoinIconsArrowRightOutline() {
  return (
    <div className="relative shrink-0 w-[24.624px] h-[24.624px]" data-name="bitcoin-icons:arrow-right-outline">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="bitcoin-icons:arrow-right-outline">
          <path
            d="M7.875 18.375L13.875 12.375L7.875 6.375M13.875 12.375H6.375M12.375 0.875C5.9 0.875 0.875 5.9 0.875 12.375C0.875 18.85 5.9 23.875 12.375 23.875C18.85 23.875 23.875 18.85 23.875 12.375C23.875 5.9 18.85 0.875 12.375 0.875Z"
            id="Vector"
            stroke="#FD7C20"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.769488"
          />
        </g>
      </svg>
    </div>
  );
}

function ActionButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex flex-row gap-[30.779px] items-center justify-start p-0 hover:scale-105 transition-transform duration-200"
    >
      <div className="font-['Pretendard'] font-thin leading-[0] not-italic text-[#fd7c20] text-[30.78px] text-center whitespace-nowrap">
        <p className="block leading-normal whitespace-pre">{text}</p>
      </div>
      <BitcoinIconsArrowRightOutline />
    </button>
  );
}

function CollaborationContent() {
  const handleMoreClick = () => {
    console.log('Navigating to more content page');
  };

  const handleCollaborationClick = () => {
    console.log('Navigating to collaboration page');
  };

  return (
    <div className="bg-[#edecd8] h-[691px] ml-0 mt-0 overflow-clip relative w-[521.328px]">
      <div
        className="absolute font-['Pretendard'] font-thin leading-[0] not-italic text-[#fd7c20] text-[42.322px] text-center whitespace-nowrap top-[35.4px] translate-x-[-50%]"
        style={{ left: "calc(50% + 0.653px)" }}
      >
        <p className="block leading-normal whitespace-pre">Collaboration</p>
      </div>
      <div
        className="absolute font-['Pretendard'] font-bold leading-[0] not-italic text-[#fd7c20] text-[73.871px] text-center whitespace-nowrap translate-x-[-50%]"
        style={{ top: "calc(50% - 43.861px)", left: "calc(50% + 0.266px)" }}
      >
        <p className="block leading-normal whitespace-pre">BRAND</p>
      </div>
      
      <div
        className="absolute translate-x-[-50%] translate-y-[-50%]"
        style={{ top: "calc(50% + 219.304px)", left: "calc(50% + 0.193px)" }}
      >
        <ActionButton text="더 보러가기" onClick={handleMoreClick} />
      </div>
      
      <div
        className="absolute translate-x-[-50%] translate-y-[-50%]"
        style={{ top: "calc(50% + 268.551px)", left: "calc(50% - 0.192px)" }}
      >
        <ActionButton text="협업 제안하기" onClick={handleCollaborationClick} />
      </div>
    </div>
  );
}

function ImageContent() {
  return (
    <div className="bg-[#626262] h-[691px] ml-0 mt-0 overflow-clip relative w-[521.328px]">
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[785.935px] left-0 top-[-56.17px] w-[523.829px]"
        style={{ backgroundImage: `url(${collabo1})` }}
      />
    </div>
  );
}

function MainContent() {
  return (
    <div className="inline-grid grid-cols-2 grid-rows-1 leading-[0] place-items-start relative shrink-0">
      <CollaborationContent />
      <ImageContent />
    </div>
  );
}

// 브랜드 로고 컴포넌트 - 단순화
function BrandLogo({ image, name }) {
  return (
    <div className="shrink-0 flex items-center justify-center">
      <img
        src={image}
        alt={name}
        className="h-[79px] object-contain"
      />
    </div>
  );
}

function BrandLogosScroll() {
  const brands = [
    { image: toptenkids, name: 'TopTen Kids' },
    { image: elandkids, name: 'E-Land Kids' },
    { image: kbs, name: 'KBS' },
    { image: yangyang, name: 'YangYang' },
    { image: hongcheon, name: 'HongCheon' },
    { image: solbeach, name: 'Sol Beach' },
    { image: kiana, name: 'Kiana' },
    { image: ygkplus, name: 'YG K Plus' },
    { image: barunson, name: 'Barunson' },
    { image: amang, name: 'Amang' },
    { image: eliseandclaire, name: 'Elise and Claire' },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes scroll-brands {
          0% {
            transform: translateX(0) translateY(-50%);
          }
          100% {
            transform: translateX(-50%) translateY(-50%);
          }
        }
      `}</style>
      <div className="bg-transparent h-[198px] overflow-hidden relative shrink-0 w-full max-w-[1440px]">
        <div 
          className="absolute top-1/2 translate-y-[-50%] flex gap-[15px] items-center whitespace-nowrap"
          style={{
            animation: 'scroll-brands 30s linear infinite',
            width: 'max-content'
          }}
        >
          {brands.map((brand, index) => (
            <BrandLogo 
              key={`first-${index}`} 
              image={brand.image} 
              name={brand.name} 
            />
          ))}
          {brands.map((brand, index) => (
            <BrandLogo 
              key={`second-${index}`} 
              image={brand.image} 
              name={brand.name} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

function BrandCollaboration() {
  return (
    <div className="bg-[#feffeb] relative w-full h-[993px]">
      <div className="flex flex-col items-center justify-center relative w-full h-full">
        <div className="box-border content-stretch flex flex-col gap-3.5 items-center justify-center px-5 py-[45px] relative w-full h-full">
          <MainContent />
          <BrandLogosScroll />
        </div>
      </div>
    </div>
  );
}

export default BrandCollaboration;