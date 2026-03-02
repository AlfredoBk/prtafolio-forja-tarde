"use client"

import { useEffect, useMemo, useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [console, setError] = useState();
    const error = useMemo(() => {
        return !email.includes("@");
    }, [email]);

    //useEffect(() => {if (email.includes("@")) {}else{ setError(false)} setError(true) }, [email]);

    function getEmail() {
        if (!error) {
            window.open(
                'https://wa.me//5511999999999?text=Entre em contata comigo pelo email ${email}',
            );
        }
    }

    return (
        <main className="w-screen h-screen flex flex-col gap-16 items-center bg-violet-400">
            <h1 className="text-6xl text-white">Contato</h1>

            <div>
                <p className="text-amber-50">Digite seu email  para eu entrar em contato!</p>
                <input type="email" placeholder="Digite seu email" className="border border-white " value={email} onChange={(e) => setEmail(e.target.value)} />
                {error && <p className="text-red-500">Email invalido</p>}
            </div>


            <button className="disabled:cursor-not-allowed text-amber-50 cursor-pointer border border-white py-2 px-10 rounded-full" onClick={() => getEmail()} disabled={error}>Enviar</button>
            
        </main>
    )
}


