import Particles from "@tsparticles/react";

export default function NeonBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        className="h-full w-full"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: ["#10b981", "#34d399", "#ffffff"] },
            links: {
              enable: true,
              color: "#10b981",
              opacity: 0.18,
              distance: 150,
            },
            move: {
              enable: true,
              speed: 0.72,
              outModes: { default: "bounce" },
            },
            number: {
              value: 92,
              density: { enable: true },
            },
            opacity: { value: { min: 0.12, max: 0.58 } },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
            },
            modes: {
              grab: {
                distance: 170,
                links: { opacity: 0.3 },
              },
            },
          },
        }}
      />
    </div>
  );
}
