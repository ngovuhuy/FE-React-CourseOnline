import BASE_URL from "./apiService";

interface ICourseService {
  getCourses(): Promise<any[]>;
  getCourseById(id: string): Promise<Course>;   // Lấy khóa học theo id
  }

export const courseService:  ICourseService = {
    async getCourses() {
        try {
            const response = await fetch(`${BASE_URL}/getCourses`, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (!response.ok) {
              throw new Error("Failed to fetch tour list");
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Error fetching tour list:", error);
            throw error;
          }
    },
    getCourseById: async (id: string) => {
      const response = await fetch(`${BASE_URL}/getCourseById/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch course");
      }
      return await response.json();
    }
}


export default courseService;
