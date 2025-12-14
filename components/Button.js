export default function Button({ type, text, disabled }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="flex gap-2 cursor-pointer items-center rounded-tl-2xl rounded-tr-xl rounded-br-lg rounded-bl-md bg-[#61B55B] px-5 py-1.5 text-sm font-semibold text-white shadow-md shadow-[#488843] hover:bg-[#489B42] active:bg-[#368B30] disabled:bg-[#C5C4C4] disabled:cursor-default disabled:shadow-none"
    >
      <div>{text}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="size-4"
      >
        <rect width="256" height="256" fill="none" />
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <polyline
          points="144 56 216 128 144 200"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
      </svg>
    </button>
  );
}
