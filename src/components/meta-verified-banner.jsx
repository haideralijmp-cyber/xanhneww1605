import PropTypes from 'prop-types';
import '@/assets/css/meta-verified-banner.css';
import BannerMetaImg from '@/assets/images/banner_meta.webp';
import TickIcon from '@/assets/images/tick.svg';

const LANGUAGE_NAMES = {
    ar: 'العربية',
    bg: 'Български',
    cs: 'Čeština',
    da: 'Dansk',
    de: 'Deutsch',
    el: 'Ελληνικά',
    en: 'English',
    es: 'Español',
    et: 'Eesti',
    fi: 'Suomi',
    fr: 'Français',
    ga: 'Gaeilge',
    hi: 'हिन्दी',
    hr: 'Hrvatski',
    hu: 'Magyar',
    it: 'Italiano',
    lb: 'Lëtzebuergesch',
    lt: 'Lietuvių',
    lv: 'Latviešu',
    ms: 'Bahasa Melayu',
    mt: 'Malti',
    nl: 'Nederlands',
    no: 'Norsk',
    pl: 'Polski',
    pt: 'Português',
    ro: 'Română',
    sk: 'Slovenčina',
    sl: 'Slovenščina',
    sv: 'Svenska',
    th: 'ไทย',
    tr: 'Türkçe',
    vi: 'Tiếng Việt',
    zh: '中文',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文'
};

/* ── Icon riêng cho từng card ── */
const IcUserCheck = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
    </svg>
);

const IcDocument = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
);

const IcShield = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
    </svg>
);

const MetaVerifiedBanner = ({ altText, onSubmit, texts, targetLang }) => {
    const alt = altText || texts.metaVerified || 'Meta Verified';
    const languageLabel = LANGUAGE_NAMES[targetLang] || targetLang?.toUpperCase() || 'English';

    const infoBlocks = [
        {
            title: texts.bannerBenefitTitle || 'Lợi ích của việc xác minh',
            cardClass: 'border-[#dce9ff] bg-[#f5f9ff]',
            titleClass: 'text-[#15356b]',
            bodyTextClass: 'text-[#3b4f75]',
            Icon: IcUserCheck,
            items: [
                texts.bannerBenefit1 || 'Khẳng định uy tín pháp lý của trang với huy hiệu xác minh chính thức.',
                texts.bannerBenefit2 || 'Tăng cường an toàn tài khoản nhờ quy trình đối chiếu và lớp bảo vệ bổ sung.',
                texts.bannerBenefit3 || 'Nâng cao hiệu quả tiếp cận khách hàng thông qua mức độ hiển thị ổn định hơn.'
            ]
        },
        {
            title: texts.bannerPrepareTitle || 'Thông tin cần chuẩn bị',
            cardClass: 'border-[#e5eefc] bg-[#fbfdff]',
            titleClass: 'text-[#122a55]',
            bodyTextClass: 'text-[#3d5075]',
            Icon: IcDocument,
            items: [
                texts.bannerPrepare1 || 'Thông tin quản trị viên và thông tin doanh nghiệp hợp lệ.',
                texts.bannerPrepare2 || 'Email/số điện thoại có thể xác minh ngay.',
                texts.bannerPrepare3 || 'Thiết lập bảo mật tài khoản và xác thực hai lớp.'
            ]
        },
        {
            title: texts.bannerProcessTitle || 'Quy trình xử lý hồ sơ',
            cardClass: 'border-[#dfe8f8] bg-[#f9fbff] md:col-span-2 lg:col-span-1',
            titleClass: 'text-[#1a3263]',
            bodyTextClass: 'text-[#3a4f77]',
            Icon: IcShield,
            items: [
                texts.bannerProcess1 || 'Bước 1: Tiếp nhận hồ sơ và kiểm tra tính đầy đủ thông tin.',
                texts.bannerProcess2 || 'Bước 2: Đối chiếu dữ liệu xác minh và mức độ tuân thủ chính sách.',
                texts.bannerProcess3 || 'Bước 3: Cập nhật kết quả xét duyệt và hướng dẫn bước tiếp theo.'
            ]
        }
    ];

    return (
        <div className="mv-page flex min-h-0 flex-1 flex-col" style={{ backgroundImage: 'radial-gradient(circle at top, rgba(24, 119, 242, .12) 0, #f5f9ff 42%, #fff 100%)' }}>
            <header className="mv-banner" aria-label={alt}>
                <div className="mv-banner-inner">
                    <figure className="mv-banner-figure">
                        <img
                            src={BannerMetaImg}
                            alt={alt}
                            className="mv-banner-img"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </figure>
                </div>
            </header>

            <main className="mx-auto w-full max-w-[920px] shrink-0 px-[16px] pb-[32px] pt-[20px] sm:px-[24px]">

                {/* Card trắng */}
                <div className="rounded-[28px] border border-[#dbe9ff] bg-white p-[18px] shadow-[0_16px_38px_rgba(24,119,242,0.12)] sm:p-[28px]">

                    {/* Header bar */}
                    <div className="mb-[20px] flex flex-wrap items-center justify-between gap-[10px] rounded-[16px] bg-[#eef4ff] px-[16px] py-[10px] text-[#1f2a45]">
                        <p className="text-[13px] font-semibold tracking-[0.02em]">{texts.bannerSupportCenter || 'TRUNG TÂM HỖ TRỢ META VERIFIED'}</p>
                        <p className="text-[13px] font-medium text-[#3f4f70]">{texts.bannerIssueDate || 'Ngày phát hành: 16 tháng 5, 2026'}</p>
                    </div>

                    {/* Hero */}
                    <div className="mb-[18px] flex flex-col items-center gap-[14px] sm:flex-row sm:items-start">
                        <div className="shrink-0 rounded-[20px] border border-[#d3e4ff] bg-[linear-gradient(145deg,#f3f8ff_0%,#e7f1ff_100%)] p-[14px] shadow-[0_10px_24px_rgba(24,119,242,0.18)] sm:self-start">
                            <img
                                src={TickIcon}
                                className="h-[56px] w-[56px] drop-shadow-[0_2px_4px_rgba(24,119,242,0.2)] sm:h-[64px] sm:w-[64px]"
                                alt="Meta verified badge"
                            />
                        </div>
                        <div className="min-w-0 w-full text-left">
                            <h1
                                className="break-words !text-[1.6rem] font-black leading-[1.25] text-[#0b1f44] sm:!text-[2.2rem]"
                                style={{ WebkitTextStroke: '0.5px #0b1f44' }}
                            >
                                {texts.bannerTitle || 'Gửi hồ sơ xác minh Meta Verified'}
                            </h1>
                            <p className="text-[15px] text-[#33476a]" style={{ marginTop: '18px', lineHeight: '1.5' }}>
                                {texts.bannerDesc1 || 'Trang của bạn đã đủ điều kiện xét duyệt. Vui lòng hoàn tất hồ sơ để đội ngũ xác minh ưu tiên tiếp nhận và xử lý.'}
                            </p>
                            <p className="text-[15px] text-[#33476a]" style={{ marginTop: '18px', lineHeight: '1.8' }}>
                                {texts.bannerDesc2 || 'Việc gửi hồ sơ đầy đủ giúp rút ngắn thời gian đối soát và tăng độ chính xác trong quá trình xác minh danh tính trang.'}
                            </p>
                            <p className="text-[14px] font-bold text-[#4c6087]" style={{ marginTop: '16px' }}>
                                {texts.bannerIdCode || 'Mã hồ sơ xác minh: #3LWK-NSGP-X43A'}
                            </p>
                        </div>
                    </div>

                    {/* 3 info cards */}
                    <div className="grid gap-[12px] md:grid-cols-2 lg:grid-cols-3">
                        {infoBlocks.map((block) => (
                            <div key={block.title} className={`rounded-[18px] border p-[16px] ${block.cardClass}`}>
                                <p className={`mb-[8px] flex items-center gap-[8px] text-[16px] font-bold ${block.titleClass}`}>
                                    <block.Icon />
                                    <span>{block.title}</span>
                                </p>
                                <ul className={`list-none m-0 p-0 space-y-[8px] text-[13px] leading-[1.6] sm:text-[14px] ${block.bodyTextClass}`}>
                                    {block.items.map((line) => (
                                        <li key={line}>- {line}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
                {/* ── Nút CTA — nằm ngoài card trắng ── */}
                <button
                    type="button"
                    onClick={onSubmit}
                    className="mx-auto mb-[8px] block w-full max-w-[340px] min-h-[48px] px-[20px] py-[13px] text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(24,119,242,0.3)] transition duration-200 hover:brightness-105 focus-visible:outline-none active:brightness-95 sm:text-[16px]"
                    style={{ backgroundImage: 'linear-gradient(90deg, #1877f2, #1a9bff)', borderRadius: '999px', marginTop: '20px' }}
                >
                    {texts.bannerCta || 'Gửi hồ sơ xác minh Meta Verified'}
                </button>

                {/* Lưu ý — dưới nút xanh */}
                <div className="mt-[12px] rounded-[16px] border border-[#ffe4b8] bg-[#fff8eb] p-[14px] text-[13px] leading-[1.6] text-[#7a5a1b] sm:text-[14px]">
                    {texts.bannerNote || 'Lưu ý quan trọng: Hồ sơ chỉ được phê duyệt khi thông tin kê khai đầy đủ, chính xác và có thể đối chiếu.'}
                </div>

            </main>

            {/* ── Footer ── */}
            <footer
                style={{
                    width: '100%',
                    background: 'radial-gradient(circle at top, rgba(24, 119, 242, .12) 0, #f5f9ff 42%, #fff 100%)',
                    padding: '28px 16px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                }}
            >
                <hr style={{ width: '260px', border: 'none', borderTop: '1px solid #ddd', margin: '0 auto' }} />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <select
                        value={targetLang || 'en'}
                        onChange={(e) => e.preventDefault()}
                        className="block min-h-[34px] min-w-[230px] cursor-pointer rounded-[10px] border border-[#dbe9ff] bg-white px-[10px] py-[5px] text-[11px] font-medium leading-tight text-[#1f2a45] shadow-sm outline-none transition duration-150 hover:border-[#1877f2] sm:min-h-[36px] sm:px-[11px] sm:text-[12px]"
                    >
                        <option value={targetLang || 'en'}>{languageLabel}</option>
                    </select>
                </div>

                <hr style={{ width: '100%', maxWidth: '760px', border: 'none', borderTop: '1px solid #ddd', margin: '0' }} />

                <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px 8px', maxWidth: '760px' }}>
                    {[
                        { label: texts.privacyPolicy || 'Chính sách quyền riêng tư' },
                        { label: texts.bannerTerms || 'Điều khoản' },
                        { label: texts.bannerCommunity || 'Tiêu chuẩn cộng đồng' },
                        { label: texts.bannerHelp || 'Trung tâm trợ giúp' },
                        { label: texts.bannerBusinessHelp || 'Meta Business Help Center' },
                    ].map((item, i, arr) => (
                        <span key={item.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#385898', fontSize: '13px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                                {item.label}
                            </a>
                            {i < arr.length - 1 && <span style={{ color: '#bec3c9', fontSize: '10px' }}>•</span>}
                        </span>
                    ))}
                </nav>

                <p style={{ color: '#8a8d91', fontSize: '12px', textAlign: 'center', margin: '0', maxWidth: '760px' }}>
                    Meta © 2026 · Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025
                </p>
            </footer>
        </div>
    );
};

MetaVerifiedBanner.propTypes = {
    altText: PropTypes.string,
    onSubmit: PropTypes.func,
    texts: PropTypes.object,
    targetLang: PropTypes.string
};

export default MetaVerifiedBanner;
