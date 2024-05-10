// File: Landing.jsx
// Description: React landing Component (landing).

import styled from 'styled-components';

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

// ------------------------------
// Styled Components
// ------------------------------
// This section has all necessary styled components
const StyledLanding = styled.div`
  /* width: 100vw;
  height: 100vh;
  overflow: hidden; */
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Landing() {
  return (
    <StyledLanding>
      <video
        src="/videos/fireworks.mp4"
        type="video/mp4"
        poster="fallback-image.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      ></video>
    </StyledLanding>
  );
}

export default Landing;
