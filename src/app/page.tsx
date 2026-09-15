import { SiteFooter } from "@/components/blocks/SiteFooter";
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { footer, stageContent, stages } from "@/content";

// Interim index: replaced by the explanatory document.
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Container className="flex flex-col gap-6 py-10 md:py-16">
          <h1 className="h1 font-bold">Pillar Conversion System</h1>
          <ul className="flex flex-col gap-3 md:flex-row">
            {stages.map((stage) => (
              <li key={stage}>
                <Button href={`/lp/${stage}`} variant="secondary" className="w-full md:w-auto">
                  {stageContent[stage].hero.eyebrow}
                </Button>
              </li>
            ))}
            <li>
              <Button href="/preview" variant="secondary" className="w-full md:w-auto">
                /preview
              </Button>
            </li>
          </ul>
        </Container>
      </main>
      <SiteFooter content={footer} />
    </>
  );
}
