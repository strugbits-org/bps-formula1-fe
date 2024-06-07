"use client";
import { markPageLoaded } from "@/utils/AnimationFunctions";
import Error404Page from "@/components/Error404Page";

export default function Page() {
  markPageLoaded();

  return <Error404Page />;
}
