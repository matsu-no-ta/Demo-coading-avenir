// ハンバーガーメニューの動き
const menu = () => {
    const hamburger = document.querySelector(".js-header-hamburger");
    const headerNav = document.querySelector(".js-header-nav");

    if (!hamburger || !headerNav) return;

    // hamburgerがクリックされた時
    hamburger.addEventListener("click", () => {
        // is-activeが含まれていたらis-activeを削除する（ハンバーガーメニューを閉じる）
        if (hamburger.classList.contains("is-active")) {
            hamburger.classList.remove("is-active");
            headerNav.classList.remove("is-active");
        } else {
        // is-activeが含まれていなかったらis-activeを追加する（ハンバーガーメニューを開く）
            hamburger.classList.add("is-active");
            headerNav.classList.add("is-active");
        }
    });

    // ESCキーが押されたらis-activeを削除する（ハンバーガーメニューを閉じる）
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            hamburger.classList.remove("is-active");
            headerNav.classList.remove("is-active");
        }
    });
};

menu();

// fv-copyのアニメーション
const copy = () => {
    const fvCopy = document.querySelector(".js-fv-copy");

    if (!fvCopy) return;

    const keyframes = {
        opacity: [0, 1],
        translate: ["0 4px", 0],
    };
    const options = {
        duration: 1800,
        easing: "ease",
    };

    fvCopy.animate(keyframes, options);
};

copy();

// スクロール動作でフェードインする動作
const fadein = () => {
    // 監視対象が範囲内に現れたら実行する動作
    const animateFade = (entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ["blur(.3rem)", "blur(0)"],
                    translate: ["0 .3rem", 0],
                },
                {
                    duration: 1200,
                    easing: "ease",
                    fill: "forwards",
                }
                );
                obs.unobserve(entry.target);
            }
        });
    };

    // 監視設定
    const fadeObserver = new IntersectionObserver(animateFade);

    // .js-fadeinを監視するように指示
    const fadeElements = document.querySelectorAll(".js-fadein");
        fadeElements.forEach((fadeElement) => {
            fadeObserver.observe(fadeElement);
        });

    // js-fadeinがページ内になければreturnする
        if (!fadeElements) return;
    };

fadein();
