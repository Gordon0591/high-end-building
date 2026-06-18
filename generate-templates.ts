/**
 * 模板生成脚本 — 生成 Excel 数据导入模板 + Word 技术方案书模板
 * 运行方式: npx tsx generate-templates.ts
 */
import * as XLSX from 'xlsx';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  Header,
  Footer,
  PageNumber,
} from 'docx';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================
// PART 1: Excel 数据导入模板 (7 Sheets)
// ============================================================
function generateExcelTemplate(): void {
  const wb = XLSX.utils.book_new();

  // ----- Sheet 1: 建筑空间 -----
  const spaces = [
    { space_id: 'underground', label: '地下空间', sort_order: 1, description: '地下室、地下车库、基础等地下建筑空间' },
    { space_id: 'roofing', label: '屋面', sort_order: 2, description: '平屋面、坡屋面、种植屋面等' },
    { space_id: 'exterior_wall', label: '外墙', sort_order: 3, description: '建筑外围护墙体' },
    { space_id: 'windows', label: '窗户', sort_order: 4, description: '门窗洞口及边框区域' },
    { space_id: 'dry_area', label: '客卧室干区', sort_order: 5, description: '客厅、卧室、书房等干燥区域' },
    { space_id: 'wet_area', label: '厨卫湿区', sort_order: 6, description: '厨房、卫生间、阳台等潮湿区域' },
    { space_id: 'structural', label: '结构加固', sort_order: 7, description: '梁、板、柱等结构构件加固' },
    { space_id: 'garage', label: '车库', sort_order: 8, description: '地下及地上停车区域' },
    { space_id: 'courtyard', label: '庭院', sort_order: 9, description: '庭院地面、景观区域' },
    { space_id: 'pond_pool', label: '鱼池泳池', sort_order: 10, description: '鱼池、泳池、水景等水体空间' },
    { space_id: 'fire_stop', label: '防火封堵', sort_order: 11, description: '穿墙管线防火封堵区域' },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(spaces), '1-建筑空间');

  // ----- Sheet 2: 场景应用 -----
  const apps = [
    { app_id: 'base_repair', label: '基层修补', description: '对基层裂缝、孔洞、破损进行修补和加固处理', sort_order: 1 },
    { app_id: 'base_leveling', label: '基层找平', description: '使用自流平或找平砂浆对基层进行平整处理', sort_order: 2 },
    { app_id: 'joint_waterproof', label: '接缝防水处理', description: '对施工缝、变形缝等接缝部位进行防水密封处理', sort_order: 3 },
    { app_id: 'waterproofing', label: '防水', description: '整体防水层施工，包括涂膜防水和卷材防水系统', sort_order: 4 },
    { app_id: 'insulation', label: '保温', description: '外墙外保温、屋面保温等保温隔热系统', sort_order: 5 },
    { app_id: 'surface_decor', label: '面层装饰', description: '地坪面层、墙面装饰、防护涂层等表面处理', sort_order: 6 },
    { app_id: 'fire_protection', label: '防火', description: '钢结构防火、防火墙封堵等被动防火系统', sort_order: 7 },
    { app_id: 'bonding', label: '粘接', description: '结构加固粘接、瓷砖粘贴等粘接应用', sort_order: 8 },
    { app_id: 'joint_sealing', label: '接缝密封', description: '建筑接缝、门窗边框的弹性密封处理', sort_order: 9 },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(apps), '2-场景应用');

  // ----- Sheet 3: 方案级别 -----
  const tiers = [
    { tier_id: 'premium', label: '豪华', description: '顶级产品配置，选用最高性能材料，提供最全面的系统解决方案', sort_order: 1 },
    { tier_id: 'comfort', label: '舒适', description: '中高端配置，兼顾性能与性价比，满足高端住宅的全面需求', sort_order: 2 },
    { tier_id: 'standard', label: '标准', description: '经济实用配置，满足基本功能需求，性价比最优', sort_order: 3 },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(tiers), '3-方案级别');

  // ----- Sheet 4: 产品系列 -----
  const series = [
    { series_id: 'sikafloor', label: 'Sikafloor', description: '西卡地坪系列 — 涵盖环氧、聚氨酯等高性能地坪系统' },
    { series_id: 'sikadur', label: 'Sikadur', description: '西卡加固系列 — 结构加固粘接与修补系统' },
    { series_id: 'sikagard', label: 'Sikagard', description: '西卡防护系列 — 混凝土保护与表面防护涂层' },
    { series_id: 'sikaflex', label: 'Sikaflex', description: '西卡密封系列 — 高性能弹性密封胶与接缝处理' },
    { series_id: 'sikaplan', label: 'Sikaplan', description: '西卡防水卷材系列 — 高分子防水卷材系统' },
    { series_id: 'sikafelt', label: 'Sikafelt', description: '西卡保温系列 — 外墙及屋面保温隔热系统' },
    { series_id: 'sika-firestop', label: 'Sika Firestop', description: '西卡防火系列 — 穿墙防火封堵与钢结构防火' },
    { series_id: 'sikaceram', label: 'Sikaceram', description: '西卡粘贴系列 — 瓷砖粘贴与石材安装系统' },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(series), '4-产品系列');

  // ----- Sheet 5: 产品详情 (示例行 + 填写说明) -----
  const products = [
    {
      product_id: 'sikafloor-264',
      series_id: 'sikafloor',
      label: 'Sikafloor-264',
      full_name: 'Sikafloor-264 环氧地坪涂料',
      description: '双组份环氧地坪面漆，提供高光泽耐磨表面',
      image_filename: 'sikafloor-264.jpg',
      advantages: '优异的耐磨性和抗冲击性能; 高光泽表面易于清洁维护; 良好的耐化学腐蚀性能; 无溶剂配方环保安全; 施工简便固化速度快',
      certifications: 'GB/T 22374-2018:地坪涂装材料国家标准; GB 18581-2020:室内装饰装修材料有害物质限量; LEED:绿色建筑认证贡献产品',
      applicable_spaces: 'garage; dry_area; courtyard',
      applicable_scene_apps: 'surface_decor; base_leveling',
      applicable_tiers: 'premium; comfort; standard',
      diagram_layer_position: 'floor',
      diagram_layer_label: '室内地坪面层',
    },
    {
      product_id: 'sikafloor-2460',
      series_id: 'sikafloor',
      label: 'Sikafloor-2460',
      full_name: 'Sikafloor-2460 环氧自流平系统',
      description: '环氧自流平地坪系统，提供无缝、平整的表面',
      image_filename: 'sikafloor-2460.jpg',
      advantages: '自流平效果好表面无缝平整; 优异的耐化学介质性能; 高洁净度满足GMP要求; 抗静电选项可选; 使用寿命长达15年以上',
      certifications: 'GB/T 22374-2018:地坪涂装材料国家标准; ISO 9001:质量管理体系认证',
      applicable_spaces: 'garage; dry_area; structural',
      applicable_scene_apps: 'surface_decor; base_leveling',
      applicable_tiers: 'premium; comfort',
      diagram_layer_position: 'floor',
      diagram_layer_label: '室内地坪面层',
    },
    // 空行提示：请在此下方按相同格式添加更多产品
    {},
    {
      product_id: '← 请按上方格式填写新产品',
      series_id: '← sikafloor/sikadur/sikagard/...',
      label: '← 产品型号',
      full_name: '← 产品全称',
      description: '← 简短产品描述',
      image_filename: '← 产品图片文件名',
      advantages: '← 优势用 ; (分号) 分隔',
      certifications: '← 认证用 编号:名称; 格式',
      applicable_spaces: '← 适用空间用 ; 分隔',
      applicable_scene_apps: '← 适用场景应用用 ; 分隔',
      applicable_tiers: '← 适用方案级别用 ; 分隔',
      diagram_layer_position: '← foundation/wall/roof/floor/wet_area/exterior',
      diagram_layer_label: '← 建筑图层中文标签',
    },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(products), '5-产品详情');

  // ----- Sheet 6: 空间-应用映射 -----
  const spaceAppMap = [
    { space_id: 'underground', app_id: 'waterproofing' },
    { space_id: 'underground', app_id: 'joint_waterproof' },
    { space_id: 'underground', app_id: 'base_repair' },
    { space_id: 'underground', app_id: 'base_leveling' },
    { space_id: 'underground', app_id: 'fire_protection' },
    { space_id: 'roofing', app_id: 'waterproofing' },
    { space_id: 'roofing', app_id: 'insulation' },
    { space_id: 'roofing', app_id: 'joint_sealing' },
    { space_id: 'roofing', app_id: 'base_repair' },
    { space_id: 'roofing', app_id: 'surface_decor' },
    { space_id: 'exterior_wall', app_id: 'insulation' },
    { space_id: 'exterior_wall', app_id: 'surface_decor' },
    { space_id: 'exterior_wall', app_id: 'joint_sealing' },
    { space_id: 'exterior_wall', app_id: 'base_repair' },
    { space_id: 'windows', app_id: 'joint_sealing' },
    { space_id: 'windows', app_id: 'joint_waterproof' },
    { space_id: 'windows', app_id: 'bonding' },
    { space_id: 'dry_area', app_id: 'surface_decor' },
    { space_id: 'dry_area', app_id: 'base_leveling' },
    { space_id: 'dry_area', app_id: 'base_repair' },
    { space_id: 'dry_area', app_id: 'bonding' },
    { space_id: 'dry_area', app_id: 'joint_sealing' },
    { space_id: 'wet_area', app_id: 'waterproofing' },
    { space_id: 'wet_area', app_id: 'joint_waterproof' },
    { space_id: 'wet_area', app_id: 'bonding' },
    { space_id: 'wet_area', app_id: 'joint_sealing' },
    { space_id: 'wet_area', app_id: 'base_repair' },
    { space_id: 'wet_area', app_id: 'fire_protection' },
    { space_id: 'structural', app_id: 'bonding' },
    { space_id: 'structural', app_id: 'base_repair' },
    { space_id: 'structural', app_id: 'base_leveling' },
    { space_id: 'structural', app_id: 'fire_protection' },
    { space_id: 'structural', app_id: 'surface_decor' },
    { space_id: 'garage', app_id: 'surface_decor' },
    { space_id: 'garage', app_id: 'base_leveling' },
    { space_id: 'garage', app_id: 'base_repair' },
    { space_id: 'garage', app_id: 'joint_sealing' },
    { space_id: 'courtyard', app_id: 'surface_decor' },
    { space_id: 'courtyard', app_id: 'waterproofing' },
    { space_id: 'courtyard', app_id: 'bonding' },
    { space_id: 'courtyard', app_id: 'joint_sealing' },
    { space_id: 'pond_pool', app_id: 'waterproofing' },
    { space_id: 'pond_pool', app_id: 'base_repair' },
    { space_id: 'pond_pool', app_id: 'joint_waterproof' },
    { space_id: 'pond_pool', app_id: 'surface_decor' },
    { space_id: 'fire_stop', app_id: 'fire_protection' },
    { space_id: 'fire_stop', app_id: 'joint_sealing' },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(spaceAppMap), '6-空间应用映射');

  // ----- Sheet 7: 应用-方案-系列映射 -----
  const tierSeriesMap = [
    { app_id: 'base_repair', tier_id: 'premium', series_id: 'sikadur' },
    { app_id: 'base_repair', tier_id: 'premium', series_id: 'sikaceram' },
    { app_id: 'base_repair', tier_id: 'comfort', series_id: 'sikadur' },
    { app_id: 'base_repair', tier_id: 'comfort', series_id: 'sikaceram' },
    { app_id: 'base_repair', tier_id: 'standard', series_id: 'sikadur' },
    { app_id: 'base_repair', tier_id: 'standard', series_id: 'sikaceram' },
    { app_id: 'base_leveling', tier_id: 'premium', series_id: 'sikafloor' },
    { app_id: 'base_leveling', tier_id: 'premium', series_id: 'sikadur' },
    { app_id: 'base_leveling', tier_id: 'comfort', series_id: 'sikafloor' },
    { app_id: 'base_leveling', tier_id: 'comfort', series_id: 'sikadur' },
    { app_id: 'base_leveling', tier_id: 'standard', series_id: 'sikafloor' },
    { app_id: 'base_leveling', tier_id: 'standard', series_id: 'sikadur' },
    { app_id: 'joint_waterproof', tier_id: 'premium', series_id: 'sikaflex' },
    { app_id: 'joint_waterproof', tier_id: 'premium', series_id: 'sikagard' },
    { app_id: 'joint_waterproof', tier_id: 'comfort', series_id: 'sikaflex' },
    { app_id: 'joint_waterproof', tier_id: 'comfort', series_id: 'sikagard' },
    { app_id: 'joint_waterproof', tier_id: 'standard', series_id: 'sikaflex' },
    { app_id: 'waterproofing', tier_id: 'premium', series_id: 'sikaplan' },
    { app_id: 'waterproofing', tier_id: 'premium', series_id: 'sikagard' },
    { app_id: 'waterproofing', tier_id: 'comfort', series_id: 'sikaplan' },
    { app_id: 'waterproofing', tier_id: 'comfort', series_id: 'sikagard' },
    { app_id: 'waterproofing', tier_id: 'standard', series_id: 'sikaplan' },
    { app_id: 'insulation', tier_id: 'premium', series_id: 'sikafelt' },
    { app_id: 'insulation', tier_id: 'comfort', series_id: 'sikafelt' },
    { app_id: 'insulation', tier_id: 'standard', series_id: 'sikafelt' },
    { app_id: 'surface_decor', tier_id: 'premium', series_id: 'sikafloor' },
    { app_id: 'surface_decor', tier_id: 'premium', series_id: 'sikagard' },
    { app_id: 'surface_decor', tier_id: 'comfort', series_id: 'sikafloor' },
    { app_id: 'surface_decor', tier_id: 'comfort', series_id: 'sikagard' },
    { app_id: 'surface_decor', tier_id: 'standard', series_id: 'sikafloor' },
    { app_id: 'fire_protection', tier_id: 'premium', series_id: 'sika-firestop' },
    { app_id: 'fire_protection', tier_id: 'comfort', series_id: 'sika-firestop' },
    { app_id: 'fire_protection', tier_id: 'standard', series_id: 'sika-firestop' },
    { app_id: 'bonding', tier_id: 'premium', series_id: 'sikadur' },
    { app_id: 'bonding', tier_id: 'premium', series_id: 'sikaceram' },
    { app_id: 'bonding', tier_id: 'comfort', series_id: 'sikadur' },
    { app_id: 'bonding', tier_id: 'comfort', series_id: 'sikaceram' },
    { app_id: 'bonding', tier_id: 'standard', series_id: 'sikadur' },
    { app_id: 'bonding', tier_id: 'standard', series_id: 'sikaceram' },
    { app_id: 'joint_sealing', tier_id: 'premium', series_id: 'sikaflex' },
    { app_id: 'joint_sealing', tier_id: 'premium', series_id: 'sikaplan' },
    { app_id: 'joint_sealing', tier_id: 'comfort', series_id: 'sikaflex' },
    { app_id: 'joint_sealing', tier_id: 'comfort', series_id: 'sikaplan' },
    { app_id: 'joint_sealing', tier_id: 'standard', series_id: 'sikaflex' },
    { app_id: 'joint_sealing', tier_id: 'standard', series_id: 'sikaplan' },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(tierSeriesMap), '7-应用方案系列映射');

  // 写入文件
  const templatesDir = path.resolve(__dirname, 'templates');
  if (!fs.existsSync(templatesDir)) {
    fs.mkdirSync(templatesDir, { recursive: true });
  }
  const filePath = path.join(templatesDir, '数据导入模板.xlsx');
  XLSX.writeFile(wb, filePath);
  console.log('✅ Excel 数据导入模板已生成:', filePath);
}

// ============================================================
// PART 2: Word 技术方案书模板
// ============================================================
async function generateWordTemplate(): Promise<void> {
  const doc = new Document({
    title: '西卡墅造 技术方案书模板',
    creator: '西卡墅造系统',
    description: '西卡墅造高端建筑解决方案 — Word 技术方案书模板',
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: 'FFD100' } },
                children: [
                  new TextRun({
                    text: '西卡墅造 · 高端建筑解决方案',
                    size: 18,
                    color: '888888',
                    font: 'Microsoft YaHei',
                    bold: true,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                border: { top: { style: BorderStyle.SINGLE, size: 1, color: 'E5E7EB' } },
                children: [
                  new TextRun({
                    text: '西卡（中国）有限公司  |  本方案由西卡墅造系统生成  |  第 ',
                    size: 16,
                    color: 'B0B0B0',
                    font: 'Microsoft YaHei',
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    size: 16,
                    color: 'B0B0B0',
                  }),
                  new TextRun({
                    text: ' 页',
                    size: 16,
                    color: 'B0B0B0',
                    font: 'Microsoft YaHei',
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          // ===== 封面区域 =====
          new Paragraph({ spacing: { before: 1200 }, children: [] }),

          // SIKA Logo 占位
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
            children: [
              new TextRun({
                text: '【SIKA Logo】',
                size: 28,
                color: 'B0B0B0',
                font: 'Microsoft YaHei',
                italics: true,
              }),
            ],
          }),

          // 主标题
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: '西卡墅造 {建筑空间} · {方案级别}',
                size: 48,
                bold: true,
                color: 'FFD100',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: '场景解决方案',
                size: 48,
                bold: true,
                color: 'FFD100',
                font: 'Microsoft YaHei',
              }),
            ],
          }),

          // 方案信息
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
            children: [
              new TextRun({
                text: '方案编号：SIKA-{space}-{tier}-{timestamp}',
                size: 20,
                color: '888888',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
            children: [
              new TextRun({
                text: '生成时间：{YYYY年MM月DD日 HH:mm}',
                size: 20,
                color: '888888',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: '建筑空间：{空间名称}  |  场景应用：{应用名称}  |  方案级别：{豪华/舒适/标准}',
                size: 20,
                color: '888888',
                font: 'Microsoft YaHei',
              }),
            ],
          }),

          // 分隔线
          new Paragraph({
            spacing: { before: 200, after: 200 },
            border: { top: { style: BorderStyle.SINGLE, size: 4, color: 'FFD100' } },
            children: [],
          }),

          // ===== 分页 =====
          new Paragraph({
            children: [new TextRun({ text: '', break: 1 })],
          }),

          // ===== 一、场景概述 =====
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200, after: 300 },
            children: [
              new TextRun({
                text: '一、空间场景概述',
                size: 36,
                bold: true,
                color: 'FFD100',
                font: 'Microsoft YaHei',
              }),
            ],
          }),

          new Paragraph({
            spacing: { after: 150 },
            children: [
              new TextRun({
                text: '建筑空间：{空间名称}',
                size: 24,
                bold: true,
                color: '4A4A4A',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 150 },
            children: [
              new TextRun({
                text: '场景应用：{应用名称} — {应用描述}',
                size: 24,
                color: '4A4A4A',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: '【此处填写场景概述的具体内容，包括建筑空间的特点、使用条件、技术要求等信息】',
                size: 22,
                color: 'B0B0B0',
                font: 'Microsoft YaHei',
                italics: true,
              }),
            ],
          }),

          // ===== 二、方案定位 =====
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 500, after: 300 },
            children: [
              new TextRun({
                text: '二、方案定位',
                size: 36,
                bold: true,
                color: 'FFD100',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 150 },
            children: [
              new TextRun({
                text: '方案级别：{豪华/舒适/标准} — {方案级别描述}',
                size: 24,
                color: '4A4A4A',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: '【此处说明该方案级别的定位、适用场景和产品配置策略】',
                size: 22,
                color: 'B0B0B0',
                font: 'Microsoft YaHei',
                italics: true,
              }),
            ],
          }),

          // ===== 三、推荐产品 =====
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 500, after: 300 },
            children: [
              new TextRun({
                text: '三、推荐产品',
                size: 36,
                bold: true,
                color: 'FFD100',
                font: 'Microsoft YaHei',
              }),
            ],
          }),

          // 产品图片占位
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: '【产品图片】',
                size: 24,
                color: 'B0B0B0',
                font: 'Microsoft YaHei',
                italics: true,
              }),
            ],
          }),

          // 产品信息表
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    shading: { fill: 'F5F5F5' },
                    children: [new Paragraph({ children: [new TextRun({ text: '产品系列', bold: true, size: 20, font: 'Microsoft YaHei', color: '4A4A4A' })] })],
                  }),
                  new TableCell({
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: [new Paragraph({ children: [new TextRun({ text: '{Sikafloor / Sikadur / ...}', size: 20, font: 'Microsoft YaHei', color: '888888' })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: 'F5F5F5' },
                    children: [new Paragraph({ children: [new TextRun({ text: '产品名称', bold: true, size: 20, font: 'Microsoft YaHei', color: '4A4A4A' })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: '{产品全称}', size: 20, font: 'Microsoft YaHei', color: '888888' })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: 'F5F5F5' },
                    children: [new Paragraph({ children: [new TextRun({ text: '产品型号', bold: true, size: 20, font: 'Microsoft YaHei', color: '4A4A4A' })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: '{产品型号}', size: 20, font: 'Microsoft YaHei', color: '888888' })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: 'F5F5F5' },
                    children: [new Paragraph({ children: [new TextRun({ text: '产品描述', bold: true, size: 20, font: 'Microsoft YaHei', color: '4A4A4A' })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: '{产品简短描述}', size: 20, font: 'Microsoft YaHei', color: '888888' })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: 'F5F5F5' },
                    children: [new Paragraph({ children: [new TextRun({ text: '应用图层', bold: true, size: 20, font: 'Microsoft YaHei', color: '4A4A4A' })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: '{建筑图层标签}', size: 20, font: 'Microsoft YaHei', color: '888888' })] })],
                  }),
                ],
              }),
            ],
          }),

          // ===== 四、产品优势 =====
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 500, after: 300 },
            children: [
              new TextRun({
                text: '四、产品优势',
                size: 36,
                bold: true,
                color: 'FFD100',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          ...[1, 2, 3, 4, 5].map(
            (n) =>
              new Paragraph({
                spacing: { after: 100 },
                bullet: { level: 0 },
                children: [
                  new TextRun({
                    text: `{产品优势 ${n}}`,
                    size: 22,
                    color: 'B0B0B0',
                    font: 'Microsoft YaHei',
                    italics: true,
                  }),
                ],
              }),
          ),

          // ===== 五、认证标准 =====
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 500, after: 300 },
            children: [
              new TextRun({
                text: '五、认证标准',
                size: 36,
                bold: true,
                color: 'FFD100',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          ...[1, 2, 3].map(
            (n) =>
              new Paragraph({
                spacing: { after: 80 },
                bullet: { level: 0 },
                children: [
                  new TextRun({
                    text: `{认证编号 ${n}} — {认证名称 ${n}}`,
                    size: 22,
                    color: 'B0B0B0',
                    font: 'Microsoft YaHei',
                    italics: true,
                  }),
                ],
              }),
          ),

          // ===== 六、建筑构造示意图 =====
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 500, after: 300 },
            children: [
              new TextRun({
                text: '六、建筑构造示意图',
                size: 36,
                bold: true,
                color: 'FFD100',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: '本方案产品 "{产品型号}" 应用于 "{建筑图层标签}" 位置。',
                size: 22,
                color: '4A4A4A',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 100, after: 100 },
            children: [
              new TextRun({
                text: '【建筑剖面示意图 — 请参考系统内 SVG 剖面图】',
                size: 20,
                color: 'B0B0B0',
                font: 'Microsoft YaHei',
                italics: true,
              }),
            ],
          }),

          // ===== 尾部分隔 =====
          new Paragraph({
            spacing: { before: 600 },
            border: { top: { style: BorderStyle.DOUBLE, size: 2, color: 'FFD100' } },
            children: [],
          }),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 300 },
            children: [
              new TextRun({
                text: '西卡（中国）有限公司',
                size: 20,
                bold: true,
                color: '4A4A4A',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
            children: [
              new TextRun({
                text: 'SIKA (China) Ltd.',
                size: 18,
                color: '888888',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '本方案由西卡墅造系统自动生成  |  仅供参考，具体以实际工程图纸为准',
                size: 16,
                color: 'B0B0B0',
                font: 'Microsoft YaHei',
              }),
            ],
          }),
        ],
      },
    ],
  });

  const templatesDir = path.resolve(__dirname, 'templates');
  if (!fs.existsSync(templatesDir)) {
    fs.mkdirSync(templatesDir, { recursive: true });
  }
  const filePath = path.join(templatesDir, '技术方案模板.docx');
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(filePath, buffer);
  console.log('✅ Word 技术方案书模板已生成:', filePath);
}

// ============================================================
// 执行生成
// ============================================================
async function main() {
  console.log('🚀 开始生成模板文件...\n');
  generateExcelTemplate();
  await generateWordTemplate();
  console.log('\n🎉 所有模板生成完毕！');
}

main().catch(console.error);
