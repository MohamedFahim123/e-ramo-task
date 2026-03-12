export function PricingEmpty() {
  return (
    <div className="flex h-[300px] flex-col items-center justify-center rounded-3xl border bg-gray-50">
      <h3 className="text-lg font-semibold">No Packages Available</h3>

      <p className="text-sm text-muted-foreground mt-2">
        Sorry, there are no packages for the selected category.
      </p>

      <button className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-white">
        View Shared Spaces
      </button>
    </div>
  );
}
