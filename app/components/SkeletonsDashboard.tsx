"use client";
import { Card, Skeleton } from "@nextui-org/react";
export const SkeletonDashboard = () => {
  return (
    <Card className="w-[400px] h-[500px] space-y-5 p-4 bg-gray-800" radius="lg">
      <Skeleton className="rounded-lg bg-gray-700 h-3/4">
        <div className="h-24 rounded-lg bg-"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 h-2/5 rounded-lg bg-gray-700">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>

        <Skeleton className="w-2/5 rounded-lg bg-gray-700">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};

const CardSimple = () => {
  return (
    <Card className="w-[200px] space-y-5 p-4 bg-zinc-900" radius="lg">
      <Skeleton className="rounded-lg bg-zinc-600">
        <div className="h-24 rounded-lg bg-"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg bg-zinc-600">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg bg-zinc-600">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg bg-zinc-600">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};
