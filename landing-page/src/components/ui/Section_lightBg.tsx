import { Section } from "./Section";

export const Section_lightBg = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="w-full min-h-auto bg-tw_primary/15">
      <Section>{children}</Section>
    </main>
  );
};
