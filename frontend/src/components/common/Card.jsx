// src/components/common/Card.jsx
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
      {children}
    </div>
  );
}
