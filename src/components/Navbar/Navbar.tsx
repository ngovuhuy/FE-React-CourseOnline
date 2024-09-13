'use client'
import React from "react";

import '../../css/navbar.css';
import Slider from "react-slick";
import Slide from "../slider/Slide";
export function Navbar() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,     
    autoplaySpeed: 3000, 
  };
  const slideData = [
    {
      title: 'Mở bán khóa JavaScript Pro',
      description:
        'Từ 08/08/2024 khóa học sẽ có giá 1.399k (-200k nếu pre-order khóa HTML CSS Pro). Khi full khóa học sẽ trở về giá gốc.',
      imgSrc: '/image/slider1.png',
      altText: 'slider1',
      link: '#',
      background: 'linear-gradient(to right, rgb(138, 10, 255), rgb(96, 6, 255))', // Use background for gradients
    },
    {
      title: 'Lớp Offline tại Hà Nội',
      description:
        'Hình thức học Offline phù hợp nếu bạn muốn được hướng dẫn và hỗ trợ trực tiếp tại lớp. Giờ học linh hoạt, phù hợp cả sinh viên và người đi làm.',
      imgSrc: '/image/slider2.png',
      altText: 'slider2',
      link: '#',
      background: 'linear-gradient(to right, rgb(136, 40, 250), rgb(89, 169, 250))', // Use background for gradients
    },
    {
      title: 'Học HTML CSS cho người mới',
      description:
        'Thực hành dự án với Figma, hàng trăm bài tập và thử thách, hướng dẫn 100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.',
      imgSrc: '/image/slider3.png',
      altText: 'slider3',
      link: '#',
      background: 'linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))', // Use background for gradients
    },
    {
      title: 'Học ReactJS Miễn Phí!',
      description:
        'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
      imgSrc: '/image/slider4.png',
      altText: 'slider4',
      link: '#',
      background: 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))', // Use background for gradients
    },
    {
      title: 'Thành Quả của Học Viên',
      description:
        'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
      imgSrc: '/image/slider5.png',
      altText: 'slider5',
      link: '#',
      background: 'linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))', // Use background for gradients
    },
    // Add more slides as needed
  ];
  return (
    <>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    <div className="relative">
    <nav className="px-6 py-3 nav-fix bg-white">
     <div className="row items-center">
        <div className="col-lg-3 col-2 flex items-center">
         <img className="w-9" src="/image/logo.png" alt="logo" />
          <p className="mb-0 ml-4 font-bold text-black max-[992px]:hidden">Học Lập Trình Để Đi Làm</p>
        </div>
        <div className="col-lg-6 col-6 flex justify-center max-[992px]:justify-start">
          <div className="w-2/3 flex justify-center items-center  input-nav max-[992px]:w-full">
          <img className="search-icon mx-2" src="/image/search.png" alt="" />
          <input className="w-full outline-none" type="text"  placeholder="Tìm kiếm khóa học, bài viết, video..."/>
          </div>
          </div>
          <div className="col-lg-3 col-4 flex justify-end max-[720px]:justify-start">
           <button className="btn-dangky font-bold mr-8  max-[720px]:hidden">Đăng ký</button>
           <button className="btn-dangnhap ">Đăng nhập</button>
          </div>
      </div>
     </nav>
     <div className="pb-12 pt-24 px-12">
     <Slider {...settings}>
        {slideData.map((slide, index) => (
          <Slide
            key={index}
            title={slide.title}
            description={slide.description}
            imgSrc={slide.imgSrc}
            altText={slide.altText}
            link={slide.link}
            background={slide.background} // Pass the background color
          />
        ))}
      </Slider>
      </div>
    </div>
     </>
  );
}