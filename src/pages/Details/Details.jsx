import { useNavigate } from "react-router-dom";
import BackButton from "./components/BackButton";
import Info from "./components/Info";

export default function Details() {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <BackButton handleBackNavigation={handleBackNavigation} />
      <Info/>
    </>
  );
}
