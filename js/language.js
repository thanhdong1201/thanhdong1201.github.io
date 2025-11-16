// Dữ liệu dịch thuật: Đã sửa lỗi chính tả và dấu cách
const translations = {
    'en': {
        'page_title': 'BanhmiStudio',
        'studio_name': 'BanhmiStudio',
        'slogan': 'THINK BIG <br>WORK SMART',
        'slogan_desc': 'Our games entertain millions of people every day, everywhere.',
        'nav_home': 'HOME',
        'nav_products': 'PRODUCTS',
        'nav_about': 'ABOUT US',
        'nav_news': 'NEWS',
        'nav_careers': 'CAREERS',
        'nav_contact': 'CONTACT',
        'product_section_title': 'Our Games by <span>BanhmiStudio</span>',
        'game1_suffix': 'IQ MYSTERY',
        'game1_desc': 'Experience a super fun brain game with many mind-bending challenges.',
        'game2_suffix': 'ESCAPE ROOM',
        'game2_desc': 'Solve puzzles and escape from challenging rooms.',
        'game3_desc': 'A fun reaction game, challenging speed and accuracy.',
        'about_section_title': 'About <span>BanhmiStudio</span>',
        'about_desc': 'BanhmiStudio is an independent game developer dedicated to the mission "Think big, Work smart". We develop brain and puzzle games, providing profound and enjoyable experiences for millions of players every day, all over the world.',
        'contact_section_title': 'Contact <span>Us</span>',
        'contact_name': 'Full Name',
        'contact_email': 'Email',
        'contact_message': 'Message',
        'btn_download': 'Download',
        'btn_send': 'Send'
    },
    'vi': {
        'page_title': 'BanhmiStudio',
        'studio_name': 'BanhmiStudio',
        'slogan': 'NGHĨ LỚN <br>LÀM VIỆC THÔNG MINH',
        'slogan_desc': 'Các trò chơi của chúng tôi giải trí cho hàng triệu người mỗi ngày, ở mọi nơi.',
        'nav_home': 'TRANG CHỦ',
        'nav_products': 'SẢN PHẨM',
        'nav_about': 'VỀ CHÚNG TÔI',
        'nav_news': 'TIN TỨC',
        'nav_careers': 'TUYỂN DỤNG',
        'nav_contact': 'LIÊN HỆ',
        'product_section_title': 'Các trò chơi của <span>BanhmiStudio</span>',
        'game1_suffix': 'SIÊU TRÍ TUỆ',
        'game1_desc': 'Trải nghiệm game trí tuệ cực thú vị với nhiều thử thách hack não.',
        'game2_suffix': 'PHÒNG THOÁT HIỂM',
        'game2_desc': 'Giải đố và thoát khỏi các căn phòng đầy thử thách.',
        'game3_desc': 'Game phản xạ vui nhộn, thử thách tốc độ và sự chính xác.',
        'about_section_title': 'Về <span>BanhmiStudio</span>',
        'about_desc': 'BanhmiStudio là nhà phát triển game độc lập, tâm huyết với sứ mệnh "Nghĩ lớn, Làm việc thông minh". Chúng tôi phát triển những game trí tuệ và giải đố, mang lại trải nghiệm sâu sắc và thú vị cho hàng triệu người chơi mỗi ngày, khắp nơi trên thế giới.',
        'contact_section_title': 'Liên Hệ <span>Chúng Tôi</span>',
        'contact_name': 'Họ và tên',
        'contact_email': 'Email',
        'contact_message': 'Nội dung',
        'btn_download': 'Tải về',
        'btn_send': 'Gửi'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const langSwitcherBtn = document.getElementById('lang-switcher');
    
    // --- CHỨC NĂNG CHUYỂN ĐỔI NGÔN NGỮ (ĐÃ SỬA LỖI LẶP) ---
    function switchLanguage(lang) {
        body.setAttribute('data-lang', lang);
        langSwitcherBtn.setAttribute('data-current-lang', lang);
        const dict = translations[lang];

        // 1. Dịch các phần tử có class 'translatable'
        document.querySelectorAll('.translatable').forEach(el => {
            const key = el.getAttribute('data-key');
            let translation = dict[key];

            if (translation) {
                // SỬA LỖI: Sử dụng innerHTML cho H2 và H3 vì chúng chứa thẻ HTML (<span> hoặc <br>)
                if (el.tagName.toLowerCase() === 'h3' || el.tagName.toLowerCase() === 'h2') {
                    el.innerHTML = translation; 
                }
                // Các phần tử còn lại (a, p, span, button) chỉ thay đổi nội dung text
                else {
                    el.textContent = translation; 
                }
            }
        });

        // 2. Dịch Placeholder trong form
        document.querySelectorAll('[data-key-placeholder]').forEach(el => {
            const key = el.getAttribute('data-key-placeholder');
            if (dict[key]) {
                el.placeholder = dict[key];
            }
        });

        // 3. Dịch tiêu đề trang
        const titleElement = document.querySelector('title');
        const titleKey = titleElement.getAttribute('data-key');
        if (dict[titleKey]) {
            titleElement.textContent = dict[titleKey];
        }
    }
    
    // Khởi tạo ngôn ngữ mặc định là Tiếng Việt
    switchLanguage('en'); 

    // Xử lý sự kiện click
    langSwitcherBtn.addEventListener('click', () => {
        const currentLang = body.getAttribute('data-lang');
        const newLang = currentLang === 'vi' ? 'en' : 'vi';
        switchLanguage(newLang);
    });
    
    
    // --- HIỆU ỨNG TƯƠNG TÁC (Giữ nguyên) ---
    
    // 1. Sticky Header & Shrink Effect
    const header = document.querySelector('.sticky-header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('header-shrink');
        } else {
            header.classList.remove('header-shrink');
        }
    });
    
    // 2. Logo Wiggle Effect 
    const logo = document.querySelector('.nav-brand img');
    logo.addEventListener('mouseenter', () => {
        logo.classList.add('logo-wiggle');
    });
    logo.addEventListener('animationend', () => {
        logo.classList.remove('logo-wiggle');
    });
});