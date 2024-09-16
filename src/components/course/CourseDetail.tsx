import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../css/course.css';
import useSWR from 'swr';
import courseService from '../../services/courseService';
import { Oval } from 'react-loader-spinner';
import { ContentLesson } from '../../entities/contentLesson';
import { contentLessonService } from '../../services/contentLessionService';
import { LessonService } from '../../services/lessonService';



const CourseDetail = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const { data: course, error:errorCouse } = useSWR<Course>(
    id ? `Course_${id}` : null, // Chỉ fetch dữ liệu khi id hợp lệ
    () => courseService.getCourseById(id as string) // Ép kiểu id về string nếu có giá trị
  );
  const { data: contentLessons, error:errorContentLesson } = useSWR<ContentLesson[]>(
    id ? `ContentLessons_${id}` : null,
    () => contentLessonService.getContentLessonByCourseId(id as string)
  );

  const { data: lessons, error:errorLesson } = useSWR<Lesson[]>(
    id ? `Lessons_${id}` : null,
    () => LessonService.getLessonByContentLessonId(id as string)
  );
  
  const [openContentLessonId, setOpenContentLessonId] = useState<number | null>(null);

  const toggleContentLesson = (contentLessonId: number) => {
    setOpenContentLessonId(openContentLessonId === contentLessonId ? null : contentLessonId);
  };


  const [isOpen, setIsOpen] = useState(false);
  // Hàm toggle để ẩn hoặc hiện nội dung
  const timeStringToMinutes = (timeString:string) => {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return minutes + seconds / 60;
  };

  const formatDuration = (totalMinutes:number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    return `${hours} giờ ${minutes} phút`;
  };

  const totalDurationMinutes = lessons?.reduce((total, lesson) => {
    return total + timeStringToMinutes(lesson.videoDuration);
  }, 0) ?? 0;

  const formattedTotalDuration = formatDuration(totalDurationMinutes);
  if (errorCouse) {
    return <div className="flex justify-center items-center h-screen">
    <Oval
        height={80}
        width={80}
        color="#305A61"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4f9a94"
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
</div>;
  }
  if (errorContentLesson) {
    return <div className="flex justify-center items-center h-screen">
    <Oval
        height={80}
        width={80}
        color="#305A61"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4f9a94"
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
</div>;
  }
  if (errorLesson) {
    return <div className="flex justify-center items-center h-screen">
    <Oval
        height={80}
        width={80}
        color="#305A61"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4f9a94"
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
</div>;
  }
  if (!course) {
    return <div className="flex justify-center items-center h-screen">
    <Oval
        height={80}
        width={80}
        color="#305A61"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4f9a94"
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
</div>;

  }
  if (!contentLessons) {
    return <div className="flex justify-center items-center h-screen">
    <Oval
        height={80}
        width={80}
        color="#305A61"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4f9a94"
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
</div>;

  }
  if (!lessons) {
    return <div className="flex justify-center items-center h-screen">
    <Oval
        height={80}
        width={80}
        color="#305A61"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4f9a94"
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
</div>;

  }
  return (
    <div className='pb-12 pt-24 px-12 max-[400px]:px-4'>
      <div className="row">
        <div className="col-lg-8 col-12">
          <div className="_content_pzdoh_11">
            <div>
              <h1 className="_courseName_pzdoh_152">{course.title}</h1>
              <div className="_textContent_pzdoh_171">{course.description}</div>
            </div>
            <div className="_topicList_pzdoh_178">
              <h2 className="_topicHeading_pzdoh_178">Bạn sẽ học được gì?</h2>
              <section className='index-module_row__-AHgh'>
                <section className='index-module_col__2EQm9 index-module_c-12__u7UXF index-module_m-12__2CxUL index-module_l-12__340Ve'>
                  <ul className="_list_pzdoh_182 undefined">
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                      <span>Biết cách xây dựng giao diện web với HTML, CSS</span>
                    </li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span>Biết cách phân tích giao diện website</span>
                    </li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span>Biết cách đặt tên className CSS theo chuẩn BEM</span>
                    </li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span>Biết cách làm giao diện web responsive</span>
                    </li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span>Làm chủ Flexbox khi dựng bố cục website</span>
                    </li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span>Sở hữu 2 giao diện web khi học xong khóa học</span>
                    </li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span>Biết cách tự tạo động lực cho bản thân</span>
                    </li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span>Biết cách tự học những kiến thức mới</span>
                    </li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span>Học được cách làm UI chỉn chu, kỹ tính</span>
                    </li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span>Nhận chứng chỉ khóa học do F8 cấp</span>
                    </li>
                  </ul>
                </section>
              </section>
            </div>
            <div className="_curriculumOfCourse_1u0ca_1">
              <div className="_headerSticky_1u0ca_215">
                <div className="_headerBlock_1u0ca_154"><h2>Nội dung khóa học</h2></div>
                <div className="_subHeadWrapper_1u0ca_173">
                  <ul>
                    <li className="chuong-none"><strong>{contentLessons.length} </strong> chương</li>
                    <li className="_dot_1u0ca_197 chuong-none">•</li>
                    <li><strong>{lessons.length} </strong> bài học</li>
                    <li className="_dot_1u0ca_197 dot-time-575 ">•</li>
                    <li><span>Thời lượng <strong>{formattedTotalDuration}</strong></span></li>
                  </ul>
                  <div className="_toggleBtn_1u0ca_204 cursor-pointer">Mở rộng tất cả</div>
                </div>
              </div>
              <div className="_curriculumPanel_1u0ca_17">
              {contentLessons.map(contentLesson => (
  <div key={contentLesson.contentLessonId} className="_panel_1u0ca_21">
    <div
      className={`_panelHeading_1u0ca_57 noselect ${openContentLessonId === contentLesson.contentLessonId ? '_activePanel_1u0ca_66' : ''}`}
      onClick={() => toggleContentLesson(contentLesson.contentLessonId)}
    >
      <h5 className="_panelTitle_1u0ca_134 cursor-pointer">
        <div className="_headline_1u0ca_28">
          <strong>{contentLesson.title}</strong>
          <span className="_timeOfSection_1u0ca_6"> 
          {lessons.filter(lesson => lesson.contentLessonId === contentLesson.contentLessonId).length}
     </span>
        </div>
      </h5>
    </div>
    {openContentLessonId === contentLesson.contentLessonId && (
      <div className="_collapse_1u0ca_147 _in_1u0ca_150">
        <div className="_panelBody_1u0ca_79">
        {lessons.filter(lesson => lesson.contentLessonId === contentLesson.contentLessonId)
       .map(lesson => (
            <div key={lesson.lessonId} className="_lessonItem_1u0ca_83">
              <span className="_iconLink_1u0ca_126">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-play"
                  className="svg-inline--fa fa-circle-play _icon_1u0ca_101 _video_1u0ca_111"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                  ></path>
                </svg>
                <div className="_lessonName_1u0ca_130">{lesson.title}</div>
              </span>
              <span>{lesson.videoDuration}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
))}

              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="_purchaseBadge_pzdoh_17">
            <div className="_imgPreview_pzdoh_86 cursor-pointer max-[992px]:hidden">
              <div className="_bg_pzdoh_111" style={{backgroundImage: `url(${course.thumbnailUrl})`}}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-play" className="svg-inline--fa fa-circle-play _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path></svg>
                <p>Xem giới thiệu khóa học</p>
              </div>
            </div>
            <h5 className='max-[992px]:hidden'>{course.price === 0 ? 'Miễn phí' : course.price}</h5>
            <button type="button" className="_wrapper_1kk55_1 _learnNow_pzdoh_53 _primary_1kk55_46 _rounded_1kk55_22">
              <span className="_inner_1kk55_33"><span className="_title_1kk55_61">ĐĂNG KÝ HỌC</span></span>
            </button>
            <ul className="chuong-none">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gauge-high" className="svg-inline--fa fa-gauge-high _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg><span>Trình độ cơ bản</span>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="film" className="svg-inline--fa fa-film _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"></path></svg><span>Tổng số <strong>{lessons.length}</strong> bài học</span>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="svg-inline--fa fa-clock _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg><span>Thời lượng <strong>{formattedTotalDuration}</strong></span>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="battery-full" className="svg-inline--fa fa-battery-full _icon_pzdoh_80" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm368 96H96V320H448V192z"></path></svg><span>Học mọi lúc, mọi nơi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;


