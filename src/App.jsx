import React from 'react';
import HeroCarousel from './components/HeroCarousel';
import Navigation from './components/Navigation';
import BrandIntroduction from './components/BrandIntroduction';

export default function App() {
  return (
    <div className="bg-[#feffeb] min-h-screen w-full">
      {/* 네비게이션 */}
      <Navigation />
      
      {/* 컨테이너로 감싸서 중앙 정렬 */}
      <div className="max-w-[1440px] mx-auto relative">
        {/* pt-[280px] 제거 - Navigation이 더 이상 fixed가 아니므로 여백 불필요 */}
        <div>
          {/* 히어로 캐러셀 */}
          <div className="mx-[39px] mb-[100px]">
            <HeroCarousel />
          </div>

          {/* 브랜드 소개 섹션 */}
          <div className="w-full">
            <BrandIntroduction />
          </div>
        </div>
      </div>
    </div>
  );
}