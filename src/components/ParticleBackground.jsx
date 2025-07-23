import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#0d0d0d", // Deep dark background
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 60,     // Lowered from 120 to make it subtle
              duration: 0.2,     // Shorter duration = smoother response
              speed: 0.5,        // (optional) if your version supports it
            },
            push: {
              quantity: 4,
            },
          },
        },

        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#00FFFF", "#FF69B4", "#FFD700", "#7CFC00", "#FF4500"], // multiple vibrant colors
          },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: { min: 0.5, max: 1.5 },
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
            trail: {
              enable: false,
              length: 10,
              fillColor: "#000",
            },
          },
          shape: {
            type: ["circle", "triangle", "star", "polygon"],
          },
          size: {
            value: { min: 1, max: 6 },
            random: true,
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.3,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
