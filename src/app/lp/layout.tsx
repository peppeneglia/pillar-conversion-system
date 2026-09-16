import { SiteFooter } from "@/components/blocks/SiteFooter";
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { getPreferences } from "@/lib/server-preferences";
import { getContent } from "@/content";

// noindex, nofollow is inherited from the root layout metadata.
export default async function LandingLayout({ children }: LayoutProps<"/lp">) {
  const { locale, theme } = await getPreferences();
  const content = getContent(locale);

  return (
    <>
      <SiteHeader ui={content.ui} cta={content.headerCta} sticky />
      {children}
      <SiteFooter
        content={content.footer}
        ui={content.ui}
        locale={locale}
        theme={theme}
        landing
      />
    </>
  );
}
