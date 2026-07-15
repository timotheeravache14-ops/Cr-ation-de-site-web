import { SplineSceneBasic } from "@/components/spline-scene-basic";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-center gap-8 py-16 px-6">
        <SplineSceneBasic />
      </main>
    </div>
  );
}
