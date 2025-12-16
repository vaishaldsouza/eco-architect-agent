export async function analyzeItem(formData) {
  try {
    const response = await fetch("http://localhost:5000/api/analyze", {
      method: "POST",
      body: formData, // FormData handles 'Content-Type': 'multipart/form-data' automatically
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Server error");
    }

    return await response.json();
  } catch (error) {
    console.error("API Call failed:", error);
    throw error;
  }
}