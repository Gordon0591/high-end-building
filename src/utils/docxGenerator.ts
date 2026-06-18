import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle, Header, Footer, PageNumber, ImageRun } from 'docx';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { useSolutionStore } from '@/store/useSolutionStore';
import { getProductRecord, getSpaceRecord, getSeriesRecord } from '@/utils/filterLogic';
import { CONSTRUCTION_PROCESSES } from '@/data/constructionProcesses';
import { PROCESS_PRODUCT_MAP } from '@/data/mappings';

async function fetchImageBuffer(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch { return null; }
}

export async function generateAndDownloadDocx(): Promise<void> {
  const state = useSolutionStore.getState();
  const { selectedSpace, confirmedProducts } = state;
  const space = selectedSpace ? getSpaceRecord(selectedSpace) : undefined;
  if (!space || confirmedProducts.length === 0) return;

  const now = new Date();
  const timeStr = format(now, 'yyyy年MM月dd日 HH:mm', { locale: zhCN });
  const codeStr = `SIKA-${selectedSpace}-${format(now, 'yyyyMMddHHmm')}`;
  // Fetch building diagrams
  const [diagram1Buf, diagram2Buf] = await Promise.all([
    fetchImageBuffer(`${import.meta.env.BASE_URL}images/diagrams/${selectedSpace}.jpg`),
    fetchImageBuffer(`${import.meta.env.BASE_URL}images/diagrams/${selectedSpace}2.jpg`),
  ]);

  // Fetch product images
  const productImages = new Map<string, ArrayBuffer | null>();
  await Promise.all(
    [...new Set(confirmedProducts)].map(async (pid) => {
      const p = getProductRecord(pid);
      if (p) productImages.set(pid, await fetchImageBuffer(import.meta.env.BASE_URL + p.imagePath));
    })
  );

  // Derive flow steps from confirmed products
  const seen = new Set<string>();
  const flowSteps: { label: string; description: string }[] = [];
  for (const pid of confirmedProducts) {
    const mapping = PROCESS_PRODUCT_MAP.find(m => m.productId === pid);
    const product = getProductRecord(pid);
    const processId = mapping?.processId ?? product?.processId;
    if (processId && !seen.has(processId)) {
      seen.add(processId);
      const record = CONSTRUCTION_PROCESSES.find(p => p.id === processId);
      flowSteps.push({ label: record?.label ?? String(processId), description: record?.description ?? '' });
    }
  }

  const children: (Paragraph | Table)[] = [];

  // === Title block ===
  children.push(
    new Paragraph({ spacing: { before: 400 }, children: [] }),
    new Paragraph({ heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: `西卡墅造 · ${space.label} 技术方案说明书`, size: 44, bold: true, color: 'FFD100', font: 'Microsoft YaHei' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: `方案编号：${codeStr}    生成时间：${timeStr}`, size: 20, color: '888888', font: 'Microsoft YaHei' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: `建筑空间：${space.label}    产品方案：${confirmedProducts.length} 个产品`, size: 20, color: '888888', font: 'Microsoft YaHei' })] }),
    new Paragraph({ spacing: { before: 100, after: 200 }, border: { top: { style: BorderStyle.SINGLE, size: 4, color: 'FFD100' } }, children: [] }),
  );

  // === Section 1: Building Diagram ===
  children.push(
    new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 200, after: 200 }, children: [new TextRun({ text: '一、建筑构造示意图', size: 32, bold: true, color: 'FFD100', font: 'Microsoft YaHei' })] }),
  );
  // Diagram 1
  if (diagram1Buf) {
    children.push(
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new ImageRun({ data: diagram1Buf, transformation: { width: 480, height: 320 }, type: 'jpg' })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: '构造图一', size: 20, color: '888888', font: 'Microsoft YaHei' })] }),
    );
  }
  // Diagram 2
  if (diagram2Buf) {
    children.push(
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new ImageRun({ data: diagram2Buf, transformation: { width: 480, height: 320 }, type: 'jpg' })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: '构造图二', size: 20, color: '888888', font: 'Microsoft YaHei' })] }),
    );
  }

  // === Section 2: Custom Construction Flow ===
  if (flowSteps.length > 0) {
    children.push(
      new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 350, after: 200 }, children: [new TextRun({ text: '二、定制施工流程', size: 32, bold: true, color: 'FFD100', font: 'Microsoft YaHei' })] }),
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({ children: [
            new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, shading: { fill: 'F5F5F5' }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '序号', bold: true, size: 20, font: 'Microsoft YaHei' })] })] }),
            new TableCell({ width: { size: 25, type: WidthType.PERCENTAGE }, shading: { fill: 'F5F5F5' }, children: [new Paragraph({ children: [new TextRun({ text: '施工步骤', bold: true, size: 20, font: 'Microsoft YaHei' })] })] }),
            new TableCell({ width: { size: 67, type: WidthType.PERCENTAGE }, shading: { fill: 'F5F5F5' }, children: [new Paragraph({ children: [new TextRun({ text: '说明', bold: true, size: 20, font: 'Microsoft YaHei' })] })] }),
          ] }),
          ...flowSteps.map((step, i) =>
            new TableRow({ children: [
              new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, shading: { fill: i === 0 ? 'FFD100' : 'F5F5F5' }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${i + 1}`, size: 20, bold: true, color: i === 0 ? '4A4A4A' : '888888', font: 'Microsoft YaHei' })] })] }),
              new TableCell({ width: { size: 25, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: step.label, size: 22, bold: true, color: '4A4A4A', font: 'Microsoft YaHei' })] })] }),
              new TableCell({ width: { size: 67, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: step.description, size: 20, color: '888888', font: 'Microsoft YaHei' })] })] }),
            ] })
          ),
        ],
      }),
    );
  }

  // === Section 3: Product Details ===
  children.push(
    new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: '三、产品方案详情', size: 32, bold: true, color: 'FFD100', font: 'Microsoft YaHei' })] }),
  );

  for (let i = 0; i < confirmedProducts.length; i++) {
    const pid = confirmedProducts[i];
    const product = getProductRecord(pid);
    if (!product) continue;
    const series = getSeriesRecord(product.seriesId);
    const imgBuf = productImages.get(pid);

    children.push(
      new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 250, after: 100 }, children: [new TextRun({ text: `产品 ${i + 1}：${product.fullName}`, size: 24, bold: true, color: '4A4A4A', font: 'Microsoft YaHei' })] }),
    );

    // Product image + info table side by side (table simulates the web layout)
    const infoTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({ children: [
          new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, shading: { fill: 'F5F5F5' }, children: [new Paragraph({ children: [new TextRun({ text: '产品系列', bold: true, size: 20, font: 'Microsoft YaHei' })] })] }),
          new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: (series?.label ?? product.seriesId) || '—', size: 20, font: 'Microsoft YaHei' })] })] }),
          new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, shading: { fill: 'F5F5F5' }, children: [new Paragraph({ children: [new TextRun({ text: '产品型号', bold: true, size: 20, font: 'Microsoft YaHei' })] })] }),
          new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: product.label, size: 20, font: 'Microsoft YaHei' })] })] }),
        ] }),
        new TableRow({ children: [
          new TableCell({ shading: { fill: 'F5F5F5' }, children: [new Paragraph({ children: [new TextRun({ text: '应用图层', bold: true, size: 20, font: 'Microsoft YaHei' })] })] }),
          new TableCell({ columnSpan: 3, children: [new Paragraph({ children: [new TextRun({ text: product.diagramLayer.label || '—', size: 20, font: 'Microsoft YaHei' })] })] }),
          new TableCell({ columnSpan: 0, children: [] }), new TableCell({ columnSpan: 0, children: [] }),
        ] }),
      ],
    });
    children.push(infoTable);

    // Product image
    if (imgBuf) {
      children.push(
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 80 }, children: [new ImageRun({ data: imgBuf, transformation: { width: 240, height: 180 }, type: 'jpg' })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [new TextRun({ text: product.label, size: 18, color: '888888', font: 'Microsoft YaHei' })] }),
      );
    }

    // Description
    children.push(
      new Paragraph({ spacing: { before: 80, after: 60 }, children: [new TextRun({ text: '产品描述：', size: 22, bold: true, color: '4A4A4A', font: 'Microsoft YaHei' }), new TextRun({ text: product.description || '—', size: 22, color: '4A4A4A', font: 'Microsoft YaHei' })] }),
    );

    // Advantages
    if (product.advantages.length > 0) {
      children.push(
        new Paragraph({ spacing: { before: 100, after: 60 }, children: [new TextRun({ text: '产品优势：', size: 22, bold: true, color: '4A4A4A', font: 'Microsoft YaHei' })] }),
        ...product.advantages.map(a => new Paragraph({ spacing: { after: 40 }, bullet: { level: 0 }, children: [new TextRun({ text: a, size: 22, color: '4A4A4A', font: 'Microsoft YaHei' })] })),
      );
    }

    // Certifications
    if (product.certifications.length > 0) {
      children.push(
        new Paragraph({ spacing: { before: 100, after: 60 }, children: [new TextRun({ text: '认证标准：', size: 22, bold: true, color: '4A4A4A', font: 'Microsoft YaHei' })] }),
        ...product.certifications.map(c => new Paragraph({ spacing: { after: 30 }, bullet: { level: 0 }, children: [new TextRun({ text: `${c.code} — ${c.name}`, size: 20, color: '4A4A4A', font: 'Microsoft YaHei' })] })),
      );
    }
  }

  // Footer
  children.push(
    new Paragraph({ spacing: { before: 600 }, border: { top: { style: BorderStyle.SINGLE, size: 1, color: 'E5E7EB' } }, children: [] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200 }, children: [new TextRun({ text: '西卡中国 墅造美好生活', size: 18, color: 'B0B0B0', font: 'Microsoft YaHei' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '本方案由西卡墅造系统自动生成', size: 18, color: 'B0B0B0', font: 'Microsoft YaHei' })] }),
  );

  const doc = new Document({
    title: `西卡墅造 ${space.label} 技术方案说明书`, creator: '西卡墅造系统',
    sections: [{
      properties: { page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
      headers: {
        default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: '西卡墅造 · 高端建筑整体解决方案', size: 18, color: '888888', font: 'Microsoft YaHei' })] })] }),
      },
      footers: {
        default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '西卡中国 墅造美好生活 | 第 ', size: 16, color: 'B0B0B0', font: 'Microsoft YaHei' }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: 'B0B0B0' }), new TextRun({ text: ' 页', size: 16, color: 'B0B0B0', font: 'Microsoft YaHei' })] })] }),
      },
      children,
    }],
  });

  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `西卡墅造_${space.label}_技术方案书_${format(now, 'yyyyMMdd_HHmm')}.docx`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
}
