import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button variant="outline">Hello world</Button>
      </main>
    </Layout>
  );
}
