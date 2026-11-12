import { About } from "@/components/About";
import { ClientWork } from "@/components/ClientWork";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
import { Recognition } from "@/components/Recognition";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <Providers>
      <Nav />
      <main>
        <Hero />
        <Work />
        <ClientWork />
        <Recognition />
        <About />
        <Journey />
        <Skills />
        <Contact />
      </main>
    </Providers>
  );
}
