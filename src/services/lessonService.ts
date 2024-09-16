import BASE_URL from "./apiService";

interface ILessonService {

    getLessonByContentLessonId(id: string): Promise<Lesson[]>;   // Lấy khóa học theo id
    getTotalLessonsByContentLessonId(id: string): Promise<number>; // Lấy tổng số bài học theo contentLessonId
}
    
    export const LessonService:  ILessonService = {
        getLessonByContentLessonId: async (id: string): Promise<Lesson[]> => {
          const response = await fetch(`${BASE_URL}/contentlesson/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch course");
          }
          return await response.json();
        },
        getTotalLessonsByContentLessonId: async (id: string): Promise<number> => {
            try {
              const response = await fetch(`${BASE_URL}/GetTotalLessons/${id}`);
              if (!response.ok) {
                throw new Error("Failed to fetch total lessons");
              }
              const totalLessons: number = await response.json();
              return totalLessons;
            } catch (error) {
              console.error("Error fetching total lessons:", error);
              throw error;
            }
          }
    }

