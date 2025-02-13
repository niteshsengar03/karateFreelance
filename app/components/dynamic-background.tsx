// "use client";

// import { useEffect, useRef } from "react";

// export function DynamicBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return; // Ensure canvas is not null

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return; // Ensure ctx is not null

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles: Particle[] = [];
//     const particleCount = 100;

//     class Particle {
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       canvas: HTMLCanvasElement; // Store canvas reference

//       constructor(canvas: HTMLCanvasElement) {
//         this.canvas = canvas; // Assign canvas instance
//         this.x = Math.random() * this.canvas.width;
//         this.y = Math.random() * this.canvas.height;
//         this.size = Math.random() * 5 + 1;
//         this.speedX = Math.random() * 3 - 1.5;
//         this.speedY = Math.random() * 3 - 1.5;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > this.canvas.width) this.x = 0;
//         else if (this.x < 0) this.x = this.canvas.width;

//         if (this.y > this.canvas.height) this.y = 0;
//         else if (this.y < 0) this.y = this.canvas.height;
//       }

//       draw(ctx: CanvasRenderingContext2D) {
//         ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//       }
//     }

//     function init() {
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle(canvas));
//       }
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < particles.length; i++) {
//         particles[i].update();
//         particles[i].draw(ctx);
//       }
//       requestAnimationFrame(animate);
//     }

//     init();
//     animate();

//     const handleResize = () => {
//       if (!canvas) return; // Ensure canvas is still valid on resize
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
// }
