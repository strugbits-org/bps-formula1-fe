import { useState, useEffect } from "react";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function useUserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataCookie = getCookie("userData");
    if (userDataCookie) {
      try {
        const parsedUserData = JSON.parse(decodeURIComponent(userDataCookie));
        setUserData(parsedUserData);
      } catch (error) {
        console.error("Error parsing user data from cookie", error);
      }
    }
  }, []);

  return {
    userData,
    id: userData?._id,
    email: userData?.email,
    firstName: userData?.firstName,
    phone: userData?.phone,
    memberId: userData?.memberId,
  };
}

export default useUserData;
