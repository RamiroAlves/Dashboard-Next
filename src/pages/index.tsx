import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}
    >
      <p>Hello World!</p>
    </main>
  );
}
