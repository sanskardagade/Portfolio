import { useEffect, useRef } from 'react';

function MouseGradient() {
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);
  const tertiaryRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (primaryRef.current) {
        primaryRef.current.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      }
      if (secondaryRef.current) {
        secondaryRef.current.style.transform = `translate(${currentX - 250 + 80}px, ${currentY - 250 - 60}px)`;
      }
      if (tertiaryRef.current) {
        tertiaryRef.current.style.transform = `translate(${currentX - 200 - 100}px, ${currentY - 200 + 80}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="mouse-gradient">
      <div ref={primaryRef} className="mouse-gradient-blob mouse-gradient-blob--primary" />
      <div ref={secondaryRef} className="mouse-gradient-blob mouse-gradient-blob--secondary" />
      <div ref={tertiaryRef} className="mouse-gradient-blob mouse-gradient-blob--tertiary" />
    </div>
  );
}

export default MouseGradient;
