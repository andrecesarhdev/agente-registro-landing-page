
import Abrangencia from "../components/sections/Abrangencia";
import { Beneficios } from "../components/sections/Beneficios";
import Certificados from "../components/sections/Certificados";
import ComoFunciona from "../components/sections/ComoFunciona";
import { Conversao } from "../components/sections/Conversao";
import Duvidas from "../components/sections/Duvidas";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <>
      <section id="inicio" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="beneficios" className="scroll-mt-24"> 
        <Beneficios />
      </section>

      <section id="como-funciona" className="scroll-mt-24">
        <ComoFunciona />
      </section>

      <section id="certificados" className="scroll-mt-24">
        <Certificados />
      </section>

      <section id="conversao" className="scroll-mt-24">
        <Conversao />
      </section>

      <section id="duvidas" className="scroll-mt-24">
        <Duvidas />
      </section>
      <section id="duvidas" className="scroll-mt-24">
        <Abrangencia />
      </section>
    </>
  );
}
