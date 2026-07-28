document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Высокотехнологичный прелоадер: убираем экран сканирования после сборки страницы
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 600);
        }, 800);
    });

    // 2. Умная шапка: добавляем плотность фона и неоновое свечение при скролле страницы
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "16px 0";
            navbar.style.background = "rgba(3, 3, 5, 0.95)";
            navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,0.9), 0 0 20px rgba(255, 0, 85, 0.15)";
        } else {
            navbar.style.padding = "25px 0";
            navbar.style.background = "rgba(3, 3, 5, 0.7)";
            navbar.style.boxShadow = "none";
        }
    });

    // 3. Скролл-анимации проявления (Scroll Reveal)
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

    // 4. Логика кибер-аккордеона FAQ: плавное открытие вкладок по клику
    const faqItems = document.querySelectorAll(".faq-cyber-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-cyber-question");
        
        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");
            
            // Схлопываем остальные вкладки, чтобы интерфейс оставался аккуратным
            faqItems.forEach(i => i.classList.remove("active"));
            
            // Если кликнули на закрытую — плавно активируем её
            if (!isOpen) {
                item.classList.add("active");
            }
        });
    });
});
