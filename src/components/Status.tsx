import Section from "./Section";
import { Card } from "./ui/card";

export default function Status() {
  return (
    <Section className="flex max-md:flex-col  gap-5 ">
      <Card className="flex-[3] flex flex-col gap-2 p-4">Side project</Card>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="flex-1 p-4 ">Work</Card>
        <Card className="flex-1 p-4">Contact me</Card>
      </div>
    </Section>
  );
}
