import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <Container className="flex items-center py-4">
        <Image src="/logo.svg" alt="Pillar" width={128} height={40} priority />
      </Container>
    </header>
  );
}
