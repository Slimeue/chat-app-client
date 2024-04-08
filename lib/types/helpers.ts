export const getAuthToken = () => {
  try {
    return localStorage.getItem("token") || "";
  } catch (e) {
    return "";
  }
};
