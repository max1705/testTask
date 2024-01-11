import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import data from './mockData';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const App = () => {
  const navigationPrevRef = useRef<HTMLDivElement | null>(null);
  const navigationNextRef = useRef<HTMLDivElement | null>(null);

  const [nextEl, setNextEl] = useState<HTMLDivElement | null>(null);
  const [prevEl, setPrevEl] = useState<HTMLDivElement | null>(null);

  var prev = 0;
  var random;

  useEffect(() => {
    setPrevEl(navigationPrevRef.current);
    setNextEl(navigationNextRef.current);
  }, []);

  return (
    <div className="App">
      <header className="App_Header">
        <div className="App_MainContent">
          <div className='App_TextBlock'>
            <h1>Полезные материалы</h1>
            <div>Собрали для вас полезные исследования схемы кормления и другие материалы, которые пригодятся для лучших результатов на вашем хозяйстве</div>
          </div>

          <div className='App_SliderWrap'>
            <Swiper
              className='App_Slider'
              navigation={{
                prevEl,
                nextEl,
              }}
              modules={[Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 'auto',
                  spaceBetween: 0,
                },
              }}
            >
              {data.map((content, index) => (
                <SwiperSlide
                  key={index}
                  className='App_Slide'
                >
                  <div className={`${content.title.length > 35 ? `App_SlideElement App_SlideElementLong` : "App_SlideElement"} `}>
                    <>
                      <div className='App_Random'>{random = Math.floor(Math.random() * (5 - 1)) + 1}</div>
                      <img className={`App_SlideElementImgId${
                        random === 2 ? random === prev ? 3 : 2 : random
                      }`} src={content.img} alt={content.types} 
                      />
                      <div className='App_Random'>{prev = random}</div>
                    </>
                    <div>
                      <h4>{content.title}</h4>
                      <label>{content.date}</label>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='App_ArrowBlock'>
              <div
                ref={navigationPrevRef}
                className='App_ArrowNav App_ArrowNavPrev'
              />
              <div
                ref={navigationNextRef}
                className='App_ArrowNav App_ArrowNavNext'
              />
            </div>      
          </div>


        </div>
      </header>
    </div>
  );
}

export default App;
