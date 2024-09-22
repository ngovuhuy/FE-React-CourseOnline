'use client'
import React, { useEffect, useState } from "react";
import '../../css/navbar.css';
import { Link, useLocation } from "react-router-dom";
import Login from "../login/login";
import Cookies from "js-cookie";
export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(""); // Lưu trữ tên người dùng
  const [showDropdown, setShowDropdown] = useState(false);


  useEffect(() => {
    // Kiểm tra xem cookie đã có thông tin đăng nhập hay chưa
    const userToken = Cookies.get("tokenUser"); // "token" là cookie chứa thông tin đăng nhập
    const userNameFromCookie = Cookies.get("userName"); 
    if (userToken) {
      setIsLoggedIn(true); // Đã đăng nhập
      setUsername(userNameFromCookie || ""); // Lấy tên người dùng từ cookie
    } else {
      setIsLoggedIn(false); // Chưa đăng nhập
    }
  }, []);
  const handleLogout = () => {
    Cookies.remove("tokenUser"); // Xóa token khi đăng xuất
    Cookies.remove("userName"); // Xóa tên người dùng
    Cookies.remove("roleName"); // Xóa tên người dùng
    setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
  };

  const [showPopup, setShowPopup] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  // Hàm để bật tắt hiển thị pop-up
  const handleDangNhapClick = () => {
    setShowPopup(!showPopup); // Đảo trạng thái của pop-up
  };
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
          {!isLoggedIn ? (
        <>
          <button
            className="btn-dangky font-bold mr-8 max-[720px]:hidden"
            onClick={handleDangNhapClick}
          >
            Đăng ký
          </button>
          <button className="btn-dangnhap" onClick={handleDangNhapClick}>
            Đăng nhập
          </button>
        </>
      ) : (
        <>
          {/* <span className="mr-4">Xin chào, {username}!</span>
          <button className="btn-dangxuat" onClick={handleLogout}>
            Đăng xuất
          </button> */}
          <div className="_actions_vdbp4_99">
            <div className="">
            <button className="_myLearn_vdbp4_31" aria-expanded="false">Khóa học của tôi</button>
            </div>
            <div>
              <div className="_actionBtn_vdbp4_112 cursor-pointer">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell _action-icon_vdbp4_107" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path></svg>
              </div>
            </div>
            <div>
              <div className="_avatar-wrapper_vdbp4_124 relative">
                <div className="_avatar_hzxfy_1 cursor-pointer"  onClick={toggleDropdown}>
                <img className="_avatar_vdbp4_124" src="https://files.fullstack.edu.vn/f8-prod/user_photos/282594/63b84e5503bdd.jpg" alt="Huy Ngo" />
                
                </div>
                {showDropdown && (
        <div className="dropdown-content click-avatar">
          <ul className="ul-list">
           <li className="flex items-center pb-3">
            <div className="avatar-min cursor-pointer">
            <img className="" src="https://files.fullstack.edu.vn/f8-prod/user_photos/282594/63b84e5503bdd.jpg" alt="Huy Ngo" />          
            </div>
            <div className="name-text ml-5 cursor-pointer">
              <p className="mb-0">{username}</p>
              <p className="mb-0 _username_12z5x_33">@ngohuy6</p>
            </div>
           </li>
           <hr className="gach-index"></hr>
          
            <li>
              <button className="item-ul" onClick={() => { 
              }}>
                Trang cá nhân
              </button>
            </li>
            <li>
            <hr className="gach-index"></hr>
              <button className="item-ul">
               Viết blog
              </button>
              <button className="item-ul">
               Bài viết của tôi
              </button>
              <button className="item-ul">
               Bài viết đã lưu
              </button>
            </li>
     
            <hr className="gach-index"></hr>
            <li>
            <button className="item-ul">
                Cài đặt
              </button>
              <button className="item-ul" onClick={handleLogout}>
                Đăng xuất
              </button>
            </li>
          </ul>
        </div>
      )}
              </div>

            </div>
          </div>
        </>
      )}
          </div>
      </div>
     </nav>
     
    </div>
    <Login show={showPopup} onClose={handleDangNhapClick} />
     </>
  );
}