export default function authHeader() {
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr) user = JSON.parse(userStr);

  if (user && user.accessToken) {
    // for Spring Boot back-end
    return { Authorization: "Bearer " + user.accessToken };
    // return { 'x-access-token': user.accessToken };
  } else {
    // for Spring Boot back-end
    return { Authorization: "" };
    // return { 'x-access-token': null };
  }
}
