import { Header } from "./components/Header";
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
      </div>
    </>
  );
}
