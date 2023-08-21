import { SkeletonDashboard } from "@/components/SkeletonsDashboard";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Applications</h1>
      <div className="flex flex-wrap gap-4 mt-4 px-4">
        <SkeletonDashboard />
      </div>
    </div>
  );
};

export default Page;
