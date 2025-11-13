import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Convert all oklch() colors in cloned DOM to RGB
function convertOklchInClonedDom(clonedDoc: Document) {
  // Add pdf-safe class to cloned document root
  if (clonedDoc.documentElement) {
    clonedDoc.documentElement.classList.add("pdf-safe");
  }

  // Also inject CSS that overrides all oklch() with RGB
  const style = clonedDoc.createElement("style");
  style.textContent = `
    .pdf-safe, .pdf-safe * {
      color: rgb(36, 36, 36) !important;
      background-color: rgb(255, 255, 255) !important;
      border-color: rgb(235, 235, 235) !important;
    }
  `;
  clonedDoc.head.appendChild(style);

  // Walk through all elements and convert computed oklch() to RGB
  const allElements = clonedDoc.querySelectorAll("*");

  allElements.forEach((element) => {
    const htmlElement = element as HTMLElement;
    const computedStyle = clonedDoc.defaultView?.getComputedStyle(htmlElement);

    if (!computedStyle) return;

    const colorProps = [
      "color",
      "backgroundColor",
      "borderColor",
      "borderTopColor",
      "borderRightColor",
      "borderBottomColor",
      "borderLeftColor",
      "outlineColor",
      "textDecorationColor",
      "columnRuleColor",
    ];

    colorProps.forEach((prop) => {
      const value = computedStyle.getPropertyValue(prop);
      if (value && value.includes("oklch")) {
        // Convert oklch to RGB - simplified for grayscale
        const match = value.match(/oklch\(([^)]+)\)/);
        if (match) {
          const values = match[1].split(/\s+/).map((v) => parseFloat(v.trim()));
          if (values.length >= 1) {
            // For grayscale (chroma < 0.01), convert lightness to RGB
            if (values.length >= 2 && values[1] < 0.01) {
              const gray = Math.round(values[0] * 255);
              htmlElement.style.setProperty(
                prop,
                `rgb(${gray}, ${gray}, ${gray})`,
                "important"
              );
            } else {
              // For colored oklch, approximate to a safe RGB
              const gray = Math.round(values[0] * 255);
              htmlElement.style.setProperty(
                prop,
                `rgb(${gray}, ${gray}, ${gray})`,
                "important"
              );
            }
          }
        }
      }
    });
  });
}

export async function exportAllSlidesToPDF(
  slideRefs: (HTMLDivElement | null)[]
) {
  // Use landscape orientation ("l" instead of "p")
  const pdf = new jsPDF("l", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // Reduced margins for better space utilization
  const margin = 5; // 5mm margin on all sides (reduced from 10mm)
  const contentWidth = pageWidth - margin * 2;
  const contentHeight = pageHeight - margin * 2;

  // Filter only valid DOM elements
  const validSlides = slideRefs.filter(
    (ref): ref is HTMLDivElement => ref !== null
  );

  // 🧩 1️⃣ Temporarily force RGB theme to avoid oklch() color error
  // Add pdf-safe class and wait for CSS to apply
  document.documentElement.classList.add("pdf-safe");
  await new Promise((resolve) => setTimeout(resolve, 100)); // Longer delay for CSS

  for (let i = 0; i < validSlides.length; i++) {
    const slideElement = validSlides[i];
    if (!slideElement) continue;

    // 🧩 2️⃣ Ensure all charts/maps have measurable sizes
    // Sometimes Recharts gives -1 width/height if hidden or not painted yet
    slideElement.style.transform = "scale(1)";
    slideElement.style.opacity = "1";
    slideElement.style.display = "block";

    // Wait a bit for layout to stabilize
    await new Promise((resolve) => requestAnimationFrame(resolve));

    // Get actual dimensions of the slide
    const slideRect = slideElement.getBoundingClientRect();
    const slideWidth = slideElement.scrollWidth || slideRect.width;
    const slideHeight = slideElement.scrollHeight || slideRect.height;

    // 🧩 3️⃣ Render canvas with safe options and convert oklch in cloned DOM
    const canvas = await html2canvas(slideElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      width: slideWidth,
      height: slideHeight,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
      onclone: (clonedDoc) => {
        // Convert all oklch() colors to RGB in the cloned document
        convertOklchInClonedDom(clonedDoc);
      },
    });

    const imgData = canvas.toDataURL("image/png", 1.0);

    // 🧩 4️⃣ Add each slide to PDF
    if (i !== 0) pdf.addPage();

    // Calculate aspect ratio
    const canvasAspectRatio = canvas.width / canvas.height;

    // For landscape PDF, always fit to width first for consistency
    // This ensures all slides have the same width and appear at the same scale
    let finalWidth = contentWidth;
    let finalHeight = contentWidth / canvasAspectRatio;

    // If the slide is too tall and would exceed page height, scale it down
    if (finalHeight > contentHeight) {
      // Scale down proportionally to fit height
      const scaleFactor = contentHeight / finalHeight;
      finalHeight = contentHeight;
      finalWidth = finalWidth * scaleFactor;
    }

    // Position: top-aligned with minimal top margin, centered horizontally
    // This reduces excessive white space, especially for shorter slides
    const xOffset = margin + (contentWidth - finalWidth) / 2;
    const yOffset = margin; // Top-aligned instead of centered vertically

    pdf.addImage(
      imgData,
      "PNG",
      xOffset,
      yOffset,
      finalWidth,
      finalHeight,
      undefined,
      "FAST"
    );
  }

  // 🧩 5️⃣ Restore normal theme
  document.documentElement.classList.remove("pdf-safe");

  pdf.save("Report-Slides.pdf");
}
