import { Header } from "./components/Header";
import { ProductionHouse } from "./components/ProductionHouse";
import { Slider } from "./components/Slider";

export default function App() {
  return (
    <>
      <div className="bg-slate-800 w-screen h-screen">
        <section className="header">
          <Header />
        </section>
        <section className="slider">
          <Slider />
        </section>
        <section>
          <ProductionHouse />
        </section>
      </div>
    </>
  );
}
