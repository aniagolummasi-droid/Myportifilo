import Particles from "@tsparticles/react";

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Particles
        options={{
          background: {
            color: "#000000"
          },

          fpsLimit: 60,

          particles: {
            color: {
              value: "#00ffff"
            },

            links: {
              enable: true,
              color: "#00ffff",
              opacity: 0.2
            },

            move: {
              enable: true,
              speed: 1
            },

            number: {
              value: 80
            },

            opacity: {
              value: 0.4
            },

            size: {
              value: 2
            }
          }
        }}
      />
    </div>
  );
}