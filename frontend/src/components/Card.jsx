export default function Card({ children, className }) {
  return (
    <div className={`bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 ${className}`}>
      {children}
    </div>
  );
}
