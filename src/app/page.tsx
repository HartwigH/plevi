import Events from "@/components/Events";
import Header from "@/components/Header";
import TopEvents from "@/components/TopEvents";

export default function Home() {
  return (
    <main className="page">
      <Header />
      <div className="page__container">
        <TopEvents />
        <Events />
      </div>
    </main>
  );
}
