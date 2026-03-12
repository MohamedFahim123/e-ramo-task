export function ListingCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-[#e9ecef] bg-white">
      <div className="h-[210px] w-full bg-gray-200" />

      <div className="p-4 space-y-4">
        <div className="flex justify-between">
          <div className="h-5 w-24 rounded bg-gray-200" />
          <div className="h-5 w-16 rounded bg-gray-200" />
        </div>

        <div className="h-6 w-3/4 rounded bg-gray-200" />

        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>

        <div className="flex justify-between">
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-4 w-12 rounded bg-gray-200" />
        </div>

        <div className="flex justify-between pt-2 border-t">
          <div className="h-4 w-32 rounded bg-gray-200" />
          <div className="h-4 w-6 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
