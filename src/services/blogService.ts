import BASE_URL from "./apiService";

interface IBlogService {
  getBlogs(): Promise<any[]>;
  }

export const blogService:  IBlogService = {
    async getBlogs() {
        try {
            const response = await fetch(`${BASE_URL}/getBlogs`, {
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


export default blogService;
