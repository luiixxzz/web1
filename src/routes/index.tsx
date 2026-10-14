import { createFileRoute } from "@tanstack/react-router";
import { DeskApp } from "@/components/desk/desk-app";
import { getMarket } from "@/lib/market.functions";

export const Route = createFileRoute("/")({
  loader: () => getMarket({ data: { fresh: false } }),
  component: Home,
});

function Home() {
  const market = Route.useLoaderData();
  return <DeskApp initialMarket={market} />;
}
