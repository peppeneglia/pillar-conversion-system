import { SiteFooter } from "@/components/blocks/SiteFooter";
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { footer, headerCta } from "@/content";

// noindex, nofollow is inherited from the root layout metadata.
export default function LandingLayout({ children }: LayoutProps<"/lp">) {
  return (
    <>
      <SiteHeader cta={headerCta} sticky />
      {children}
      <SiteFooter content={footer} showCta />
    </>
  );
}
