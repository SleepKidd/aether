document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Кибер-прелоадер: убираем экран загрузки после сборки страницы
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }, 600);
    });

    // 2. Шапка: добавляем плотность фона и неоновое свечение при скролле страницы
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "16px 0";
            navbar.style.background = "rgba(5, 5, 8, 0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.8), 0 0 15px rgba(255, 0, 85, 0.1)";
        } else {
            navbar.style.padding = "24px 0";
            navbar.style.background = "rgba(5, 5, 8, 0.7)";
            navbar.style.boxShadow = "none";
        }
    });

    // 3. Скролл-анимации (Scroll Reveal): запуск проявления блоков
    const revealElements = document.querySelectorAll(".reveal");
    
    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", checkReveal);
    checkReveal(); // Проверяем блоки сразу при старте страницы

    // 4. Логика аккордеона FAQ: плавное открытие вкладок свитчей по клику
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        
        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");
            
            // Закрываем другие открытые вкладки, оставляя интерфейс чистым
            faqItems.forEach(i => i.classList.remove("active"));
            
            // Если кликнули на закрытую — плавно активируем её
            if (!isOpen) {
                item.classList.add("active");
            }
        });
    });
});
