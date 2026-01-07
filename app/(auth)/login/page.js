"use client"; // Dit geeft aan dat dit een client-side component is (dus draait in de browser)

import { useRouter } from "next/navigation"; // Haalt de router op om pagina's te kunnen navigeren
import Button from "@/components/Button"; // Import van een herbruikbare Button component
import Input from "@/components/Input"; // Import van een herbruikbare Input component

export default function Inloggen() {
  const router = useRouter(); // Maakt een router-object aan zodat we naar andere pagina's kunnen navigeren

  // Functie die wordt uitgevoerd als het formulier wordt ingediend
  const handleSubmit = (e) => {
    e.preventDefault(); // Voorkomt dat de pagina herlaadt bij het versturen van het formulier
    router.push("/home"); // Stuurt de gebruiker door naar de /home pagina
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        {/* Centraal geplaatste container voor het inlogformulier */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Container voor de titel */}
          <h2 className="mt-10 text-center text-5xl/9 font-paytone text-atalenta-paars">
            Inloggen {/* Titel van de pagina */}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Container voor het formulier */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Formulier dat handleSubmit aanroept bij submit */}

            <div>
              <label
                htmlFor="gebruikersnaam"
                className="block text-sm/6 font-medium text-atalenta-donkergrijs"
              >
                Gebruikersnaam {/* Label voor het gebruikersnaamveld */}
              </label>
              <div className="mt-2">
                <Input
                  id="gebruikersnaam"
                  name="gebruikersnaam"
                  placeholder="gebruikersnaam@atalenta.nl" // Voorbeeld placeholder
                  type="text" // Tekstveld
                  required={false} // Niet verplicht om te vullen
                  autoComplete="username" // Browser kan gebruikersnaam onthouden
                  className="sm:text-sm placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="wachtwoord"
                  className="block text-sm/6 font-medium text-atalenta-donkergrijs"
                >
                  Wachtwoord {/* Label voor het wachtwoordveld */}
                </label>
              </div>
              <div className="mt-2">
                <Input
                  id="wachtwoord"
                  name="wachtwoord"
                  placeholder="wachtwoord" // Placeholder tekst
                  type="password" // Vult het veld met sterretjes i.p.v. echte tekst
                  required={false} // Niet verplicht om te vullen
                  disabled={false} // Het veld is actief
                  autoComplete="current-password" // Browser kan wachtwoord onthouden
                />
              </div>
            </div>

            <div>
              {/* Submit knop */}
              <Button type="submit" text="Inloggen" disabled={false} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
