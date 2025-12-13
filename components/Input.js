export default function Input({
  id,
  name,
  type,
  required,
  autoComplete,
  whiteBackground,
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      autoComplete={autoComplete}
      className={`block w-full rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-3xl px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-[#D1CCE3] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#A99BCC] sm:text-sm/6  ${
        whiteBackground ? "bg-white" : "bg-[#F4F3F8]"
      } `}
    />
  );
}
