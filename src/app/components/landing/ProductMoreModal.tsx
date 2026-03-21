/**
 * Extra screenshot gallery modal — not mounted on the landing page until we have
 * more assets. To enable: import `ProductMoreModal` in `ProductMockup` below the
 * mockup stack.
 */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { PRODUCT_MODAL_GALLERY } from "@/app/content/productModalGallery";

const screenshotCardClass =
  "rounded-xl overflow-hidden border border-landing-card-border shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(139,148,200,0.08)]";

export function ProductMoreModal() {
  return (
    <Dialog>
      <div className="mt-12 flex justify-center">
        <DialogTrigger asChild>
          <button
            type="button"
            className="btn-landing-secondary px-8 py-3 text-base font-light"
            data-umami-event="product-gallery-open"
          >
            More screenshots
          </button>
        </DialogTrigger>
      </div>
      <DialogContent
        overlayClassName="bg-landing-bg/85 backdrop-blur-[2px]"
        className="max-h-[90vh] max-w-[calc(100%-2rem)] overflow-y-auto border-landing-card-border bg-transparent p-0 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] sm:max-w-5xl [&>button]:text-landing-muted [&>button]:opacity-100 [&>button]:hover:bg-[var(--landing-icon-bg)] [&>button]:hover:text-landing-foreground"
      >
        <DialogTitle className="sr-only">Additional Chinotto screenshots</DialogTitle>
        <DialogDescription className="sr-only">
          Two product screenshots; side by side on wide screens, stacked on small
          screens.
        </DialogDescription>
        <div className="landing-card rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {PRODUCT_MODAL_GALLERY.map((item) => (
              <div key={item.src} className={screenshotCardClass}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="block h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
