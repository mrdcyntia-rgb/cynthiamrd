import type { Locale } from './i18n'

type ExperienceCopy = { role: string; summary: string; responsibilities?: string[] }
type CompetencyCopy = { title: string; group: string; detail: string }
type WorkflowCopy = { title: string; steps: string[] }

const experienceCopy: Partial<Record<Locale, Record<number, ExperienceCopy>>> = {
  en: {
    1: { role: 'Telemarketing Specialist', summary: 'Managed nationwide Sekai telemarketing and marketing activities, sales campaigns, CRM leads, and dealer/distributor campaign calculations and execution.', responsibilities: [
      'Monitored, executed, and reported nationwide Sekai marketing activities.', 'Supported BTL marketing and Sekai sales campaigns.', 'Handled telemarketing, cold calling, lead generation, and customer follow-up.', 'Supported monthly sales and revenue targets by converting prospects into customers.', 'Managed and followed up on CRM leads to improve conversion and sales opportunities.', 'Calculated dealer and distributor campaign performance.', 'Managed campaign execution for dealers and distributors from start to finish.', 'Coordinated with Administration, Finance, and Accounting teams in line with company SOPs.', 'Ensured campaign incentives and results were delivered to dealers and distributors.', 'Developed and carried out marketing strategies aligned with sales and revenue targets.', 'Supported the sales team with promotions, marketing materials, and dealer activities.', 'Analyzed market trends, customer needs, and competitor activity to identify growth opportunities.', 'Addressed objections, presented products persuasively, and negotiated to support sales conversion.', 'Prepared sales reports and monitored performance against monthly targets.',
    ] },
    2: { role: 'Telemarketing Property', summary: 'Managed property leads through CRM and the sales funnel, analyzed buyer needs, presented products, and followed up to support purchase decisions.', responsibilities: [
      'Managed the CRM database and conducted targeted telemarketing throughout the sales funnel.', 'Qualified prospects by analyzing customer needs and matching property offers to buyer profiles.', 'Presented property features, pricing, and payment plans.', 'Followed up consistently to increase site visits, conversion, and sales revenue.', 'Supported monthly sales and revenue targets through prospecting and customer engagement.', 'Addressed customer objections and offered solutions to support purchase decisions.', 'Worked with Marketing, Sales, and Operations to keep product information and business targets aligned.',
    ] },
    3: { role: 'Bancassurance Financial Advisor (BFA) (Project Based)', summary: 'Marketed insurance products to bank customers using a needs-based approach and built long-term customer relationships.', responsibilities: [
      'Marketed insurance products to bank customers through needs-based selling.', 'Segmented customers and assessed financial needs to recommend suitable solutions.', 'Explained product benefits and coverage in clear, accessible language.', 'Built long-term client relationships to support loyalty and repeat business.', 'Supported monthly sales targets through effective product placement and customer engagement.',
    ] },
    4: { role: 'Marketing Specialist Event (Based Project)', summary: 'Supported event marketing, product education, campaigns, sales reporting, and inventory monitoring.', responsibilities: [
      'Explained product features to customers and supported marketing campaigns.', 'Collected customer insights to support sales.', 'Prepared sales reports and monitored inventory availability to support operations.',
    ] },
  },
  zh: {
    1: { role: '电话营销专员', summary: '负责 Sekai 全国电话营销与市场活动、销售推广、CRM 线索管理，以及经销商活动的业绩核算与执行。' },
    2: { role: '房地产电话营销专员', summary: '通过 CRM 和销售流程管理房地产客户线索，分析买家需求、介绍产品并持续跟进，协助客户作出购买决定。' },
    3: { role: '银保理财顾问（项目制）', summary: '以需求为导向向银行客户推广保险产品，并建立长期客户关系。' },
    4: { role: '活动营销专员（项目制）', summary: '支持活动营销、产品介绍、推广活动、销售报告和库存监控。' },
  },
  ko: {
    1: { role: '텔레마케팅 전문가', summary: 'Sekai 전국 텔레마케팅 및 마케팅 활동, 영업 캠페인, CRM 잠재 고객 관리, 대리점 캠페인 실적 계산과 실행을 담당했습니다.' },
    2: { role: '부동산 텔레마케팅 전문가', summary: 'CRM과 영업 퍼널을 통해 부동산 고객을 관리하고, 구매자의 요구를 분석해 상품을 안내하며 구매 결정을 지원했습니다.' },
    3: { role: '방카슈랑스 재무 상담사 (프로젝트)', summary: '고객 요구에 맞춰 은행 고객에게 보험 상품을 안내하고 장기적인 고객 관계를 구축했습니다.' },
    4: { role: '이벤트 마케팅 전문가 (프로젝트)', summary: '이벤트 마케팅, 제품 안내, 캠페인, 영업 보고 및 재고 모니터링을 지원했습니다.' },
  },
  ja: {
    1: { role: 'テレマーケティング担当', summary: 'Sekaiの全国マーケティング活動、営業キャンペーン、CRMの見込み客管理、販売店キャンペーンの実績計算と実行を担当しました。' },
    2: { role: '不動産テレマーケティング担当', summary: 'CRMと営業プロセスで不動産の見込み客を管理し、購入希望者のニーズ分析、商品説明、継続的なフォローを行いました。' },
    3: { role: '銀行窓販ファイナンシャルアドバイザー（プロジェクト）', summary: 'ニーズに合わせて銀行のお客様に保険商品を提案し、長期的な関係を築きました。' },
    4: { role: 'イベントマーケティング担当（プロジェクト）', summary: 'イベントマーケティング、商品案内、キャンペーン、売上報告、在庫確認を支援しました。' },
  },
}

const competencyCopy: Partial<Record<Locale, Record<number, CompetencyCopy>>> = {
  en: {
    1: { title: 'Telemarketing, cold calling & lead generation', group: 'Sales administration', detail: 'Conducted targeted calls, generated leads, followed up, and handled customer objections.' },
    2: { title: 'CRM & sales funnel management', group: 'Data & systems', detail: 'Managed CRM records and lead status to support conversion opportunities.' },
    3: { title: 'Needs analysis & product presentations', group: 'Customer coordination', detail: 'Identified customer needs and presented product features, pricing, payment plans, and solutions.' },
    4: { title: 'Sales reporting & target monitoring', group: 'Sales administration', detail: 'Prepared sales reports and monitored performance against monthly targets.' },
    5: { title: 'Dealer/distributor campaigns', group: 'Dealer campaigns', detail: 'Calculated campaign results and coordinated incentives with Administration, Finance, and Accounting under SOPs.' },
    7: { title: 'Market research & competitor analysis', group: 'Data & systems', detail: 'Reviewed market trends, customer needs, and competitor activity to identify opportunities.' },
    8: { title: 'Accounting & finance administration', group: 'Accounting background', detail: 'Accounting and Business Management graduate, GPA 3.59/4.00, with Accurate and Tax Brevet training.' },
    9: { title: 'Inventory availability monitoring', group: 'Inventory & operations', detail: 'Monitored inventory availability and prepared information to support sales operations.' },
  },
  zh: {
    1: { title: '电话营销、外呼与线索开发', group: '销售行政', detail: '开展目标客户电话沟通，开发线索、持续跟进并处理客户异议。' },
    2: { title: 'CRM 与销售流程管理', group: '数据与系统', detail: '维护 CRM 记录和线索状态，协助提升销售转化机会。' },
    3: { title: '需求分析与产品介绍', group: '客户协调', detail: '了解客户需求，介绍产品特点、价格、付款方案及解决方案。' },
    4: { title: '销售报告与目标跟踪', group: '销售行政', detail: '编制销售报告并跟踪月度目标完成情况。' },
    5: { title: '经销商推广活动', group: '经销商活动', detail: '核算活动成果，并按照流程与行政、财务和会计团队协调激励发放。' },
    7: { title: '市场调研与竞品分析', group: '数据与系统', detail: '分析市场趋势、客户需求和竞争对手动态，发现业务机会。' },
    8: { title: '会计与财务行政', group: '会计背景', detail: '会计与工商管理学士，平均绩点 3.59/4.00，并接受 Accurate 软件及税务培训。' },
    9: { title: '库存可用性监控', group: '库存与运营', detail: '跟踪库存情况并整理信息，支持销售运营顺利开展。' },
  },
  ko: {
    1: { title: '텔레마케팅, 콜드콜 및 잠재 고객 발굴', group: '영업 관리', detail: '대상 고객에게 연락하고 잠재 고객을 발굴·관리하며 고객의 우려에 대응했습니다.' },
    2: { title: 'CRM 및 영업 퍼널 관리', group: '데이터 및 시스템', detail: 'CRM 기록과 고객 진행 상태를 관리해 전환 기회를 지원했습니다.' },
    3: { title: '고객 요구 분석 및 제품 소개', group: '고객 조율', detail: '고객 요구를 파악하고 제품 특징, 가격, 결제 방식과 해결책을 안내했습니다.' },
    4: { title: '영업 보고 및 목표 모니터링', group: '영업 관리', detail: '영업 보고서를 작성하고 월간 목표 대비 실적을 확인했습니다.' },
    5: { title: '대리점 캠페인 운영', group: '대리점 캠페인', detail: '캠페인 실적을 계산하고 사내 절차에 따라 관리·재무·회계팀과 인센티브를 조율했습니다.' },
    7: { title: '시장 조사 및 경쟁사 분석', group: '데이터 및 시스템', detail: '시장 동향, 고객 요구, 경쟁사 활동을 분석해 기회를 찾았습니다.' },
    8: { title: '회계 및 재무 관리', group: '회계 배경', detail: '회계 및 경영학 학사, 평점 3.59/4.00이며 Accurate와 세무 교육을 이수했습니다.' },
    9: { title: '재고 가용성 모니터링', group: '재고 및 운영', detail: '재고 상황을 확인하고 영업 운영에 필요한 정보를 준비했습니다.' },
  },
  ja: {
    1: { title: 'テレマーケティング・架電・見込み客開拓', group: '営業事務', detail: '対象顧客への架電、見込み客の獲得とフォロー、顧客の懸念への対応を行います。' },
    2: { title: 'CRM・営業プロセス管理', group: 'データ・システム', detail: 'CRMの記録と見込み客の状況を管理し、成約機会を支援します。' },
    3: { title: 'ニーズ分析・商品説明', group: '顧客調整', detail: '顧客ニーズを把握し、商品の特徴、価格、支払方法、解決策を説明します。' },
    4: { title: '売上報告・目標管理', group: '営業事務', detail: '売上報告書を作成し、月間目標に対する実績を確認します。' },
    5: { title: '販売店キャンペーン運営', group: '販売店キャンペーン', detail: 'キャンペーン実績を計算し、手順に沿って事務・財務・経理とインセンティブを調整します。' },
    7: { title: '市場調査・競合分析', group: 'データ・システム', detail: '市場動向、顧客ニーズ、競合の活動を分析して機会を見つけます。' },
    8: { title: '会計・財務事務', group: '会計の知識', detail: '会計・経営学学士、GPA 3.59/4.00。Accurateと税務研修を修了。' },
    9: { title: '在庫状況の確認', group: '在庫・運営', detail: '在庫状況を確認し、営業運営に必要な情報を準備します。' },
  },
}

const workflowCopy: Partial<Record<Locale, Record<number, WorkflowCopy>>> = {
  en: {
    1: { title: 'Dealer and distributor campaign', steps: ['Campaign planning', 'Campaign in progress', 'Calculate results', 'Verify execution', 'Coordinate Admin / Finance / Accounting', 'Incentives & reporting'] },
    2: { title: 'Lead-to-sale management', steps: ['Lead received', 'CRM entry & segmentation', 'Needs analysis', 'Product presentation', 'Follow-up & objection handling', 'Update CRM results'] },
  },
  zh: {
    1: { title: '经销商推广活动', steps: ['活动计划', '活动执行', '计算业绩', '核实执行情况', '协调行政 / 财务 / 会计', '激励与报告'] },
    2: { title: '从线索到成交', steps: ['收到销售线索', '录入并分类 CRM', '分析需求', '介绍产品', '持续跟进并处理异议', '更新 CRM 结果'] },
  },
  ko: {
    1: { title: '대리점 캠페인 운영', steps: ['캠페인 계획', '캠페인 진행', '실적 계산', '실행 확인', '관리 / 재무 / 회계 협업', '인센티브 및 보고'] },
    2: { title: '잠재 고객부터 계약까지', steps: ['잠재 고객 접수', 'CRM 입력 및 분류', '요구 분석', '제품 소개', '후속 연락 및 우려 대응', 'CRM 결과 업데이트'] },
  },
  ja: {
    1: { title: '販売店キャンペーン運営', steps: ['キャンペーン計画', 'キャンペーン実施', '実績集計', '実施内容の確認', '事務・財務・経理との連携', 'インセンティブ・報告'] },
    2: { title: '見込み客から成約まで', steps: ['見込み客の受付', 'CRM登録・分類', 'ニーズ分析', '商品紹介', 'フォロー・懸念への対応', 'CRM結果の更新'] },
  },
}

export function localizeExperience(item: any, locale: Locale) {
  const copy = experienceCopy[locale]?.[Number(item.id)]
  if (!copy) return item
  return {
    ...item,
    ...copy,
    responsibilities: copy.responsibilities?.map((detail) => ({ detail })) ?? [],
  }
}

export function localizeCompetency(item: any, locale: Locale) {
  return { ...item, ...competencyCopy[locale]?.[Number(item.id)] }
}

export function localizeWorkflow(item: any, locale: Locale) {
  const copy = workflowCopy[locale]?.[Number(item.id)]
  if (!copy) return item
  return { ...item, title: copy.title, steps: copy.steps.map((label) => ({ label })) }
}

const skillGroups: Partial<Record<Locale, Record<string, string>>> = {
  id: { 'Soft Skills': 'Keterampilan interpersonal', Languages: 'Bahasa', 'Hard Skills': 'Keahlian profesional', CRM: 'CRM', 'Sistem & ERP': 'Sistem & ERP', 'Office & Data': 'Perkantoran & data', 'Komunikasi': 'Komunikasi', 'Sales & Marketing': 'Sales & pemasaran' },
  en: { 'Soft Skills': 'Soft skills', Languages: 'Languages', 'Hard Skills': 'Professional skills', 'Komunikasi': 'Communication', 'Sales & Marketing': 'Sales & marketing', 'Office & Data': 'Office & data', 'Sistem & ERP': 'Systems & ERP' },
  zh: { 'Soft Skills': '软技能', Languages: '语言', 'Hard Skills': '专业技能', CRM: '客户关系管理', 'Sistem & ERP': '系统与 ERP', 'Office & Data': '办公与数据', 'Komunikasi': '沟通协作', 'Sales & Marketing': '销售与市场' },
  ko: { 'Soft Skills': '소프트 스킬', Languages: '언어', 'Hard Skills': '전문 역량', CRM: 'CRM', 'Sistem & ERP': '시스템 및 ERP', 'Office & Data': '오피스 및 데이터', 'Komunikasi': '커뮤니케이션', 'Sales & Marketing': '영업 및 마케팅' },
  ja: { 'Soft Skills': 'ソフトスキル', Languages: '語学', 'Hard Skills': '専門スキル', CRM: 'CRM', 'Sistem & ERP': 'システム・ERP', 'Office & Data': 'オフィス・データ', 'Komunikasi': 'コミュニケーション', 'Sales & Marketing': '営業・マーケティング' },
}

export function localizeSkillGroup(group: string, locale: Locale) {
  return skillGroups[locale]?.[group] || group
}

export function localizedDate(value: string, locale: Locale) {
  if (value.toLocaleLowerCase() === 'sekarang') return ({ en: 'Present', id: 'Sekarang', zh: '至今', ko: '현재', ja: '現在' } as Record<Locale, string>)[locale]
  if (locale === 'id') return value
  const match = value.match(/^([\p{L}]+)\s+(\d{4})$/u)
  if (!match) return value
  const month = match[1].toLowerCase()
  const year = match[2]
  const months: Record<Locale, Record<string, string>> = {
    en: { januari: 'January', februari: 'February', maret: 'March', april: 'April', mei: 'May', juni: 'June', juli: 'July', agustus: 'August', september: 'September', oktober: 'October', november: 'November', desember: 'December' },
    id: {}, zh: {}, ko: {}, ja: {},
  }
  const monthNumber: Record<string, number> = { januari: 1, februari: 2, maret: 3, april: 4, mei: 5, juni: 6, juli: 7, agustus: 8, september: 9, oktober: 10, november: 11, desember: 12 }
  const number = monthNumber[month]
  if (!number) return value
  if (locale === 'zh') return `${year}年${number}月`
  if (locale === 'ja') return `${year}年${number}月`
  if (locale === 'ko') return `${year}년 ${number}월`
  return `${months.en[month] || match[1]} ${year}`
}
