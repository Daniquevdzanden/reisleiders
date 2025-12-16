"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Inloggen() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-5xl/9 font-paytone text-atalenta-paars">
            Inloggen
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="gebruikersnaam"
                className="block text-sm/6 font-medium text-atalenta-donkergrijs"
              >
                Gebruikersnaam
              </label>
              <div className="mt-2">
                <Input
                  id="gebruikersnaam"
                  name="gebruikersnaam"
                  placeholder="gebruikersnaam@atalenta.nl"
                  type="text"
                  // Niet required want anders geeft ie een foutmelding bij lege login
                  required={false}
                  autoComplete="username"
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
                  Wachtwoord
                </label>
              </div>
              <div className="mt-2">
                <Input
                  id="wachtwoord"
                  name="wachtwoord"
                  placeholder="wachtwoord"
                  type="password"
                  // Niet required want anders geeft ie een foutmelding bij lege login
                  required={false}
                  disabled={false}
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div>
              <Button type="submit" text="Inloggen" disabled={false} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
