import "./index.css";
import { ReactNode } from "react";

interface ReactChildProps {
  children: ReactNode;
}

function ProfileAndTechsSection({ children }: ReactChildProps) {
  return <div className="profileAndTechsSection">{children}</div>;
}

export default ProfileAndTechsSection;
