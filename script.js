document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Архитектурный прелоадер: скрываем экран загрузки после сборки страницы
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 800);
        }, 600);
    });

    // 2. Умная навигация: добавляем тень и плотность фону при прокрутке
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            navbar.style.padding = "20px 0";
            navbar.style.background = "rgba(249, 249, 249, 0.92)";
            navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,0.02)";
        } else {
            navbar.style.padding = "30px 0";
            navbar.style.background = "rgba(249, 249, 249, 0.05)";
            navbar.style.boxShadow = "none";
        }
    });

    // 3. Эффект плавного проявления блоков при скролле (Scroll Reveal)
    const revealElements = document.querySelectorAll(".reveal");
    
    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.88;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", checkReveal);
    checkReveal(); // Инициализация при старте страницы

    // 4. Интерактивные табы материалов (Философия текстур)
    const materialTabs = document.querySelectorAll(".material-tab-item");

    materialTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Убираем активный класс у всех табов
            materialTabs.forEach(item => item.classList.remove("active"));
            
            // Добавляем активный класс текущему табу
            tab.classList.add("active");
        });
    });
});
