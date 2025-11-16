// Dữ liệu dịch thuật: Đã cập nhật description 3 game
const translations = {
    'en': {
        'page_title': 'BanhmiStudio',
        'studio_name': 'BanhmiStudio',

        // --- NEW SLOGAN + DESC ---
        'slogan': 'THINK SIMPLE <br>CREATE FUN',
        'slogan_desc': 'We believe simple things can be very fun. Just a small idea and a bit of creativity are enough to create a game people enjoy.',

        'nav_home': 'HOME',
        'nav_products': 'PRODUCTS',
        'nav_about': 'ABOUT US',
        'nav_news': 'NEWS',
        'nav_careers': 'CAREERS',
        'nav_contact': 'CONTACT',
        'product_section_title': 'Our Games by <span>BanhmiStudio</span>',

        // (phần game descriptions bạn đã sửa trước đó giữ nguyên)

        'game1_suffix': 'IQ MYSTERY',
        'game1_desc': 'Step into a colorful AI-generated world inspired by viral memes! Solve tricky puzzles with humorous hints and bizarre characters in this fun, family-friendly AI quiz challenge.',

        'game2_suffix': 'ESCAPE ROOM',
        'game2_desc': 'You’ve been kidnapped by Tung Tung Tung Sahur! Navigate a trap-filled maze, avoid detection, and rescue other Italian Brainrot characters trapped inside.',

        'game3_suffix': '', // Thêm để tránh lỗi nếu có
        'game3_desc': 'Protect your food from sneaky flies! Tap fast, unleash abilities, create combos, and push your reflexes to the limit.',

        'about_section_title': 'About <span>BanhmiStudio</span>',

        // --- NEW ABOUT DESC (EN) ---
        'about_desc': 'BanhmiStudio is a small indie team from Vietnam — and by “team”, we mean… actually just one person. We enjoy making simple and fun games that everyone can pick up and play. Our name comes from our favorite food, the Vietnamese “banh mi” — something familiar, easygoing, and always enjoyable. That’s the feeling we want to bring into every game we create.',

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

        // --- NEW SLOGAN + DESC ---
        'slogan': 'Nghĩ Đơn Giản <br>Tạo Niềm Vui',
        'slogan_desc': 'Chúng tôi tin rằng những điều đơn giản cũng có thể rất vui. Chỉ cần một ý tưởng nhỏ và chút sáng tạo là đủ để làm ra một game khiến mọi người thích thú.',

        'nav_home': 'TRANG CHỦ',
        'nav_products': 'SẢN PHẨM',
        'nav_about': 'VỀ CHÚNG TÔI',
        'nav_news': 'TIN TỨC',
        'nav_careers': 'TUYỂN DỤNG',
        'nav_contact': 'LIÊN HỆ',
        'product_section_title': 'Các trò chơi của <span>BanhmiStudio</span>',

        // --- GAME ---
        'game1_suffix': 'SIÊU TRÍ TUỆ',
        'game1_desc': 'Bước vào thế giới đầy màu sắc với các nhân vật AI kỳ lạ lấy cảm hứng từ meme! Giải những câu đố hóc búa với gợi ý hài hước trong tựa game đố vui thân thiện mọi lứa tuổi.',

        'game2_suffix': 'PHÒNG THOÁT HIỂM',
        'game2_desc': 'Bạn bị Tung Tung Tung Sahur bắt cóc và nhốt trong mê cung đầy cạm bẫy. Hãy tìm đường thoát và giải cứu các Brainrot Ý khác đang bị kẹt bên trong.',

        'game3_suffix': '', // Thêm để tránh lỗi nếu có
        'game3_desc': 'Bảo vệ món ăn của bạn khỏi đàn ruồi tinh quái! Chạm thật nhanh, kích hoạt kỹ năng và tạo combo bùng nổ để thử thách phản xạ.',

        'about_section_title': 'Về <span>BanhmiStudio</span>',

        // --- NEW ABOUT DESC (VI) ---
        'about_desc': 'BanhmiStudio là một nhóm indie nhỏ đến từ Việt Nam — và khi nói “nhóm”, ý chúng tôi là… thực ra chỉ có một người thôi. Chúng tôi thích làm những trò chơi đơn giản và vui nhộn mà ai cũng có thể chơi được. Tên studio lấy cảm hứng từ món ăn yêu thích của chúng tôi, bánh mì Việt Nam — quen thuộc, dễ gần và lúc nào cũng ngon miệng. Đó chính là cảm giác mà chúng tôi muốn mang đến cho mỗi trò chơi mình tạo ra.',

        'contact_section_title': 'Liên Hệ <span>Chúng Tôi</span>',
        'contact_name': 'Họ và tên',
        'contact_email': 'Email',
        'contact_message': 'Nội dung',
        'btn_download': 'Tải về',
        'btn_send': 'Gửi'
    }
};


// ... (Phần code JavaScript còn lại không đổi) ...
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
    
    // Khởi tạo ngôn ngữ mặc định là Tiếng Anh
    switchLanguage('en'); 

    // Xử lý sự kiện click
    langSwitcherBtn.addEventListener('click', () => {
        const currentLang = body.getAttribute('data-lang');
        const newLang = currentLang === 'vi' ? 'en' : 'vi';
        switchLanguage(newLang);
    });
    
    
    // --- HIỆU ỨNG TƯƠNG TÁC (ĐÃ SỬA LOGIC HEADER SHRINK) ---
    
    // 1. Sticky Header & Shrink Effect
    const header = document.querySelector('.sticky-header');
    
    // THAY ĐỔI: Sử dụng giá trị cố định (ví dụ 50px) để kích hoạt hiệu ứng thu nhỏ
    const shrinkOffset = 50; 
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > shrinkOffset) {
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