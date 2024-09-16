import { ContentLesson } from "../entities/contentLesson";
import BASE_URL from "./apiService";

interface IContentLessonService {

  getContentLessonByCourseId(id: string): Promise<ContentLesson[]>;   // Lấy khóa học theo id
  }
  export const contentLessonService:  IContentLessonService = {
    getContentLessonByCourseId: async (id: string): Promise<ContentLesson[]> => {
        const response = await fetch(`${BASE_URL}/course/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch course");
        }
        return await response.json();
      }
  }