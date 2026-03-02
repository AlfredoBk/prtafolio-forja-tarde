import Card from "@/components/Card";

export default function Projects() {
    return (
        <main className="h-screen w-screen bg-violet-950 flex items-center flex-col gap-4">
            <h1 className="text-6xl mt-4 text-amber-50">Meus projetos</h1>
            
            
            <Card 
            src="/bg.gif"
            title="Jodo do Dino"
            description="Um jogo da velha feito em React"
            href="https://github.com/AlfredoBk/prtafolio-forja-tarde"
            />
            
            <Card 
            src="/bg.webp"
            title="Jodo da velha"
            description="Um jogo da velha feito em React"
            href="https://github.com/AlfredoBk/prtafolio-forja-tarde"
            />
            <Card 
            src="/next.svg"
            title="Portafolio"
            description="Meu portafolio feito em Reac e Next.js"
            href="https://github.com/AlfredoBk/prtafolio-forja-tarde"
            />
            
        </main>
        )

}