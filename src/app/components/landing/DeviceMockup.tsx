/**
 * Device mockups — iPhone frame adapted from Magic UI (MIT)
 * https://magicui.design/docs/components/iphone
 */
import { useId } from "react";
import { cn } from "../ui/utils";
import { screenshotCardClass, mockupCardHoverClass, mockupPhoneHoverClass } from "./ScreenshotFrame";

const PHONE_WIDTH = 433;
const PHONE_HEIGHT = 882;
const SCREEN_X = 21.25;
const SCREEN_Y = 19.25;
const SCREEN_WIDTH = 389.5;
const SCREEN_HEIGHT = 843.5;
const SCREEN_RADIUS = 55.75;

const LEFT_PCT = (SCREEN_X / PHONE_WIDTH) * 100;
const TOP_PCT = (SCREEN_Y / PHONE_HEIGHT) * 100;
const WIDTH_PCT = (SCREEN_WIDTH / PHONE_WIDTH) * 100;
const HEIGHT_PCT = (SCREEN_HEIGHT / PHONE_HEIGHT) * 100;
const RADIUS_H = (SCREEN_RADIUS / SCREEN_WIDTH) * 100;
const RADIUS_V = (SCREEN_RADIUS / SCREEN_HEIGHT) * 100;

/** Black Titanium — tuned for Chinotto dark landing. */
const FRAME = "#2e2e34";
const FRAME_EDGE = "#3f3f46";
const INNER = "#141418";
const ISLAND = "#050507";
const ISLAND_LENS = "#101016";

/** Default width for phone mockups across the landing. */
export const PHONE_MOCKUP_CLASS =
  "w-[min(240px,85vw)] sm:w-[230px] lg:w-[250px]";

const OUTER_BODY =
  "M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z";
const INNER_BODY =
  "M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z";

type DeviceMockupProps = {
  className?: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
  as?: "figure" | "div";
  fillHeight?: boolean;
  /** Off when hover is handled by a parent (e.g. flip button). */
  hoverable?: boolean;
};

function Iphone15ProFrame({
  uid,
  src,
  alt,
}: {
  uid: string;
  src?: string;
  alt: string;
}) {
  const maskId = `${uid}-screenPunch`;
  const hasMedia = Boolean(src);

  return (
    <div
      className="relative inline-block w-full align-middle leading-none"
      style={{ aspectRatio: `${PHONE_WIDTH}/${PHONE_HEIGHT}` }}
    >
      {src ? (
        <div
          className="pointer-events-none absolute z-0 overflow-hidden"
          style={{
            left: `${LEFT_PCT}%`,
            top: `${TOP_PCT}%`,
            width: `${WIDTH_PCT}%`,
            height: `${HEIGHT_PCT}%`,
            borderRadius: `${RADIUS_H}% / ${RADIUS_V}%`,
          }}
        >
          <img
            src={src}
            alt={alt}
            className="block size-full object-cover object-top select-none"
            decoding="async"
            draggable={false}
          />
        </div>
      ) : null}

      <svg
        viewBox={`0 0 ${PHONE_WIDTH} ${PHONE_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 size-full"
        style={{ transform: "translateZ(0)" }}
        aria-hidden
      >
        <g mask={hasMedia ? `url(#${maskId})` : undefined}>
          <path d={OUTER_BODY} fill={FRAME} />
          <path
            d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
            fill={FRAME_EDGE}
          />
          <path
            d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
            fill={FRAME_EDGE}
          />
          <path
            d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
            fill={FRAME_EDGE}
          />
          <path
            d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
            fill={FRAME_EDGE}
          />
          <path d={INNER_BODY} fill={INNER} />
        </g>

        <path
          opacity="0.45"
          d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
          fill={FRAME_EDGE}
        />

        <path
          d={`M${SCREEN_X} 75C${SCREEN_X} 44.2101 46.2101 ${SCREEN_Y} 77 ${SCREEN_Y}H355C385.79 ${SCREEN_Y} 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 ${SCREEN_X} 837.79 ${SCREEN_X} 807V75Z`}
          fill="#1c1c22"
          stroke="#32323a"
          strokeWidth="0.5"
          mask={hasMedia ? `url(#${maskId})` : undefined}
        />

        <path
          d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
          fill={ISLAND}
        />
        <path
          d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
          fill={ISLAND}
        />
        <path
          d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
          fill={ISLAND_LENS}
        />

        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <rect
              x="0"
              y="0"
              width={PHONE_WIDTH}
              height={PHONE_HEIGHT}
              fill="white"
            />
            <rect
              x={SCREEN_X}
              y={SCREEN_Y}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT}
              rx={SCREEN_RADIUS}
              ry={SCREEN_RADIUS}
              fill="black"
            />
          </mask>
        </defs>
      </svg>
    </div>
  );
}

/** Realistic iPhone 15 Pro frame (Magic UI) with in-screen screenshot. */
export function MobilePhoneMockup({
  className = "",
  screenshotSrc,
  screenshotAlt = "Chinotto on iPhone",
  as: Wrapper = "figure",
  fillHeight = false,
  hoverable = true,
}: DeviceMockupProps) {
  const uid = useId().replace(/:/g, "");
  const device = (
    <Iphone15ProFrame uid={uid} src={screenshotSrc} alt={screenshotAlt} />
  );

  const wrapperClass = cn(
    "mx-auto",
    fillHeight ? "h-full w-auto max-w-none" : PHONE_MOCKUP_CLASS,
    hoverable && mockupPhoneHoverClass,
    className,
  );

  if (Wrapper === "div") {
    return (
      <div className={wrapperClass} aria-hidden={screenshotSrc ? undefined : true}>
        {device}
      </div>
    );
  }

  return (
    <figure className={wrapperClass} aria-hidden={screenshotSrc ? undefined : true}>
      {device}
    </figure>
  );
}

type MacWindowMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

/** Desktop screenshot — frame only; capture already includes window chrome. */
export function MacWindowMockup({ src, alt, className }: MacWindowMockupProps) {
  return (
    <figure className={cn("mx-auto w-full", className)}>
      <div className={cn(screenshotCardClass, mockupCardHoverClass)}>
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full select-none"
          decoding="async"
          draggable={false}
        />
      </div>
    </figure>
  );
}

export const IPHONE_ASPECT = PHONE_WIDTH / PHONE_HEIGHT;
