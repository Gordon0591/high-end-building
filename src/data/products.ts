import type { ProductRecord } from '@/types';
import { BuildingSpace, SceneApplication } from '@/types';

export const PRODUCTS: ProductRecord[] = [
  {
    id: '西卡标准基面前处理',
    seriesId: 'remover',
    processId: '',
    label: '西卡标准基面前处理-铲除，清理，喷砂，打磨',
    fullName: '',
    imagePath: 'images/products/',
    description: '',
    advantages: [],
    certifications: [],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-西卡标准基面前处理', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaEmaco S188',
    seriesId: 'sikaemaco',
    processId: '',
    label: 'SikaEmaco® S188 水泥基高强修补砂浆',
    fullName: 'SikaEmaco® S188 水泥基高强修补砂浆',
    imagePath: 'images/products/SikaEmaco S188.png',
    description: '一种具有触变性、纤维增强、收缩补偿功能的单组分水泥修补砂浆；全系列结构修补砂浆（批量修补，浇筑和喷涂应用）',
    advantages: [
      '结构致密，可以降低腐蚀介质的渗透侵入',
      '优异的触变性',
      '最终强度高',
      '耐硫酸盐，在硫酸盐/硫化物环境中具有优势',
      '不含氯化物，对钢筋无腐蚀作用'
    ],
    certifications: [
      { code: 'GB 50728-2011 《工程结构加固材料安全性鉴定技术规范》II 级', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaEmaco S188', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaEmaco 5100N',
    seriesId: 'sikaemaco',
    processId: '',
    label: 'SikaEmaco® N5100 水泥基薄层修补砂浆',
    fullName: 'SikaEmaco® N5100 水泥基薄层修补砂浆',
    imagePath: 'images/products/SikaEmaco N5100.jpg',
    description: '一种聚合物改性的即用型薄层修补砂浆。用于修补混凝土表面的各种瑕疵和缺陷和用于防水涂料和防腐涂料的基底找平',
    advantages: [
      '只需加水搅拌即可施工',
      '施工简单，施工效率高',
      '与基面粘结力强，无剥落风险'
    ],
    certifications: [
      { code: 'JG/T 336-2011《混凝土结构修复用聚合物水\n泥砂浆》', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaEmaco 5100N', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaAnchorFix 3010CN',
    seriesId: 'sikaAnchorFix',
    processId: '',
    label: 'SikaAnchorFix 3010CN 植筋锚固胶',
    fullName: 'SikaAnchorFix 3010CN 植筋锚固胶',
    imagePath: 'images/products/SikaAnchorFix 3010CN.jpg',
    description: '一种触变型、双组分、无溶剂的高性能环氧结构胶。用于在各种混凝土、粘土砖、天然石材和木材上锚固螺杆、钢筋或其他杆件。',
    advantages: [
      '优秀的粘结强度',
      '可用于潮湿混凝土',
      '可用于开裂混凝土',
      '优秀的抗烧焊性能',
      '优秀的耐疲劳性能',
      '低气味，安全无毒'
    ],
    certifications: [
      { code: '满足 GB 50728-2011 表 4.2.2-3 ,4.2.2-4,4.2.2-5  中 , A 级胶的要求', name: '' },
      { code: '满足 GB/T 37127-2018 表 1 中 A 级胶的要求', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaAnchorFix 3010CN', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaWrap-300C CN',
    seriesId: 'sikawrap',
    processId: '',
    label: 'SikaWrap-300C CN 加固用碳纤维布',
    fullName: 'SikaWrap-300C CN 加固用碳纤维布',
    imagePath: 'images/products/SikaWrap-300C CN.jpg',
    description: '一种单向编织的、高强度碳纤维布，用于构件的结构加固，可以采用干法或湿法施工工艺。',
    advantages: [
      '适用于各种不同基面和几何形状（梁、柱、板、墙、杆等）',
      '特别为干法施工工艺而定制',
      '浸渍胶可以从底面完全渗到表面',
      '在轻微振动条件下，连续仰面贴四层不会脱粘'
    ],
    certifications: [
      { code: '满足 GB 50728-2011 表 8.2.4 中单向织物高强 I\n级的要求', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaWrap-300C CN', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaCarboDur-S 1014N',
    seriesId: 'sikacarbondur',
    processId: '',
    label: 'SikaCarboDur-S 1014N  加固用碳板',
    fullName: 'SikaCarboDur-S 1014N  加固用碳板',
    imagePath: 'images/products/SikaCarboDur-S 1014N.jpg',
    description: '压挤成型的碳纤维复合板材，用于结构构件的加固。',
    advantages: [
      '特殊制造工艺，确保板材直线度',
      '强度标准值高',
      '优异的耐久性和耐腐蚀性能',
      '可以交叉粘贴',
      '质量轻，在轻微振动条件下，仰面施工不会脱粘'
    ],
    certifications: [
      { code: '满足 GB 50728-2011 表 8.2.4 中条形板高强 I 级的要求', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaCarboDur-S 1014N', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikadur-31 STP',
    seriesId: 'sikadur',
    processId: '',
    label: 'Sikadur®-31 STP 环氧结构粘结胶',
    fullName: 'Sikadur®-31 STP 环氧结构粘结胶',
    imagePath: 'images/products/Sikadur-31CFN.png',
    description: '一种双组分、触变型、无溶剂环氧结构粘结胶，适用于粘钢加固施工。',
    advantages: [
      '早期和最终机械强度高',
      '优秀的抗冲击性能',
      '无溶剂'
    ],
    certifications: [
      { code: '满足 GB 50728-2011 表 4.2.2-1, 4.2.2-4 ,4.2.2-5中 A 级胶的要求', name: '' },
      { code: '满足 GB 50728-2011 表 4.8.1 中涂布型粘钢结构胶 A 级胶的要求', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikadur-31 STP', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikadur-52 STP',
    seriesId: 'sikadur',
    processId: '',
    label: 'Sikadur®-52 STP 压注型粘钢结构胶',
    fullName: 'Sikadur®-52 STP 压注型粘钢结构胶',
    imagePath: 'images/products/Sikadur-52 STP.jpg',
    description: '一种双组分、无溶剂、低粘度环氧树脂结构胶,适用于以混凝土为基材的压注型粘钢加固，及格构式和封闭式湿法外包型钢加固。',
    advantages: [
      '粘度低,无溶剂',
      '优秀的力学性能',
      '抗冲击剥离能力强, 耐湿热老化性能强',
      '具有较好的韧性'
    ],
    certifications: [
      { code: '满足 GB 50728-2011 表 4.2.2-1, 4.2.2-4,4.2.2-5中 A 级胶的要求', name: '' },
      { code: '满足 GB 50728-2011 表 4.8.1 中压注型粘钢结构胶 A 级胶的要求', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikadur-52 STP', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikadur-52 CN',
    seriesId: 'sikadur',
    processId: '',
    label: 'Sikadur®-52CN低粘度环氧树脂注浆材料',
    fullName: 'Sikadur®-52CN低粘度环氧树脂注浆材料',
    imagePath: 'images/products/Sikdur-52 CN.jpg',
    description: '一种低粘度环氧树脂，用于重力或压力注入混凝土、砌体、木材结构的裂缝，封闭室内和室外底板，以防止水、氯化物和轻微化学侵蚀，并提高耐磨性。',
    advantages: [
      '具有韧性的裂缝封堵浆料',
      '先进的低粘度结构树脂',
      '独特的高强度粘合剂，适用于“无法干燥”的裂缝。'
    ],
    certifications: [
      { code: 'CE认证', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikadur-52 CN', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaMonotop-102 CN',
    seriesId: 'sikamonotop',
    processId: '',
    label: 'SikaMonotop-102 CN 快速止水砂浆',
    fullName: 'SikaMonotop-102 CN 快速止水砂浆',
    imagePath: 'images/products/SikaMonotop-102 CN.jpg',
    description: '一种快速反应的水泥砂浆，专为快速封堵混凝土或砌体基层中的孔洞渗漏水而设计。',
    advantages: [
      '快速堵漏，瞬间止水',
      '施工简单，施工效率高',
      '迎、背水面均可使用',
      '良好的耐久性'
    ],
    certifications: [
      { code: 'GB 23440-2009 《无机防水堵漏材料》速凝型', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaMonotop-102 CN', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikainject-101AP',
    seriesId: 'sikainjection',
    processId: '',
    label: 'SikaInject® -101AP 柔性聚氨酯注浆防水树脂',
    fullName: 'SikaInject® -101AP 柔性聚氨酯注浆防水树脂',
    imagePath: 'images/products/Sikainject-101AP.png',
    description: '一种双组分，聚氨酯，低粘度，快速发泡，水反应性注射树脂。固化后形成致密的软泡沫。',
    advantages: [
      '快速反应发泡材料，用于临时防水',
      '具有非常均匀的泡孔结构',
      '用于带水状态下注浆',
      '中-高静水压'
    ],
    certifications: [
      { code: '防水密封测试方法，依据 EN 14068, MPS BS', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikainject-101AP', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaWaterBar FB125',
    seriesId: 'sikawaterbar',
    processId: '',
    label: 'SikaWaterbar®- 125 FB --杂化型柔性止水带',
    fullName: 'SikaWaterbar®- 125 FB --杂化型止水带',
    imagePath: 'images/products/SikaWaterBar FB125.jpg',
    description: '一种杂化型止水带，表面粗糙，采用柔性聚烯烃（FPO）制成,提供了一个完全粘合、耐用的防水密封，防止任何侧向水流过。',
    advantages: [
      '一种完全粘结的柔性 TPO 防水带，基于 A+ 技术改性专利表面',
      '地下室施工接缝（地面 - 地面，地面 - 墙壁，墙壁 - 墙壁），可以与其他Sika接缝密封解决方案结合使用。'
    ],
    certifications: [],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaWaterBar FB125', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikadurCombiflex-SG',
    seriesId: 'sikadurcombiflex',
    processId: '',
    label: 'Sikadur®Combiflex SG-高性能接缝、裂缝密封胶带',
    fullName: 'Sikadur®Combiflex SG-高性能接缝、裂缝密封胶带',
    imagePath: 'images/products/SikadurCombiflex-SG.jpg',
    description: '一种柔性聚烯烃(TPO)防水卷材，粘结性能优异。此产品是 SikadurCombiflex® SG 系统的一部分。',
    advantages: [
      '有SG和M两种，M主要用于伸缩缝，中间有红色的隔离膜，适合伸缩缝施工',
      '厚度有1.0和2.0mm 两种，长度为每卷25米',
      '宽度有150，200，250和300mm'
    ],
    certifications: [],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikadurCombiflex-SG', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaFerrogard-903',
    seriesId: 'sikaferrogard',
    processId: '',
    label: 'SikaFerroGard®-903+ --钢筋阻锈剂',
    fullName: 'SikaFerroGard®-903+ --钢筋阻锈剂',
    imagePath: 'images/products/SikaFerrogard 903+.png',
    description: 'SikaFerroGard® 903+是一种含有阻锈成分的产品，施工在混凝土表面并能渗透到混凝土内部起到保护混凝土中钢筋的作用。',
    advantages: [
      '褪色配方设计能更好的控制施工质量',
      '不改变混凝土中水汽扩散性',
      '长期保护钢筋',
      '能用在已经修补的混凝土结构上，以及保护刚开始发生阳极锈蚀的场合',
      '同时保护钢筋阳极和阴极'
    ],
    certifications: [
      { code: '1. 符合 EN 1504-9，11.3 规定的钢筋阻锈剂的性能', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaFerrogard-903', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaTop-501 Seal',
    seriesId: 'sikatop',
    processId: '',
    label: 'SikaTop-501 Seal 水泥基渗透结晶防水涂料',
    fullName: 'SikaTop-501 Seal 水泥基渗透结晶防水涂料',
    imagePath: 'images/products/SikaTop-501 Seal.png',
    description: '单组分水泥基渗透结晶\n防水涂料。SikaTop®-501 Seal 中的活性化学\n物质，能渗透进混凝土内，与水泥水化产物\n反应，产生不溶性结晶。该结晶可以堵塞毛\n细孔，填充非结构性的细微裂缝，使混凝土\n形成一道密实度极高且持久的刚性防水屏\n障。',
    advantages: [
      '优异的抗渗能力',
      '透气性好',
      '易于涂刷 ，使用方便',
      '应用范围广，有效抵抗正、负水压',
      '无毒，无污染'
    ],
    certifications: [
      { code: 'GB 18445-2012 《水泥基渗透结晶型防水材\n料》', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaTop-501 Seal', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaTop 540 Seal',
    seriesId: 'sikatop',
    processId: '',
    label: 'SikaTop® 540 Seal聚合物改性防水涂料',
    fullName: 'SikaTop® 540 Seal聚合物改性防水涂料',
    imagePath: 'images/products/SikaTop 540 Seal.png',
    description: '一种含聚合物的高性能水泥基防水材料，用于游泳池、水箱、地下室等场所的防水。',
    advantages: [
      '施工简单',
      '优秀的粘结性能',
      '透汽不渗水， 防止了蒸汽压的形成',
      '耐候性: 适合外露使用'
    ],
    certifications: [
      { code: 'GB/T 23445-2009 《聚合物水泥防水涂料》 JS 防水涂料 III 型', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaTop 540 Seal', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sika Thoroseal® Plus/583',
    seriesId: 'sikaThoroseal',
    processId: '',
    label: 'Sika Thoroseal® Plus/583 聚合物改性防水砂浆',
    fullName: 'Sika Thoroseal® Plus/583 聚合物改性防水砂浆',
    imagePath: 'images/products/Sika Thoroseal(R)Plus:583.png',
    description: '可以用于混凝土、水泥砂浆、砖墙为基层的防水涂料。它既可用于迎水面防水，又可用于背水面防水。',
    advantages: [
      '施工简单、快速',
      '可以在潮湿基层上施工\n具有一定的潮气透过能力',
      '无溶剂'
    ],
    certifications: [
      { code: 'JC/T 984-2011《聚合物水泥防水砂浆》', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sika Thoroseal® Plus/583', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaTape-F',
    seriesId: 'sikatape',
    processId: '',
    label: 'Sika® SealTape F --阴阳角和管根防水处理密封胶带',
    fullName: 'Sika® SealTape F --阴阳角和管根防水处理密封胶带',
    imagePath: 'images/products/SikaTape-F.jpg',
    description: '一种弹性系统组件，与 Sika® 防水产品配合使用。它能降低墙角、楼板与墙壁连接处、管道入口等潜在开裂位置的渗漏风险。',
    advantages: [
      '高弹性,断裂强度高',
      '易于安装,防水和不漏水',
      '与 Sika® 防水产品有良好的粘附性\n耐化学腐蚀',
      '耐紫外线照射'
    ],
    certifications: [],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaTape-F', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaThermal-51/52',
    seriesId: 'sikatherm',
    processId: '',
    label: 'SikaThermal-51/52-双组份喷涂型硬质发泡聚氨酯',
    fullName: 'SikaThermal-51/52-双组份喷涂型硬质发泡聚氨酯',
    imagePath: 'images/products/SikaThermal-51/52.jpg',
    description: '双组分可喷涂型硬质发泡聚氨酯保温材料，使用HFC-245fa 环保发泡剂，其臭氧消耗潜能值（ODP）为 0。',
    advantages: [
      '臭氧消耗潜能值（ODP）为 0',
      '高密度, 快速固化',
      '优异的隔热保温性',
      '优异的防水性\n优异的稳定性,对大部分基材粘接优异',
      '环保低气味'
    ],
    certifications: [
      { code: '满足JC/T 998-2006 II-A 型', name: '' },
      { code: '满足 GB 50404-2017 屋面喷涂硬泡聚氨酯II 型', name: '' },
      { code: '满足GB 8624-2012 阻燃等级B2 级', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaThermal-51/52', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikafloor-P 658',
    seriesId: 'sikaprimer',
    processId: '',
    label: 'Sikafloor® P 658-双组分环氧底涂',
    fullName: 'Sikafloor® P 658-双组分环氧底涂',
    imagePath: 'images/products/Sikafloor P658.png',
    description: '一种无溶剂、低粘度、双组分环氧树脂底涂。',
    advantages: [
      '低粘度，能够有效封闭孔隙，保证面层质\n量',
      '无溶剂，避免表面出现气泡',
      '与基层粘结性能好',
      '按比例预包装，使用方便'
    ],
    certifications: [
      { code: 'GB/T 22374-2018 《地坪涂装材料》', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikafloor-P 658', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikalastic-M860',
    seriesId: 'sikalastic',
    processId: '',
    label: 'Sikalastic® M 860--滚涂型聚氨酯高弹防水涂料',
    fullName: 'Sikalastic® M 860--滚涂型聚氨酯高弹防水涂料',
    imagePath: 'images/products/Sikalastic-860.png',
    description: '一种无溶剂、双组份、高\n性能聚氨酯防水涂膜。固化后形成一层经久\n耐用、无缝一体的防水膜，',
    advantages: [
      '无缝涂膜,与基层满粘',
      '优秀的力学性能, 优异的裂缝桥接性能',
      '优异的防水性能, 耐穿刺, 耐积水浸泡',
      '热固性，高温不软化, 低温（负 45˚C）下仍保持弹性'
    ],
    certifications: [
      { code: 'GB/T 19250-2013《聚氨酯防水涂料》', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikalastic-M860', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikalastic-692',
    seriesId: 'sikalastic',
    processId: '',
    label: 'Sikalastic®-692R--单组份聚氨酯防水涂料',
    fullName: 'Sikalastic®-692R--单组份聚氨酯防水涂料',
    imagePath: 'images/products/Sikalastic-692R.png',
    description: '一种单组份、冷施工、湿气式固化防水涂料。固化后形成一层经久耐用、无缝一体的防水涂膜，适用于暴露式屋面与倒置式露台/阳台防水。',
    advantages: [
      '基于湿气式固化技术的无缝一体防水涂料',
      '适应基层热胀冷缩-低温柔韧性好',
      '增强型系统-细部处理方便简单',
      '具有良好的水汽渗透性，允许基层呼吸透气'
    ],
    certifications: [
      { code: 'GB/T 19250-2013 聚氨酯防水涂料', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikalastic-692', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikalastic-685',
    seriesId: 'sikalastic',
    processId: '',
    label: 'Sikalastic® -685--外露型高弹耐水防水涂料',
    fullName: 'Sikalastic® -685--外露型高弹耐水防水涂料',
    imagePath: 'images/products/Sikalastic-685.png',
    description: '单组分外露型高弹耐水防水涂料，具有优异的耐化学性，耐紫外，高弹等特性。',
    advantages: [
      '无缝一体，降低渗漏风险',
      '能良好的适应基层变形，确保防水质量',
      '抗紫外线，可暴露应用',
      '耐久性好, 水性环保，低VOC',
      '与基层满粘，防窜水',
      '优异的断裂伸长率，桥接裂缝'
    ],
    certifications: [
      { code: 'Q/320500SIKA-67-2025 《外露型高弹耐水防水涂料》', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikalastic-685', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikalastic® 670 TC',
    seriesId: 'sikalastic',
    processId: '',
    label: 'Sikalastic® 670 TC--单组份聚氨酯抗UV 保护面漆',
    fullName: 'Sikalastic® 670 TC--单组份聚氨酯抗UV 保护面漆',
    imagePath: 'images/products/Sikalastic-670TC.jpg',
    description: '一种溶剂型、单组分潮气固化，抗UV 和耐候的彩色保护面漆。它是一种优质脂肪族聚氨酯预聚物涂层。',
    advantages: [
      '卓越的抗紫外线和耐候性能',
      '高弹性',
      '即使长期泡水也保持卓越的粘结强度',
      '单组分，无需额外混合',
      '容易施工'
    ],
    certifications: [
      { code: 'JC/T 2253-2014(2017)《脂肪族聚氨酯耐候防水涂料》', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikalastic® 670 TC', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikafelt',
    seriesId: 'sikafelt',
    processId: '',
    label: 'Sikafelt®- 加强网格布',
    fullName: '',
    imagePath: 'images/products/',
    description: '',
    advantages: [],
    certifications: [],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikafelt', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikasil-190',
    seriesId: 'sikasil',
    processId: '',
    label: 'Sikasil®-190--单组份硅酮耐候密封胶',
    fullName: 'Sikasil®-190--单组份硅酮耐候密封胶',
    imagePath: 'images/products/Sikasil-190.jpg',
    description: '单组分中性硅酮耐候密封胶，湿气固化，不含烷烃类增塑剂，具有优异的耐候性。',
    advantages: [
      '与多数的基材粘接良好',
      '不含烷烃类增塑剂',
      '优异的施工性能',
      '优异的柔韧性和位移变形能力',
      '低收缩，保持永久的弹性'
    ],
    certifications: [
      { code: 'GB/T 14683-2017 SR-I-Gw-35LM', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikasil-190', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaBoom S',
    seriesId: 'sikaboom',
    processId: '',
    label: 'SikaBoom ® S  --单组份聚氨酯发泡（门窗）',
    fullName: 'SikaBoom ® S  --单组份聚氨酯发泡（门窗）',
    imagePath: 'images/products/SikaBoom 400.jpg',
    description: '一种湿气固化膨胀的聚氨酯胶，可以用作固定和绝缘。',
    advantages: [
      '被倒置时可以使用',
      '可用于外部 - 可切割、打磨、涂覆油漆',
      '对多种基材粘接性能好',
      '可实现快速便捷填充',
      '可以填充到难以填充的位置'
    ],
    certifications: [
      { code: 'JC936-2004《单组份聚氨酯泡沫填充剂》', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaBoom S', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaSeal-429',
    seriesId: 'sikaseal',
    processId: '',
    label: 'SikaSeal®-429 --室外用防水透汽膜',
    fullName: 'SikaSeal®-429 --室外用防水透汽膜',
    imagePath: 'images/products/SikaSeal-429.jpg',
    description: '一款自带压敏背胶的弹性防水透汽膜，用于窗户的快速和便捷安装。水汽通过开放的膜结构迅速传输至冷侧。',
    advantages: [
      '弹性膜，三维立体安装的理想方案',
      '双面无纺布衬底，优化卷曲性',
      '背面自带压敏胶提高窗框安装效率'
    ],
    certifications: [
      { code: '符合 T/CECS 826-2021 中防水透汽膜技术要求', name: '' },
      { code: '符合《上海市超低能建筑技术导则》中附录 C门窗洞口用防水透气膜与防水隔气膜的性能指标要求', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaSeal-429', position: 'floor' as any, label: '' },
  },
  {
    id: 'SikaSeal-428',
    seriesId: 'sikaseal',
    processId: '',
    label: 'SikaSeal®-428 --室内用防水隔汽膜',
    fullName: 'SikaSeal®-428 --室内用防水隔汽膜',
    imagePath: 'images/products/SikaSeal-428.jpg',
    description: '一款自带压敏背胶的弹性防水隔汽膜，用于窗户的快速和便捷安装。水汽被封闭的膜结构隔离在热侧。',
    advantages: [
      '弹性膜，三维立体安装的理想方案',
      '双面无纺布衬底，优化卷曲性',
      '背面自带压敏胶提高窗框安装效率',
      '快速，简单和安全施工'
    ],
    certifications: [
      { code: '符合 T/CECS 826-2021 中防水透汽膜技术要求', name: '' },
      { code: '符合《上海市超低能建筑技术导则》中附录 C门窗洞口用防水透气膜与防水隔气膜的性能指标要求', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-SikaSeal-428', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikasil-193',
    seriesId: 'sikasil',
    processId: '',
    label: 'Sikasil®-193 -- 单组份醇型硅酮防霉密封胶',
    fullName: 'Sikasil®-193 -- 单组份醇型硅酮防霉密封胶',
    imagePath: 'images/products/Sikasil-193.jpg',
    description: '单组份湿气固化的中性醇型固化防霉硅酮密封胶，可广泛应用于多种场所，包括医院，实验室，中央厨房，食品厂，冷藏室，保温车厢和卫生间等接缝的密封。',
    advantages: [
      '100% 有机硅，低体积收缩率，永久的弹性和耐候性能',
      '中性醇型固化，固化过程不释放刺激性的酮肟气味',
      '长效保护，0 级防霉'
    ],
    certifications: [
      { code: '满足 GB/T 1741-2007 0 级防霉', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikasil-193', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikabond-161',
    seriesId: 'sikabond',
    processId: '',
    label: 'Sika®Bond-161--单组份高强度硅烷改性木地板粘合剂',
    fullName: 'Sika®Bond-161--单组份高强度硅烷改性木地板粘合剂',
    imagePath: 'images/products/Sikabond-161.jpg',
    description: '单组份湿气固化的硅烷改性STP 木地板粘合剂，产品为无溶剂、快速固化的高强度弹性胶粘剂。',
    advantages: [
      '环保，无甲醛',
      '快速固化，施工方便',
      '可有效降低行走噪音',
      '高剪切强度，兼具优异的弹性性能',
      '适用于地暖系统'
    ],
    certifications: [
      { code: 'HG/T 4223-2011《木地板铺装胶粘剂》', name: '' },
      { code: 'GB18583-2008《室内装饰装修材料胶粘剂中有害物质限量》', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikabond-161', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikabond-180',
    seriesId: 'sikabond',
    processId: '',
    label: 'Sika®Bond-180--单组份硅烷改性粘接胶 ',
    fullName: 'Sika®Bond-180--单组份硅烷改性粘接胶 ',
    imagePath: 'images/products/Sikabond-180.jpg',
    description: '单组分，无溶剂的硅烷封端密封粘接胶。该产品湿气固化，低气味，兼具弹性和强度，与多数基材粘接性能优异。',
    advantages: [
      '低气味，不含甲苯，甲醛等有害物质',
      '与大多数的基材粘接性良好',
      '施工方便，表面易修整',
      '粘接强度高，弹性好',
      '耐久性好，不易黄变'
    ],
    certifications: [
      { code: 'GB 14683-2017', name: '' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikabond-180', position: 'floor' as any, label: '' },
  },
  {
    id: 'Sikafloor-2460',
    seriesId: 'sikafloor',
    processId: '',
    label: 'Sikafloor-2460 环氧自流平系统（车库）',
    fullName: 'Sikafloor-2460 环氧自流平系统（车库）',
    imagePath: 'images/products/sikafloor-2460.jpg',
    description: '环氧自流平地坪系统，提供无缝、平整的表面',
    advantages: [
      '自流平效果好表面无缝平整',
      '优异的耐化学介质性能',
      '高洁净度满足GMP要求',
      '抗静电选项可选',
      '使用寿命长达15年以上'
    ],
    certifications: [
      { code: 'GB/T 22374-2018', name: '地坪涂装材料国家标准' },
      { code: 'ISO 9001', name: '质量管理体系认证' }
    ],
    applicableSpaces: [],
    applicableSceneApps: [],
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-Sikafloor-2460', position: 'floor' as any, label: '' },
  }
];
