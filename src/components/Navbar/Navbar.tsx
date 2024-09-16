'use client'
import React from "react";

import '../../css/navbar.css';
import Slider from "react-slick";
import Slide from "../slider/Slide";
import { Link, useLocation } from "react-router-dom";
export function Navbar() {
  const location = useLocation();  // Lấy URL hiện tại

  // Kiểm tra nếu URL bắt đầu bằng /courses thì đổi nội dung Link thành "Quay lại"
  const isCourseDetailPage = location.pathname.startsWith("/courses");
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
         <Link
  to="/"
  className={`no-underline mb-0 ml-4 font-bold ${isCourseDetailPage ? 'text-slate-600' : 'text-black'} max-[992px]:hidden`}
>
{isCourseDetailPage ? (
    <div className="flex justify-center items-center">
     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left w-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>
     <span className="ml-1 magin-top-2">Quay lại</span>
    </div>
  ) : (
    "Học Lập Trình Để Đi Làm"
  )}
            </Link>
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
     
    </div>
     </>
  );
}