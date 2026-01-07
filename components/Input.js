export default function Input({
  id, // unieke ID voor het input-element
  name, // naam van het input-element, wordt gebruikt bij forms
  type, // type input, bv. "text", "password", "email"
  required, // boolean: verplicht veld of niet
  autoComplete, // browser autocomplete suggesties, bv. "username", "current-password"
  whiteBackground, // boolean: bepaalt of de achtergrond wit is of lichtgrijs
  disabled, // boolean: maakt het inputveld niet klikbaar/bewerkbaar
  placeholder, // tijdelijke tekst in het inputveld
  value, // huidige waarde van het inputveld
  onChange, // functie die wordt uitgevoerd bij waarde verandering
  className = "", // extra CSS-klassen die optioneel meegegeven kunnen worden
  ...rest // andere props die je wilt doorgeven
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        block w-full
        rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-3xl
        px-3 py-1.5 text-base text-gray-900
        outline-1 -outline-offset-1 outline-[#D1CCE3]
        placeholder:text-gray-400
        focus:outline-2 focus:-outline-offset-2 focus:outline-[#A99BCC]
        sm:text-sm/6
        disabled:bg-[#C5C4C4] disabled:outline-none
        ${whiteBackground ? "bg-white" : "bg-[#F4F3F8]"} /* achtergrondkleur */
        ${className} /* extra classes */
      `}
      {...rest}
    />
  );
}
