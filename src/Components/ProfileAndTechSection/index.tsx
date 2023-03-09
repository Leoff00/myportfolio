import "./index.css";
import { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";

interface ReactChildProps {
  children: ReactNode;
}

function ProfileAndTechsSection({ children }: ReactChildProps) {
  return (
    <div className="profileAndTechsSection">
      <Fade cascade damping={0.15}>
        {children}
      </Fade>
    </div>
  );
}

export default ProfileAndTechsSection;
