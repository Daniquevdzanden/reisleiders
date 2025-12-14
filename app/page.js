import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-5xl/9 font-paytone text-atalenta-paars">
            Inloggen
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
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
                  type="text"
                  required={true}
                  autoComplete="username"
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
                  type="password"
                  required={true}
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
