type Props = {
  yearly: boolean;
  onChange: (v: boolean) => void;
};

export function PricingToggle({ yearly, onChange }: Props) {
  return (
    <div className="mt-10 flex items-center justify-center" dir={"rtl"}>
      <div className="inline-flex w-full max-w-[540px] flex-col gap-3 rounded-[1.75rem] border border-[#e7ebdf] bg-white/95 p-3 shadow-[0_18px_45px_rgba(31,41,55,0.08)] sm:w-auto sm:flex-row sm:items-center sm:gap-4">
        <div className="grid flex-1 grid-cols-2 rounded-[1.25rem] bg-[#f3f7ef] p-1.5">
          <button
            onClick={() => onChange(false)}
            className={`rounded-[1rem] px-4 py-3 text-sm font-semibold transition-all ${
              !yearly
                ? "bg-white text-[#365327] shadow-[0_10px_22px_rgba(54,83,39,0.12)]"
                : "text-[#6b7567]"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => onChange(true)}
            className={`rounded-[1rem] px-4 py-3 text-sm font-semibold transition-all ${
              yearly
                ? "bg-white text-[#365327] shadow-[0_10px_22px_rgba(54,83,39,0.12)]"
                : "text-[#6b7567]"
            }`}
          >
            Annually
          </button>
        </div>

        <button
          type="button"
          aria-label={`Switch billing to ${yearly ? "monthly" : "annually"}`}
          aria-pressed={yearly}
          onClick={() => onChange(!yearly)}
          className={`relative mx-auto h-11 w-20 shrink-0 rounded-full border transition-colors ${
            yearly
              ? "border-[#365327] bg-[#365327]"
              : "border-[#dbe5d2] bg-[#edf3e7]"
          }`}
        >
          <span
            className={`absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white shadow-md transition-transform ${
              yearly ? "translate-x-10" : "translate-x-1"
            }`}
          />
        </button>

        <div className="flex items-center justify-center">
          <span className="rounded-full bg-[#fff4df] px-3 py-2 text-xs font-semibold text-[#8a6a2f]">
            Save more yearly
          </span>
        </div>
      </div>
    </div>
  );
}
