import { useEffect } from "react";

/**
 * Reusable React hook to globally protect the site by disabling right-click
 * and blocking dragging and text selection on logo images.
 */
export function useSiteProtection() {
  useEffect(() => {
    // 1. Disable Right-Click (context menu) globally
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Helper to determine if an element is a logo image
    const isLogoElement = (element: HTMLElement | null): boolean => {
      if (!element) return false;
      
      const tagName = element.tagName.toUpperCase();
      
      // Check if it's an img element or nested inside an image
      if (tagName === "IMG") {
        const img = element as HTMLImageElement;
        const src = img.getAttribute("src") || "";
        const alt = img.getAttribute("alt") || "";
        const className = img.className || "";

        return (
          src.includes("logo") ||
          alt.toLowerCase().includes("logo") ||
          className.includes("site-logo")
        );
      }

      return false;
    };

    // 2. Disable Image Dragging for logo images globally
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (isLogoElement(target)) {
        e.preventDefault();
      }
    };

    // 3. Disable Text Selection for logo images globally
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (isLogoElement(target) || (target && isLogoElement(target.closest("img")))) {
        e.preventDefault();
      }
    };

    // Add event listeners on window for root-level handling
    window.addEventListener("contextmenu", handleContextMenu, { capture: true });
    window.addEventListener("dragstart", handleDragStart, { capture: true });
    window.addEventListener("selectstart", handleSelectStart, { capture: true });

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      window.removeEventListener("dragstart", handleDragStart, { capture: true });
      window.removeEventListener("selectstart", handleSelectStart, { capture: true });
    };
  }, []);
}
