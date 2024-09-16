export interface ContentLesson {
    contentLessonId: number;
    courseId: number;  // Foreign key từ Course
    title: string;  // Tiêu đề cho từng mục lớn (vd: "Giới thiệu", "Biến và kiểu dữ liệu",...)
    order: number;  // Thứ tự hiển thị của ContentLesson
    createdAt: Date;
    updatedAt: Date;
  }