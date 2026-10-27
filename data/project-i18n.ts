import type { Locale } from './i18n'

type ProjectCopy = {
  title: string
  role: string
  description: string
  highlights: string[]
  tools: string[]
  skills: string[]
}

const copy: Record<Exclude<Locale, 'en'>, Record<number, ProjectCopy>> = {
  id: {
    1: { title: 'Telemarketing Sekai & Kampanye Dealer', role: 'Telemarketing Specialist', description: 'Mendukung pemasaran Sekai skala nasional melalui telemarketing, tindak lanjut lead di CRM, pelaporan penjualan, serta pelaksanaan kampanye dealer dan distributor.', highlights: ['Mendukung aktivitas pemasaran Sekai nasional dan kampanye penjualan BTL.', 'Menghasilkan dan menindaklanjuti lead melalui telemarketing, cold calling, dan CRM.', 'Menghitung pencapaian kampanye dealer serta mengoordinasikan realisasi insentif dengan Administrasi, Finance, dan Accounting sesuai SOP.', 'Menyiapkan laporan penjualan, memantau target bulanan, serta menganalisis pasar dan kompetitor.'], tools: ['CRM: Salesforce, HubSpot, Zoho', 'Sistem ERP', 'Microsoft Excel', 'Microsoft PowerPoint', 'Email marketing & media sosial'], skills: ['Telemarketing & lead generation', 'Pengelolaan lead CRM', 'Pelaporan kampanye dealer', 'Monitoring target penjualan', 'Presentasi produk & negosiasi'] },
    2: { title: 'Pengelolaan Lead Properti & Telemarketing', role: 'Telemarketing Property', description: 'Mengelola prospek properti melalui sales funnel berbasis CRM, mulai dari kualifikasi, presentasi produk, hingga tindak lanjut untuk mendukung keputusan pembelian.', highlights: ['Mengelola catatan lead CRM dan melakukan telemarketing tertarget.', 'Mencocokkan produk, harga, dan skema pembayaran dengan kebutuhan pelanggan.', 'Melakukan follow-up untuk mendukung kunjungan lokasi, konversi, dan target penjualan bulanan.', 'Menangani keberatan serta menyelaraskan informasi dengan tim Marketing, Sales, dan Operations.'], tools: ['CRM: Salesforce, HubSpot, Zoho', 'Microsoft Excel', 'Google Workspace', 'Email & alat komunikasi'], skills: ['Kualifikasi lead', 'Analisis kebutuhan pelanggan', 'Sales funnel management', 'Presentasi produk', 'Follow-up & penanganan keberatan'] },
    3: { title: 'Analisis Kebutuhan Nasabah & Konsultasi Bancassurance', role: 'Bancassurance Financial Advisor (BFA) (Project Based)', description: 'Mendukung nasabah bank dengan rekomendasi produk asuransi berbasis kebutuhan, penjelasan manfaat yang mudah dipahami, dan pembangunan relasi jangka panjang.', highlights: ['Memasarkan produk asuransi kepada nasabah bank dengan pendekatan berbasis kebutuhan.', 'Melakukan segmentasi prospek dan analisis kebutuhan finansial untuk rekomendasi yang sesuai.', 'Menjelaskan manfaat serta cakupan produk dengan bahasa yang mudah dipahami.', 'Membangun relasi nasabah dan mendukung target penjualan bulanan.'], tools: ['Platform CRM yang tercantum di CV', 'Microsoft Excel', 'Microsoft PowerPoint', 'Email, Zoom & Google Meet'], skills: ['Segmentasi pelanggan', 'Analisis kebutuhan finansial', 'Product positioning', 'Customer engagement', 'Relationship building'] },
    4: { title: 'Event Marketing & Operasional Penjualan OXONE', role: 'Marketing Specialist Event (Based Project)', description: 'Mendukung edukasi produk dan kampanye event, mengumpulkan insight pelanggan, serta membantu menjaga laporan penjualan dan informasi stok tetap terbarui.', highlights: ['Menjelaskan fitur produk kepada pelanggan selama aktivitas pemasaran.', 'Mendukung kampanye event dan mengumpulkan insight pelanggan untuk penjualan.', 'Menyiapkan laporan penjualan dan memantau ketersediaan stok untuk mendukung operasional.'], tools: ['Microsoft Excel', 'Microsoft PowerPoint', 'Google Workspace', 'Platform media sosial', 'Email marketing tools'], skills: ['Dukungan event marketing', 'Product knowledge', 'Customer engagement', 'Pelaporan penjualan', 'Monitoring stok'] },
  },
  zh: {
    1: { title: 'Sekai 电话营销与经销商活动', role: '电话营销专员', description: '通过电话营销、CRM 线索跟进、销售报告及经销商活动执行，支持 Sekai 的全国市场推广。', highlights: ['支持 Sekai 全国市场活动及 BTL 销售推广。', '通过电话营销、外呼和 CRM 开发并跟进销售线索。', '核算经销商活动成果，并按 SOP 协调行政、财务和会计团队落实激励。', '编制销售报告、跟踪月度目标并分析市场及竞品动态。'], tools: ['CRM：Salesforce、HubSpot、Zoho', 'ERP 系统', 'Microsoft Excel', 'Microsoft PowerPoint', '电子邮件营销与社交媒体平台'], skills: ['电话营销与线索开发', 'CRM 线索管理', '经销商活动报告', '销售目标跟踪', '产品介绍与谈判'] },
    2: { title: '房地产线索管理与电话营销', role: '房地产电话营销', description: '通过 CRM 销售流程管理房地产潜在客户，涵盖客户筛选、产品介绍和持续跟进，协助客户作出购买决定。', highlights: ['维护 CRM 线索记录并开展定向电话营销。', '根据客户需求匹配房产、价格和付款方案。', '持续跟进以支持实地看房、客户转化和月度销售目标。', '处理客户异议，并与市场、销售和运营团队保持信息一致。'], tools: ['CRM：Salesforce、HubSpot、Zoho', 'Microsoft Excel', 'Google Workspace', '电子邮件与沟通工具'], skills: ['线索筛选', '客户需求分析', '销售流程管理', '产品介绍', '客户跟进与异议处理'] },
    3: { title: '银行保险客户需求分析与产品咨询', role: '银保理财顾问（BFA，项目制）', description: '根据银行客户需求推荐保险产品，以清晰易懂的方式说明产品保障，并持续建立客户关系。', highlights: ['以需求为导向向银行客户推广保险产品。', '细分潜在客户并分析财务需求，提供合适建议。', '清晰说明产品利益与保障范围。', '维护客户关系并支持月度销售目标。'], tools: ['简历列出的 CRM 平台', 'Microsoft Excel', 'Microsoft PowerPoint', '电子邮件、Zoom 与 Google Meet'], skills: ['客户细分', '财务需求分析', '产品定位', '客户互动', '客户关系维护'] },
    4: { title: 'OXONE 活动营销与销售运营', role: '活动营销专员（项目制）', description: '支持产品介绍和活动推广，收集客户反馈，并协助更新销售报告与库存信息。', highlights: ['在市场活动中向客户介绍产品功能。', '支持活动推广并收集销售相关客户反馈。', '编制销售报告并跟踪库存，支持日常运营。'], tools: ['Microsoft Excel', 'Microsoft PowerPoint', 'Google Workspace', '社交媒体平台', '电子邮件营销工具'], skills: ['活动营销支持', '产品知识', '客户互动', '销售报告', '库存监控'] },
  },
  ko: {
    1: { title: 'Sekai 텔레마케팅 및 대리점 캠페인', role: '텔레마케팅 전문가', description: '텔레마케팅, CRM 잠재 고객 후속 관리, 영업 보고 및 대리점 캠페인 실행을 통해 Sekai 전국 마케팅을 지원했습니다.', highlights: ['Sekai 전국 마케팅 활동과 BTL 영업 캠페인을 지원했습니다.', '텔레마케팅, 콜드콜, CRM으로 잠재 고객을 발굴하고 후속 관리했습니다.', '대리점 캠페인 실적을 계산하고 SOP에 따라 관리·재무·회계팀과 인센티브 지급을 조율했습니다.', '영업 보고서를 작성하고 월간 목표 및 시장·경쟁사 동향을 확인했습니다.'], tools: ['CRM: Salesforce, HubSpot, Zoho', 'ERP 시스템', 'Microsoft Excel', 'Microsoft PowerPoint', '이메일 마케팅 및 소셜 미디어 플랫폼'], skills: ['텔레마케팅 및 잠재 고객 발굴', 'CRM 고객 관리', '대리점 캠페인 보고', '영업 목표 모니터링', '제품 소개 및 협상'] },
    2: { title: '부동산 잠재 고객 관리 및 텔레마케팅', role: '부동산 텔레마케팅', description: 'CRM 영업 퍼널에서 고객 선별, 상품 안내, 지속적인 후속 연락까지 부동산 잠재 고객을 관리해 구매 결정을 지원했습니다.', highlights: ['CRM 고객 기록을 관리하고 대상 고객에게 텔레마케팅을 진행했습니다.', '고객 요구에 맞춰 부동산 상품, 가격, 결제 방식을 안내했습니다.', '방문 상담, 고객 전환 및 월간 영업 목표를 위해 꾸준히 후속 연락했습니다.', '고객 우려에 대응하고 마케팅·영업·운영팀과 상품 정보를 조율했습니다.'], tools: ['CRM: Salesforce, HubSpot, Zoho', 'Microsoft Excel', 'Google Workspace', '이메일 및 커뮤니케이션 도구'], skills: ['잠재 고객 선별', '고객 요구 분석', '영업 퍼널 관리', '제품 소개', '후속 연락 및 우려 대응'] },
    3: { title: '방카슈랑스 고객 분석 및 상품 상담', role: '방카슈랑스 재무 상담사 (BFA, 프로젝트)', description: '고객 요구에 맞는 보험 상품을 추천하고 보장 내용을 이해하기 쉽게 안내하며 장기적인 고객 관계를 지원했습니다.', highlights: ['요구 기반 접근으로 은행 고객에게 보험 상품을 안내했습니다.', '잠재 고객을 분류하고 재정 요구를 분석해 적합한 솔루션을 제안했습니다.', '상품 혜택과 보장 내용을 명확하고 쉽게 설명했습니다.', '고객 관계를 구축하고 월간 영업 목표 달성을 지원했습니다.'], tools: ['이력서에 기재된 CRM 플랫폼', 'Microsoft Excel', 'Microsoft PowerPoint', '이메일, Zoom 및 Google Meet'], skills: ['고객 세분화', '재정 요구 분석', '제품 포지셔닝', '고객 응대', '관계 구축'] },
    4: { title: 'OXONE 이벤트 마케팅 및 영업 운영', role: '이벤트 마케팅 전문가 (프로젝트)', description: '제품 안내와 이벤트 캠페인을 지원하고 고객 의견을 수집했으며 영업 보고와 재고 정보를 최신 상태로 유지하는 데 기여했습니다.', highlights: ['마케팅 활동 중 고객에게 제품 기능을 안내했습니다.', '이벤트 캠페인을 지원하고 판매에 활용할 고객 의견을 수집했습니다.', '영업 보고서를 작성하고 재고 현황을 확인해 운영을 지원했습니다.'], tools: ['Microsoft Excel', 'Microsoft PowerPoint', 'Google Workspace', '소셜 미디어 플랫폼', '이메일 마케팅 도구'], skills: ['이벤트 마케팅 지원', '제품 지식', '고객 응대', '영업 보고', '재고 모니터링'] },
  },
  ja: {
    1: { title: 'Sekaiのテレマーケティング・販売店キャンペーン', role: 'テレマーケティング担当', description: 'テレマーケティング、CRMの見込み客フォロー、売上報告、販売店キャンペーンの実施を通じてSekaiの全国マーケティングを支援しました。', highlights: ['Sekaiの全国マーケティング活動とBTL営業キャンペーンを支援。', 'テレマーケティング、架電、CRMを通じて見込み客を獲得しフォロー。', '販売店キャンペーンの実績を集計し、SOPに沿って事務・財務・経理とインセンティブ実施を調整。', '売上報告を作成し、月間目標や市場・競合動向を確認。'], tools: ['CRM：Salesforce、HubSpot、Zoho', 'ERPシステム', 'Microsoft Excel', 'Microsoft PowerPoint', 'メールマーケティング・ソーシャルメディア'], skills: ['テレマーケティング・見込み客開拓', 'CRM見込み客管理', '販売店キャンペーン報告', '営業目標管理', '商品説明・交渉'] },
    2: { title: '不動産見込み客管理・テレマーケティング', role: '不動産テレマーケティング', description: 'CRMの営業プロセスで不動産の見込み客を管理し、顧客選定、商品説明、継続的なフォローを通じて購入判断を支援しました。', highlights: ['CRMの見込み客記録を管理し、対象を絞った電話営業を実施。', '顧客ニーズに合わせて物件、価格、支払プランを案内。', '現地訪問、成約、月間営業目標を支援するため継続的にフォロー。', '顧客の懸念に対応し、マーケティング・営業・運営チームと情報を調整。'], tools: ['CRM：Salesforce、HubSpot、Zoho', 'Microsoft Excel', 'Google Workspace', 'メール・コミュニケーションツール'], skills: ['見込み客の選定', '顧客ニーズ分析', '営業プロセス管理', '商品説明', 'フォロー・懸念対応'] },
    3: { title: '銀行窓販の顧客ニーズ分析・保険相談', role: '銀行窓販ファイナンシャルアドバイザー（BFA・プロジェクト）', description: '顧客ニーズに沿った保険商品を提案し、保障内容を分かりやすく説明して、長期的な顧客関係づくりを支援しました。', highlights: ['ニーズに合わせて銀行のお客様に保険商品を案内。', '見込み客を分類し、財務ニーズを分析して適切な提案を実施。', '商品メリットと保障内容を分かりやすく説明。', '顧客関係を築き、月間営業目標を支援。'], tools: ['履歴書に記載のCRMプラットフォーム', 'Microsoft Excel', 'Microsoft PowerPoint', 'メール、Zoom、Google Meet'], skills: ['顧客セグメンテーション', '財務ニーズ分析', '商品ポジショニング', '顧客対応', '関係構築'] },
    4: { title: 'OXONEイベントマーケティング・営業運営', role: 'イベントマーケティング担当（プロジェクト）', description: '商品案内とイベント施策を支援し、顧客の声を収集するとともに、売上報告と在庫情報の更新に貢献しました。', highlights: ['マーケティング活動で顧客に商品機能を説明。', 'イベント施策を支援し、営業に活かす顧客の声を収集。', '売上報告を作成し、在庫状況を確認して運営を支援。'], tools: ['Microsoft Excel', 'Microsoft PowerPoint', 'Google Workspace', 'ソーシャルメディア', 'メールマーケティングツール'], skills: ['イベントマーケティング支援', '商品知識', '顧客対応', '売上報告', '在庫確認'] },
  },
}

export function localizeProject(project: any, locale: Locale) {
  const translated = locale === 'en' ? undefined : copy[locale][Number(project.id)]
  return translated ? { ...project, ...translated } : project
}

export function getProjectUi(locale: Locale) {
  const labels = {
    en: { title: 'Experience projects & work snapshots.', intro: 'These project summaries are based on responsibilities in my CV. Dashboard images are visual illustrations with sample records; figures shown are not personal performance claims.', highlights: 'Role highlights', tools: 'Relevant tools listed in the CV', skills: 'Skills demonstrated', imageNotice: 'Illustrative dashboard · sample data', viewImage: 'View full image', closeImage: 'Close image preview', toolIntro: 'The CV lists CRM and ERP systems, Excel and office software, collaboration apps, and digital marketing tools. They support lead tracking, follow-up, reporting, presentations, campaigns, and cross-team coordination.' },
    id: { title: 'Project pengalaman & cuplikan pekerjaan.', intro: 'Ringkasan project ini berdasarkan tanggung jawab yang tercantum di CV. Gambar dashboard bersifat ilustratif dan memakai data contoh; angka pada gambar bukan klaim pencapaian pribadi.', highlights: 'Ruang lingkup pekerjaan', tools: 'Tools relevan yang tercantum di CV', skills: 'Skill yang ditunjukkan', imageNotice: 'Dashboard ilustratif · data contoh', viewImage: 'Lihat gambar ukuran penuh', closeImage: 'Tutup pratinjau gambar', toolIntro: 'CV mencantumkan platform CRM dan ERP, Excel serta aplikasi Office, alat kolaborasi, dan tools pemasaran digital. Tools tersebut mendukung pencatatan lead, follow-up, pelaporan, presentasi, kampanye, dan koordinasi lintas tim.' },
    zh: { title: '工作项目与经历展示。', intro: '项目内容依据简历中的工作职责整理。仪表板图片为示意图并使用样例记录；图片中的数字不代表个人业绩。', highlights: '工作内容', tools: '简历列出的相关工具', skills: '体现的技能', imageNotice: '示意仪表板 · 样例数据', viewImage: '查看大图', closeImage: '关闭图片预览', toolIntro: '简历列出的工具包括 CRM 与 ERP 系统、Excel 和办公软件、协作应用及数字营销工具，可用于线索记录、跟进、报告、演示、活动和团队协作。' },
    ko: { title: '경험 프로젝트 및 업무 사례.', intro: '프로젝트 설명은 이력서의 업무 내용을 바탕으로 정리했습니다. 대시보드 이미지는 예시 데이터가 포함된 시각 자료이며, 표시된 수치는 개인 성과를 의미하지 않습니다.', highlights: '주요 업무', tools: '이력서에 기재된 관련 도구', skills: '발휘한 역량', imageNotice: '예시 대시보드 · 샘플 데이터', viewImage: '이미지 크게 보기', closeImage: '이미지 미리보기 닫기', toolIntro: '이력서에는 CRM·ERP 시스템, Excel 및 Office 소프트웨어, 협업 앱, 디지털 마케팅 도구가 기재되어 있습니다. 잠재 고객 기록과 후속 연락, 보고, 발표, 캠페인 및 팀 간 협업에 활용할 수 있습니다.' },
    ja: { title: '職務プロジェクト・業務事例。', intro: 'プロジェクト内容は履歴書に記載された業務をもとに整理しています。ダッシュボード画像はサンプルデータを使ったイメージで、表示数値は個人の実績を示すものではありません。', highlights: '主な担当業務', tools: '履歴書に記載された関連ツール', skills: '発揮したスキル', imageNotice: 'イメージ画面 · サンプルデータ', viewImage: '画像を拡大', closeImage: '画像プレビューを閉じる', toolIntro: '履歴書にはCRM・ERP、ExcelやOfficeソフト、コラボレーションアプリ、デジタルマーケティングツールが記載されています。見込み客管理、フォロー、報告、資料作成、キャンペーン、チーム連携を支援します。' },
  }
  return labels[locale]
}

const skillExplanations: Record<Locale, Record<string, string>> = {
  en: {
    CRM: 'Record prospects, organize the sales funnel, and keep follow-up activity visible.',
    Languages: 'Indonesian: native. English: intermediate.',
    'Soft skills': 'Communication, teamwork, customer focus, adaptability, problem solving, time management, and relationship building.',
    'Professional skills': 'Sales, needs analysis, product positioning, presentations, research, reporting, negotiation, and lead generation.',
    'Sales & marketing': 'Support campaigns, product promotion, customer insights, and digital marketing activities.',
    'Office & data': 'Prepare spreadsheets, sales reports, presentations, and shared work documents.',
    'Systems & ERP': 'Use business systems for sales processes; the CV also lists ERP systems and Accurate training.',
    Communication: 'Coordinate with customers and Marketing, Sales, Operations, Administration, Finance, and Accounting teams.',
  },
  id: {
    CRM: 'Mencatat prospek, mengatur sales funnel, dan menjaga aktivitas follow-up tetap terpantau.',
    Bahasa: 'Bahasa Indonesia: native. Bahasa Inggris: tingkat menengah.',
    'Keterampilan interpersonal': 'Komunikasi, kolaborasi, orientasi pelanggan, adaptasi, pemecahan masalah, manajemen waktu, dan membangun relasi.',
    'Keahlian profesional': 'Penjualan, analisis kebutuhan, product positioning, presentasi, riset, pelaporan, negosiasi, dan lead generation.',
    'Sales & pemasaran': 'Mendukung kampanye, promosi produk, insight pelanggan, dan aktivitas pemasaran digital.',
    'Perkantoran & data': 'Menyiapkan spreadsheet, laporan penjualan, presentasi, dan dokumen kerja bersama.',
    'Sistem & ERP': 'Mendukung proses penjualan melalui sistem bisnis; CV juga mencantumkan ERP dan pelatihan Accurate.',
    Komunikasi: 'Berkoordinasi dengan pelanggan serta tim Marketing, Sales, Operations, Administrasi, Finance, dan Accounting.',
  },
  zh: {
    '客户关系管理': '记录潜在客户、管理销售流程并跟踪后续联系。',
    '语言': '印度尼西亚语：母语。英语：中级。',
    '软技能': '沟通、团队协作、客户意识、适应能力、解决问题、时间管理与关系维护。',
    '专业技能': '销售、需求分析、产品定位、产品介绍、市场研究、报告、谈判与线索开发。',
    '销售与市场': '支持营销活动、产品推广、客户洞察和数字营销。',
    '办公与数据': '制作电子表格、销售报告、演示文稿及共享工作文件。',
    '系统与 ERP': '支持业务销售流程；简历还列有 ERP 系统和 Accurate 培训。',
    '沟通协作': '与客户以及市场、销售、运营、行政、财务和会计团队协调。',
  },
  ko: {
    CRM: '잠재 고객을 기록하고 영업 퍼널과 후속 연락을 관리합니다.',
    '언어': '인도네시아어: 모국어. 영어: 중급.',
    '소프트 스킬': '소통, 협업, 고객 중심, 적응력, 문제 해결, 시간 관리 및 관계 형성 역량입니다.',
    '전문 역량': '영업, 요구 분석, 제품 포지셔닝, 제품 소개, 시장 조사, 보고, 협상 및 잠재 고객 발굴입니다.',
    '영업 및 마케팅': '캠페인, 제품 홍보, 고객 인사이트 및 디지털 마케팅 활동을 지원합니다.',
    '오피스 및 데이터': '스프레드시트, 영업 보고서, 발표 자료 및 공동 문서를 작성합니다.',
    '시스템 및 ERP': '업무 시스템을 영업 과정에 활용하며 이력서에는 ERP와 Accurate 교육도 기재되어 있습니다.',
    '커뮤니케이션': '고객과 마케팅·영업·운영·관리·재무·회계팀 간 협업을 지원합니다.',
  },
  ja: {
    CRM: '見込み客を記録し、営業プロセスとフォロー状況を管理します。',
    '語学': 'インドネシア語：母語。英語：中級。',
    'ソフトスキル': 'コミュニケーション、協働、顧客志向、適応力、問題解決、時間管理、関係構築です。',
    '専門スキル': '営業、ニーズ分析、商品ポジショニング、商品説明、市場調査、報告、交渉、見込み客開拓です。',
    '営業・マーケティング': 'キャンペーン、商品プロモーション、顧客インサイト、デジタルマーケティングを支援します。',
    'オフィス・データ': '表計算、売上報告、プレゼン資料、共有文書を作成します。',
    'システム・ERP': '業務システムで営業プロセスを支援し、履歴書にはERPとAccurate研修も記載されています。',
    'コミュニケーション': '顧客およびマーケティング・営業・運営・事務・財務・経理チームとの連携です。',
  },
}

export function describeSkillGroup(group: string, locale: Locale) {
  return skillExplanations[locale][group] || ''
}
