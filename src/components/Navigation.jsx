import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import svgPaths from "../imports/svg-kws1spihd6";

const navigationItems = [
  { name: 'Collaboration', href: '/collaboration' },
  { name: 'Fashion', href: '/fashion' },
  { name: 'Lifestyle', href: '/lifestyle' },
  { name: 'Culture', href: '/culture' },
  { name: 'Travel', href: '/travel' },
  { name: 'Shop', href: '/shop' }
];

export default function Navigation() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    console.log(`Navigating to: ${href}`);
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    console.log('Navigating to login page');
  };

  const handleSignupClick = () => {
    console.log('Navigating to signup page');
  };

  const handleSearchClick = () => {
    console.log('Opening search');
  };

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative bg-[#feffeb]">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* 상단 유틸리티 바 */}
        <div className="flex justify-end items-center py-4 gap-6">
          <button
            onClick={handleLoginClick}
            className="text-[#e99b63] text-sm font-pretendard font-extrabold hover:text-[#fd7c20] transition-colors duration-200"
          >
            LOGIN
          </button>
          <button
            onClick={handleSignupClick}
            className="text-[#e99b63] text-sm font-pretendard font-extrabold hover:text-[#fd7c20] transition-colors duration-200"
          >
            SIGNUP
          </button>
          <button
            onClick={handleSearchClick}
            className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            aria-label="검색"
          >
            <Search className="w-5 h-5 text-[#fd7c20]" />
          </button>
        </div>

        {/* 로고 영역 */}
        <div className="py-8 text-center">
          <h1 className="font-pretendard font-extrabold text-[#fd7c20] text-4xl lg:text-5xl leading-tight">
            <span className="block">MY</span>
            <span className="block">LITTLE</span>
            <span className="block">COZY</span>
            <span className="block">GARDEN</span>
          </h1>
        </div>

        {/* 메인 네비게이션 */}
        <nav className="relative">
          {/* 모바일 햄버거 메뉴 */}
          <button
            onClick={handleMenuClick}
            className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 p-2"
            aria-label="메뉴 열기"
          >
            <Menu className="w-6 h-6 text-[#fd7c20]" />
          </button>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden lg:flex gap-12 items-center justify-center pb-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`text-[#fd7c20] text-base transition-all duration-200 ${
                  hoveredItem === item.name 
                    ? 'font-pretendard font-black scale-105' 
                    : 'font-pretendard font-extrabold'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* 모바일 네비게이션 메뉴 */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[#feffeb] shadow-lg z-50">
              <div className="flex flex-col py-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="px-10 py-3 text-[#fd7c20] text-base font-pretendard font-extrabold hover:bg-[#fd7c20] hover:text-white transition-colors duration-200 text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}