import React from 'react';
import { HeartCounter } from './HeartCounter';

export default function BrandIntroduction() {
  return (
    <section className="w-full py-20 bg-[#feffeb]">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* 인사말 */}
        <div className="mb-20 text-center">
          <h2 className="font-pretendard font-normal text-black text-4xl md:text-5xl lg:text-[64px]">
            Welcome to My Little Cozy Garden
          </h2>
        </div>

        {/* 브랜드 설명 */}
        <div className="max-w-[1359px] mx-auto space-y-6">
          <p className="font-pretendard font-light text-black text-2xl md:text-3xl lg:text-[32px] leading-relaxed text-center">
            사진과 글로 패션, 라이프스타일, 여행 등의 콘텐츠 나누는 브랜드입니다.
          </p>
          <p className="font-pretendard font-light text-black text-2xl md:text-3xl lg:text-[32px] leading-relaxed text-center">
            또 직접 만든 핸드메이드 제품과 여행지에서 찾아온 특별한 물건들도 판매하고 있어요.
          </p>
          <p className="font-pretendard font-light text-black text-2xl md:text-3xl lg:text-[32px] leading-relaxed text-center">
            여러분이 보고 있는 모든 콘텐츠는 제가 직접 기획하고 제작했습니다.
          </p>
          <p className="font-pretendard font-light text-black text-2xl md:text-3xl lg:text-[32px] leading-relaxed text-center">
            저와의 협업에 관심이 있다면 언제든지 편하게 연락 주세요!
          </p>
        </div>

        {/* HeartCounter 추가 */}
        <div className="mt-16">
          <HeartCounter />
        </div>
      </div>
    </section>
  );
}