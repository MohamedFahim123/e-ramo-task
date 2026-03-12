type Props = {
  active: string;
  setActive: (v: "shared" | "private" | "meeting" | "desk") => void;
};

const items = [
  { id: "shared", label: "Shared Space" },
  { id: "private", label: "Private Offices" },
  { id: "meeting", label: "Meeting Rooms" },
  { id: "desk", label: "Dedicated Desk" },
];

export function PricingSidebar({ active, setActive }: Props) {
  return (
    <div className="rounded-[2rem] border border-[#e7ebdf] bg-white p-4 shadow-[0_20px_45px_rgba(31,41,55,0.08)] sm:p-6">
      <h3 className="mb-4 font-semibold">Select From The Upcoming Options</h3>

      <div className="grid grid-cols-2 gap-3 lg:block lg:space-y-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id as "shared" | "private" | "meeting" | "desk")}
            className={`relative min-w-0 overflow-hidden rounded-2xl px-3 py-3 text-center text-sm font-medium transition-all duration-300 lg:w-full lg:px-4 lg:py-4
            ${
              active === item.id
                ? "bg-gradient-to-r from-[#98af8d] to-[#365327] text-white shadow-[0_18px_35px_rgba(54,83,39,0.28)]"
                : "border border-[#e7ebdf] bg-[#f8faf5] text-[#52614c] hover:bg-gray-100"
            }`}
          >
            <span className="block break-words leading-5">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(219,234,254,0.8),rgba(240,249,255,1))] p-4 text-xs text-blue-600">
        <b>Pro Tip</b>
        <p className="mt-1 break-words leading-5">
          Annual plans offer better value with up to 20% savings compared to
          monthly billing
        </p>
      </div>
    </div>
  );
}
