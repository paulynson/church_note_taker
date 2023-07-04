// import Form from "./features/Form";
import Notes from "./components/Notes";

export default function HomePage() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="min-h-screen">
      <div className="mt-24">
        {/* @ts-expect-error Server Component */}
        <Notes />
      </div>
    </main>
  );
}
