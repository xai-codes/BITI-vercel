import "./DonateHeartLoader.css";

/**
 * Animated CSS heart (loader-style) for the floating donate control.
 * Visual based on the cssload heart pattern; styles live in DonateHeartLoader.css.
 */
export function DonateHeartLoader({ className }: { className?: string }) {
  return (
    <span className={className ? `dhl-root ${className}` : "dhl-root"} aria-hidden>
      <span className="dhl-scale">
        <span className="dhl-main">
          <span className="dhl-heart">
            <span className="dhl-heartL" />
            <span className="dhl-heartR" />
            <span className="dhl-square" />
          </span>
          <span className="dhl-shadow" />
        </span>
      </span>
    </span>
  );
}
