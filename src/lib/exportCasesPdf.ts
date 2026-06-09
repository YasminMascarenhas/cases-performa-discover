import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import type { CaseItem } from "@/data/cases";

const RENDER_WIDTH = 1180;

const waitForImages = (doc: Document) =>
  Promise.all(
    Array.from(doc.images).map((img) =>
      img.complete && img.naturalHeight !== 0
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          }),
    ),
  );

const loadRoute = (iframe: HTMLIFrameElement, src: string) =>
  new Promise<void>((resolve) => {
    const handler = () => {
      iframe.removeEventListener("load", handler);
      resolve();
    };
    iframe.addEventListener("load", handler);
    iframe.src = src;
  });

export async function exportCasesPdf(selected: CaseItem[]) {
  if (selected.length === 0) return;

  // Group by company, preserving order of first appearance
  const groups: { company: string; items: CaseItem[] }[] = [];
  const idx = new Map<string, number>();
  for (const c of selected) {
    if (!c.slug) continue;
    if (!idx.has(c.company)) {
      idx.set(c.company, groups.length);
      groups.push({ company: c.company, items: [c] });
    } else {
      groups[idx.get(c.company)!].items.push(c);
    }
  }

  const iframe = document.createElement("iframe");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.cssText = `position:fixed;left:-99999px;top:0;width:${RENDER_WIDTH}px;height:900px;border:0;visibility:hidden;`;
  document.body.appendChild(iframe);

  const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();

  let firstPage = true;

  try {
    for (const group of groups) {
      for (let i = 0; i < group.items.length; i++) {
        const item = group.items[i];
        if (!item.slug) continue;
        const hideHeader = i > 0;
        const url = `/case/${item.slug}?pdf=1${hideHeader ? "&nohdr=1" : ""}`;
        await loadRoute(iframe, url);
        const idoc = iframe.contentDocument!;
        // give React a tick to commit + apply body classes
        await new Promise((r) => setTimeout(r, 250));
        await waitForImages(idoc);
        await new Promise((r) => setTimeout(r, 200));

        const target = idoc.body;
        const canvas = await html2canvas(target, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          windowWidth: RENDER_WIDTH,
          width: RENDER_WIDTH,
          height: target.scrollHeight,
        });

        const imgW = pageW;
        const imgH = (canvas.height * pageW) / canvas.width;
        const imgData = canvas.toDataURL("image/jpeg", 0.92);

        if (!firstPage) pdf.addPage();
        firstPage = false;

        let heightLeft = imgH;
        let position = 0;
        pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
        heightLeft -= pageH;
        while (heightLeft > 0) {
          position = heightLeft - imgH;
          pdf.addPage();
          pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
          heightLeft -= pageH;
        }
      }
    }

    pdf.save("cases-performa-it.pdf");
  } finally {
    document.body.removeChild(iframe);
  }
}
