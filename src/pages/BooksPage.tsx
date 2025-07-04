import Button from "@/components/ui/Button";

export default function BooksPage() {
  return (
    <div className="space-y-4 p-8">
      <h1 className="text-title-1 mb-4">BooksPage</h1>
      <div className="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="fill">Fill</Button>
      </div>
    </div>
  );
}
