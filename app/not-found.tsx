import Link from "next/link";
import { Container } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground mb-8">Page not found.</p>
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
    </Container>
  );
}
