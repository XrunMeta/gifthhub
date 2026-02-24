import { useEffect } from "react";
import { useNavigate } from "react-router";

export function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userType = localStorage.getItem("userType");
    if (userType === "user") {
      navigate("/user");
    } else if (userType === "merchant") {
      navigate("/merchant");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return null;
}
