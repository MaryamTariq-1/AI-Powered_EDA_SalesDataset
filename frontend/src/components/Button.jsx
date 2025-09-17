export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border border-transparent px-4 py-2 font-medium bg-gray-800 text-white hover:border-indigo-400 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
