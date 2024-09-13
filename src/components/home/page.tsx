// src/home/HomePage.tsx
import React from 'react';
import '../../css/home.css';
import { Link } from 'react-router-dom';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const HomePage: React.FC = () => {

    return (
        <div className='container'>
          <h2 className='h2-heading'>
            <span className=''>Khóa học Pro
            <span className="label_span">Mới</span>
            </span>
          
          </h2>
        <div className="row pb-8">
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a></h3>
                <div className="_price_ptypy_15">
                    <span className="_old-price_ptypy_29">2.500.000đ</span>
                    <span className="_main-price_ptypy_34">1.299.000đ</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>116h44p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">Ngôn ngữ Sass</a></h3>
                <div className="_price_ptypy_15">
                    <span className="_old-price_ptypy_29">400.000đ</span>
                    <span className="_main-price_ptypy_34">299.000đ</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1  avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" title="so luong vi deo">
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>6h18p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">JavaScript Pro</a></h3>
                <div className="_price_ptypy_15">
                    <span className="_old-price_ptypy_29">3.200.000đ</span>
                    <span className="_main-price_ptypy_34">1.399.000đ</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" title="so luong vi deo">
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>19h46p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
        </div>
        <h2 className='h2-heading'>
            <span className=''>Khóa học miễn phí
            </span>
          </h2>
          <div className="row pb-8">
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">HTML CSS Pro</a></h3>
                <div className="_price_ptypy_15">
                  
                    <span className="_main-price_ptypy_34">Miễn phí</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>116h44p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">Ngôn ngữ Sass</a></h3>
                <div className="_price_ptypy_15">
                <span className="_main-price_ptypy_34">Miễn phí</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1  avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" title="so luong vi deo">
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>6h18p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">JavaScript Pro</a></h3>
                <div className="_price_ptypy_15">
                <span className="_main-price_ptypy_34">Miễn phí</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" title="so luong vi deo">
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>19h46p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/3.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">Responsive Với Grid System</a></h3>
                <div className="_price_ptypy_15">
                <span className="_main-price_ptypy_34">Miễn phí</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" title="so luong vi deo">
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>19h46p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/1.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">Lập Trình JavaScript Cơ Bản</a></h3>
                <div className="_price_ptypy_15">
                <span className="_main-price_ptypy_34">Miễn phí</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" title="so luong vi deo">
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>19h46p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/12.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/"><a href="/courses/javascript-nang-cao" target="_self">Lập Trình JavaScript Nâng Cao</a></a></h3>
                <div className="_price_ptypy_15">
                <span className="_main-price_ptypy_34">Miễn phí</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" title="so luong vi deo">
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>19h46p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">Làm việc với Terminal & Ubuntu</a></h3>
                <div className="_price_ptypy_15">
                <span className="_main-price_ptypy_34">Miễn phí</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" title="so luong vi deo">
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>19h46p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25" src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/">Xây Dựng Website với ReactJS</a></h3>
                <div className="_price_ptypy_15">
                <span className="_main-price_ptypy_34">Miễn phí</span>
                    </div>
                    <div className="_moreInfo_ptypy_68">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" title="so luong vi deo">
                          <img className='play' src="/image/play.png" alt="playvideo" />
                            <span>590</span>
                            </div>   
                            <div className="_infoItem_ptypy_1" title="so luong vi deo">
                          <img className='play' src="/image/clock.png" alt="playvideo" />
                            <span>19h46p</span>
                            </div>   
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
        </div>
        <h2 className='h2-heading'>
            <span className=''>Bài viết nổi bật
            </span>
          </h2>
          <div className="row pb-8">
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25 h-40 w-full" src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/"><a href="/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8" target="_self">Tổng hợp các sản phẩm của học viên tại F8</a></a></h3>
                    <div className="_moreInfo_ptypy_68-author">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                            <span className="d-xl-block avatar-none ">·</span>
                            <span>6 phút đọc</span>
                            </div>   
                           
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25 h-40 w-full" src="https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/"><a href="/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8" target="_self">[Phần 1] Tạo dự án ReactJS với Webpack và Babel</a></a></h3>
                    <div className="_moreInfo_ptypy_68-author">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="/image/sondang.png"/>
                            </div>
                            <span>Sơn Đặng</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                            <span className="d-xl-block avatar-none ">·</span>
                            <span>12 phút đọc</span>
                            </div>   
                           
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25 h-40 w-full" src="https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/"><a href="/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8" target="_self">Cách đưa code lên GitHub và tạo GitHub Pages</a></a></h3>
                    <div className="_moreInfo_ptypy_68-author">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg"/>
                            </div>
                            <span>khadev27</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                            <span className="d-xl-block avatar-none ">·</span>
                            <span>4 phút đọc</span>
                            </div>   
                           
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25 h-40 w-full" src="https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c6453456e.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/"><a href="/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8" target="_self">Ký sự ngày thứ 25 học ở F8 </a></a></h3>
                    <div className="_moreInfo_ptypy_68-author">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="https://fullstack.edu.vn/assets/fallback-avatar-BFb1fhaR.jpg"/>
                            </div>
                            <span>Sơn Sơn</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                            <span className="d-xl-block avatar-none ">·</span>
                            <span>1 phút đọc</span>
                            </div>   
                           
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25 h-40 w-full" src="https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f3685814.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/"><a href="/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8" target="_self">Các nguồn tài nguyên hữu ích cho 1 front-end developer</a></a></h3>
                    <div className="_moreInfo_ptypy_68-author">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="https://fullstack.edu.vn/assets/fallback-avatar-BFb1fhaR.jpg"/>
                            </div>
                            <span>Dương Vương</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                            <span className="d-xl-block avatar-none ">·</span>
                            <span>2 phút đọc</span>
                            </div>   
                           
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25 h-40 w-full" src="https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/61b6368983c16.jpg" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/"><a href="/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8" target="_self">Thời gian và Động lực</a></a></h3>
                    <div className="_moreInfo_ptypy_68-author">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="https://files.fullstack.edu.vn/f8-prod/user_avatars/9143/6263caafdf588.jpg"/>
                            </div>
                            <span>Dong Ngo</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                            <span className="d-xl-block avatar-none ">·</span>
                            <span>6 phút đọc</span>
                            </div>   
                           
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25 h-40 w-full" src="https://files.fullstack.edu.vn/f8-prod/blog_posts/273/614043e523ad9.png" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/"><a href="/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8" target="_self">Tổng hợp tài liệu tự học tiếng anh cơ bản.</a></a></h3>
                    <div className="_moreInfo_ptypy_68-author">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="https://files.fullstack.edu.vn/f8-prod/user_avatars/74901/626aa252cdb22.jpg"/>
                            </div>
                            <span>Trung Lê Thành</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                            <span className="d-xl-block avatar-none ">·</span>
                            <span>10 phút đọc</span>
                            </div>   
                           
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-8">
            <div className="_wrapper_101pg_1 _courseItem_ceh3w_11">
                <a href="_link_101pg_16{">
                <img className="_thumb_101pg_25 h-40 w-full" src="https://files.fullstack.edu.vn/f8-prod/blog_posts/791/615de64de7e8f.jpg" alt="HTML CSS Pro"></img>
                </a>
                <div className="_content_101pg_34">
                <h3 className="_title_101pg_52"><a target="_self" href="/landing/htmlcss/"><a href="/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8" target="_self">Học như thế nào là phù hợp ?</a></a></h3>
                    <div className="_moreInfo_ptypy_68-author">
                    <div className="_infoItem_ptypy_1 avatar-none" title="Người hướng dẫn: Sơn Đặng">
                        <div className="_avatar_hzxfy_1">
                            <img className='avatar-huy ' src="https://fullstack.edu.vn/assets/fallback-avatar-BFb1fhaR.jpg"/>
                            </div>
                            <span>Ngoc Tien Pham</span>
                            </div>
                            <div className="_infoItem_ptypy_1 dis-none" >
                            <span className="d-xl-block avatar-none ">·</span>
                            <span>4 phút đọc</span>
                            </div>   
                           
                    </div>
                    <div className="_pro-icon_ptypy_57">
                        <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e" alt=""/>
                        </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default HomePage;

// const { data: blogList, error } = useSWR(
//     "blogList",
//     () => blogService.getBlogs()
//   );
// if (error) return <div>Failed to load</div>;
// if (!blogList) return <div>Loading...</div>;
                {/* {blogList.map((blog, index) => (
<div className=" key={index} w-1/3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-4">
    <a href="#">
        <img className="rounded-t-lg w-full" src="{blog.image}" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
   ))} */}