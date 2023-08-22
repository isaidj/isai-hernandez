import { SkeletonDashboard } from "@/app/components/SkeletonsDashboard";
import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen  flex-col  items-center pt-3 sm:p-24 sm:pt-9 relative bg-gradient-to-r from-black via-gray-900 to-black gap-4">
      <h1 className="text-4xl font-bold">Applications</h1>
      <div className="flex flex-wrap gap-4 mt-4 px-4">
        <SkeletonDashboard />
      </div>
    </div>
  );
};

export default Page;
