import BASE_URL from "./apiService";

interface ICourseService {
  getCourses(): Promise<any[]>;
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
    }
}


export default courseService;
