// import Form from "./features/Form";
import Notes from "./components/Notes";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="mt-24">
        {/* @ts-expect-error Server Component */}
        <Notes />
      </div>
    </main>
  );
}
