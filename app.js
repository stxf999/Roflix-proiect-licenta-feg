// n am backend sorry ca ma doare creieru

const DEMO_EMAIL = "demo@roflix.ro";
const DEMO_PASSWORD = "parola123";

// setari implicite
const DEFAULT_PROFILE_SETTINGS = {
    Andrei: { displayName: "Andrei", avatarUrl: null, isKid: false },
    Maria: { displayName: "Maria", avatarUrl: null, isKid: false },
    Invitat: { displayName: "Invitat", avatarUrl: null, isKid: false }
};

const DEFAULT_APP_SETTINGS = {
    themeAccent: "flag",
    autoplayNext: true,
    reduceFlashing: false,
    language: "ro"
};

// traduceri bazate pe key translations, as fi facut un csv, da e mai simplu aici
const TRANSLATIONS = {
    en: {
        "auth.signInTitle": "Sign In",
        "auth.signInSubtitle": "Welcome to ROFLIX - Romanian movies only.",
        "auth.emailLabel": "Email",
        "auth.passwordLabel": "Password",
        "auth.emailPlaceholder": "demo@roflix.ro",
        "auth.passwordPlaceholder": "parola123",
        "auth.signInButton": "Sign In",
        "auth.demoHintLabel": "Demo account:",
        "auth.projectNote": "This is a university project. No real accounts are created.",
        "auth.newHere": "New to ROFLIX?",
        "auth.signUpNow": "Sign up now",

        "signup.title": "Create account",
        "signup.subtitle": "Concept sign up screen for the ROFLIX thesis project.",
        "signup.emailPlaceholder": "you@example.com",
        "signup.passwordPlaceholder": "Your password",
        "signup.confirmPasswordLabel": "Confirm password",
        "signup.confirmPasswordPlaceholder": "Repeat password",
        "signup.button": "Create account",
        "signup.note":
            "This is a concept UI. In a real version of ROFLIX, you could create your account here. This is a university project. No real accounts are created.",
        "signup.haveAccount": "Already have an account?",

        "profiles.title": "Who is watching?",
        "profiles.manage": "Manage profiles",

        "nav.home": "Home",
        "nav.movies": "Movies",
        "nav.myList": "My List",
        "nav.Pricing": "Pricing Plans",
        "nav.searchPlaceholder": "Search Romanian movies...",

        "menu.manageProfiles": "Manage Profiles",
        "menu.account": "Account",
        "menu.settings": "Settings",
        "menu.logout": "Log out",

        "hero.play": "▶ Play",
        "hero.moreInfo": "More info",

        "movies.allTitle": "All Romanian movies on ROFLIX",
        "mylist.title": "My List",
        "mylist.empty":
            "You have not added any Romanian movies yet. Start exploring ROFLIX!",

        "search.resultsTitle": "Search results for",
        "search.noResults":
            "No results found. Try another Romanian title or category.",

        "settings.title": "Settings",
        "settings.subtitle": "Personalize your ROFLIX experience.",
        "settings.tabProfile": "Profile",
        "settings.tabAccount": "Account",
        "settings.tabExperience": "Playback & UI",

        "settings.profileTitle": "Profile settings",
        "settings.profileDescription":
            "Update your display name, avatar and maturity preferences for the current profile.",
        "settings.profileNameLabel": "Profile name",
        "settings.profileNamePlaceholder": "Profile name",
        "settings.profileNameHint":
            "This name is shown in the profile selector and in the navigation bar.",
        "settings.kidLabel": "Kid profile",
        "settings.kidDescription":
            "Interface tuned for younger viewers. For this demo, this is visual only.",
        "settings.avatarLabel": "Profile picture",
        "settings.avatarUpload": "Upload image",
        "settings.avatarReset": "Remove picture",
        "settings.avatarHint":
            "Images stay only in your browser. Nothing is uploaded to a server.",

        "settings.accountTitle": "Account",
        "settings.accountDescription": "Account information for the ROFLIX demo user.",
        "settings.accountEmailLabel": "Email",
        "settings.accountPlanLabel": "Plan",
        "settings.accountPlanValue": "ROFLIX Student (demo)",
        "settings.accountStatusLabel": "Account status",
        "settings.accountStatusValue":
            "Demo account for a bachelor thesis project.",
        "settings.dangerTitle": "Danger zone",
        "settings.dangerDescription":
            "You can clear all local data for this demo, including My List and profile customizations.",
        "settings.resetButton": "Clear local data and restart app",

        "settings.experienceTitle": "Playback & UI",
        "settings.experienceDescription":
            "Control autoplay behavior, visual intensity and theme accent colors.",
        "settings.autoplayLabel": "Autoplay next title",
        "settings.autoplayDescription":
            "Automatically continue watching when the current title finishes. Behavior is simulated in this prototype.",
        "settings.reduceFlashingLabel": "Reduce flashing",
        "settings.reduceFlashingDescription":
            "Soften some visual effects and transitions for more comfort.",
        "settings.accentLabel": "Accent colors",
        "settings.accentFlag": "Romanian flag",
        "settings.accentRed": "Red focus",
        "settings.accentBlue": "Blue focus",
        "settings.accentHint":
            "Accent colors are applied to buttons and highlights across the app.",
        "settings.accentHint":
            "Accent colors are applied to buttons and highlights across the app.",

        "footer.tagline":
            "© 2025 ROFLIX. All rights reserved. Fully designed by Bostoaca Stefan.",
        "footer.address":
            "Str. Principala, 10, Iași, România.",
        "footer.terms": "Terms of Service",
        "footer.privacy": "Privacy Policy",
        "footer.pricing": "Pricing Plans",
        "footer.follow": "Follow ROFLIX",

        "settings.accentHint":
            "Culorile de accent se aplică pe butoane și elemente evidențiate în toată aplicația.",

        "footer.tagline":
            "© 2025 ROFLIX. Toate drepturile rezervate. Design realizat integral de Bostoaca Ștefan.",
        "footer.address":
            "Str. Principala, 10, Iași, România.",
        "footer.terms": "Termeni și condiții",
        "footer.privacy": "Politica de confidențialitate",
        "footer.pricing": "Planuri abonamente",
        "footer.follow": "Urmărește ROFLIX",

        "modal.detailsTitle": "Detalii",



        "modal.detailsTitle": "Details",
        "modal.director": "Director:",
        "modal.cast": "Main cast:",
        "modal.languageTitle": "Language & subtitles",
        "modal.languageLabel": "Language:",
        "modal.languageValue": "Romanian",
        "modal.subtitlesLabel": "Subtitles:",
        "modal.subtitlesValue": "RO, EN",

        "player.note":
            "This is a placeholder trailer. In a real deployment, ROFLIX would stream the selected movie securely."
    },

    ro: {
        "auth.signInTitle": "Autentificare",
        "auth.signInSubtitle": "Bine ai venit pe ROFLIX - doar filme românești.",
        "auth.emailLabel": "Email",
        "auth.passwordLabel": "Parolă",
        "auth.emailPlaceholder": "demo@roflix.ro",
        "auth.passwordPlaceholder": "parola123",
        "auth.signInButton": "Autentificare",
        "auth.demoHintLabel": "Cont demo:",
        "auth.projectNote":
            "Acesta este un proiect universitar. Nu se creează conturi reale.",
        "auth.newHere": "Ești nou pe ROFLIX?",
        "auth.signUpNow": "Creează cont",

        "signup.title": "Creează cont",
        "signup.subtitle":
            "Interfață de înregistrare conceptuală pentru proiectul ROFLIX.",
        "signup.emailPlaceholder": "tu@example.com",
        "signup.passwordPlaceholder": "Parola ta",
        "signup.confirmPasswordLabel": "Confirmă parola",
        "signup.confirmPasswordPlaceholder": "Repetă parola",
        "signup.button": "Creează cont",
        "signup.note":
            "Aceasta este o interfață de concept. Într-o versiune reală ROFLIX ți-ai putea crea cont aici. Acesta este un proiect universitar. Nu se creează conturi reale.",
        "signup.haveAccount": "Ai deja cont?",

        "profiles.title": "Cine se uită?",
        "profiles.manage": "Gestionează profiluri",

        "nav.home": "Acasă",
        "nav.movies": "Filme",
        "nav.myList": "Lista mea",
        "nav.Pricing": "Planuri Abonamente",
        "nav.searchPlaceholder": "Caută filme românești...",

        "menu.manageProfiles": "Gestionează profiluri",
        "menu.account": "Cont",
        "menu.settings": "Setări",
        "menu.logout": "Deconectare",

        "hero.play": "▶ Redă",
        "hero.moreInfo": "Mai multe detalii",

        "movies.allTitle": "Toate filmele românești de pe ROFLIX",
        "mylist.title": "Lista mea",
        "mylist.empty":
            "Nu ai adăugat încă niciun film românesc. Începe să explorezi ROFLIX!",

        "search.resultsTitle": "Rezultate pentru",
        "search.noResults":
            "Nu am găsit rezultate. Încearcă un alt titlu sau o altă categorie.",

        "settings.title": "Setări",
        "settings.subtitle": "Personalizează-ți experiența ROFLIX.",
        "settings.tabProfile": "Profil",
        "settings.tabAccount": "Cont",
        "settings.tabExperience": "Redare & UI",

        "settings.profileTitle": "Setări profil",
        "settings.profileDescription":
            "Actualizează numele afișat, avatarul și preferințele de vârstă pentru profilul curent.",
        "settings.profileNameLabel": "Nume profil",
        "settings.profileNamePlaceholder": "Nume profil",
        "settings.profileNameHint":
            "Acest nume apare în selectorul de profil și în bara de navigație.",
        "settings.kidLabel": "Profil pentru copii",
        "settings.kidDescription":
            "Interfață adaptată pentru cei mici. În acest demo efectul este doar vizual.",
        "settings.avatarLabel": "Poză de profil",
        "settings.avatarUpload": "Încarcă imagine",
        "settings.avatarReset": "Șterge poza",
        "settings.avatarHint":
            "Imaginile rămân doar în browserul tău. Nimic nu este încărcat pe server.",

        "settings.accountTitle": "Cont",
        "settings.accountDescription":
            "Informații despre contul demo ROFLIX.",
        "settings.accountEmailLabel": "Email",
        "settings.accountPlanLabel": "Abonament",
        "settings.accountPlanValue": "ROFLIX Student (demo)",
        "settings.accountStatusLabel": "Stare cont",
        "settings.accountStatusValue":
            "Cont demo pentru un proiect de licență.",
        "settings.dangerTitle": "Zonă periculoasă",
        "settings.dangerDescription":
            "Poți șterge toate datele locale pentru acest demo, inclusiv Lista mea și personalizările de profil.",
        "settings.resetButton":
            "Șterge datele locale și repornește aplicația",

        "settings.experienceTitle": "Redare & UI",
        "settings.experienceDescription":
            "Controlează redarea automată, intensitatea vizuală și culorile de accent.",
        "settings.autoplayLabel": "Redă automat următorul titlu",
        "settings.autoplayDescription":
            "Continuă redarea automat după terminarea filmului curent. Comportament simulat în acest prototip.",
        "settings.reduceFlashingLabel": "Redu efectele puternice",
        "settings.reduceFlashingDescription":
            "Atenuează unele efecte vizuale și animații pentru un plus de confort.",
        "settings.accentLabel": "Culori de accent",
        "settings.accentFlag": "Tricolor românesc",
        "settings.accentRed": "Accent roșu",
        "settings.accentBlue": "Accent albastru",
        "settings.accentHint":
            "Culorile de accent se aplică pe butoane și elemente evidențiate în toată aplicația.",

        "modal.detailsTitle": "Detalii",
        "modal.director": "Regie:",
        "modal.cast": "Distribuție:",
        "modal.languageTitle": "Limbă și subtitrări",
        "modal.languageLabel": "Limbă:",
        "modal.languageValue": "Română",
        "modal.subtitlesLabel": "Subtitrări:",
        "modal.subtitlesValue": "RO, EN",

        "player.note":
            "Acesta este un trailer demonstrativ. Într-o versiune reală, ROFLIX ar reda filmul ales în mod securizat."
    }
};

// ajutor pt traduceri, se ia keyu la fiecare cuvant
function t(key) {
    const lang = state.appSettings.language || "ro";
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
}

// starea aplicatiei, client side e simulat oricum, n am backend sorry
const state = {
    isLoggedIn: false,
    currentProfile: null,
    myList: [],
    searchQuery: "",
    currentPage: "home",
    heroMovieId: "moara-cu-noroc",
    profileSettings: JSON.parse(JSON.stringify(DEFAULT_PROFILE_SETTINGS)),
    appSettings: { ...DEFAULT_APP_SETTINGS }
};

// salvam in cache
const dom = {};

document.addEventListener("DOMContentLoaded", () => {
    cacheDom();
    attachEventListeners();
    hydrateStateFromStorage();
    applySettingsToUI();
    applyTranslations();
    updateInitialView();
    setupNavbarScroll();
    setupHero();
    setupSkeletonLoading();
    renderAllMoviesGrid();
    renderMyList();
});

// setari importante pt cache, se salveaza in cookies, daca apesi f12 poti sa le stergi din devtools
function cacheDom() {
    dom.playerOverlay = document.getElementById("player-overlay");
    dom.playerTitle = document.getElementById("player-title");
    dom.playerVideo = document.getElementById("player-video");
    dom.playerVideoSource = document.getElementById("player-video-source");
    dom.playerClose = document.getElementById("player-close");

    // mini barul
    dom.nowPlayingBar = document.getElementById("now-playing-bar");
    dom.npTitle = document.getElementById("np-title");
    dom.npTime = document.getElementById("np-time");
    dom.npProgressInner = document.getElementById("np-progress-inner");


    dom.introOverlay = document.getElementById("intro-overlay");

    dom.loginView = document.getElementById("view-login");
    dom.signupView = document.getElementById("view-signup");
    dom.profilesView = document.getElementById("view-profiles");
    dom.appShell = document.getElementById("app-shell");

    dom.loginForm = document.getElementById("login-form");
    dom.loginEmail = document.getElementById("login-email");
    dom.loginPassword = document.getElementById("login-password");
    dom.loginButton = document.getElementById("login-button");
    dom.loginError = document.getElementById("login-error");

    dom.goToSignup = document.getElementById("go-to-signup");
    dom.goToLogin = document.getElementById("go-to-login");

    dom.signupForm = document.getElementById("signup-form");

    dom.profileCards = document.querySelectorAll(".profile-card");
    dom.manageProfiles = document.getElementById("manage-profiles");

    dom.navbar = document.getElementById("navbar");
    dom.navLinks = document.querySelectorAll(
        ".navbar-links .nav-link, .mobile-menu .nav-link"
    );
    dom.mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    dom.mobileMenu = document.getElementById("mobile-menu");
    dom.languageSelect = document.getElementById("language-select");
    dom.profileMenuToggle = document.getElementById("profile-menu-toggle");
    dom.profileMenu = document.getElementById("profile-menu");
    dom.logoutButton = document.getElementById("logout-button");
    dom.currentProfileLabel = document.getElementById("current-profile-label");
    dom.searchInput = document.getElementById("nav-search-input");

    dom.menuManageProfiles = document.getElementById("menu-manage-profiles");
    dom.menuAccount = document.getElementById("menu-account");
    dom.menuSettings = document.getElementById("menu-settings");

    dom.pageHome = document.getElementById("page-home");
    dom.pageMovies = document.getElementById("page-movies");
    dom.pageMyList = document.getElementById("page-mylist");

    dom.heroBgImage = document.getElementById("hero-bg-image");
    dom.heroTitle = document.getElementById("hero-title");
    dom.heroYear = document.getElementById("hero-year");
    dom.heroDuration = document.getElementById("hero-duration");
    dom.heroRating = document.getElementById("hero-rating");
    dom.heroTags = document.getElementById("hero-tags");
    dom.heroDescription = document.getElementById("hero-description");
    dom.heroPlay = document.getElementById("hero-play");
    dom.heroMoreInfo = document.getElementById("hero-more-info");

    dom.rowsContainer = document.getElementById("rows-container");
    dom.skeletonRows = document.getElementById("skeleton-rows");

    dom.searchResultsSection = document.getElementById("search-results-section");
    dom.searchResultsCards = document.getElementById("search-results-cards");
    dom.searchQueryLabel = document.getElementById("search-query-label");
    dom.searchNoResults = document.getElementById("search-no-results");

    dom.moviesGrid = document.getElementById("movies-grid");
    dom.myListGrid = document.getElementById("mylist-grid");
    dom.myListEmpty = document.getElementById("mylist-empty");

    dom.modalOverlay = document.getElementById("movie-modal-overlay");
    dom.modalClose = document.getElementById("modal-close");
    dom.modalBg = document.getElementById("modal-bg");
    dom.modalPoster = document.getElementById("modal-poster");
    dom.modalTitle = document.getElementById("modal-title");
    dom.modalYear = document.getElementById("modal-year");
    dom.modalDuration = document.getElementById("modal-duration");
    dom.modalRating = document.getElementById("modal-rating");
    dom.modalAgeRating = document.getElementById("modal-age-rating");
    dom.modalTags = document.getElementById("modal-tags");
    dom.modalDescription = document.getElementById("modal-description");
    dom.modalDirector = document.getElementById("modal-director");
    dom.modalCast = document.getElementById("modal-cast");
    dom.modalPlay = document.getElementById("modal-play");
    dom.modalToggleList = document.getElementById("modal-toggle-list");

    // setari popup
    dom.settingsOverlay = document.getElementById("settings-overlay");
    dom.settingsClose = document.getElementById("settings-close");
    dom.settingsTabButtons = document.querySelectorAll(".settings-tab-btn");
    dom.settingsPanels = document.querySelectorAll(".settings-panel");

    dom.profileDisplayNameInput =
        document.getElementById("profile-display-name");
    dom.profileKidToggle = document.getElementById("profile-kid");
    dom.profileAvatarUpload = document.getElementById("profile-avatar-upload");
    dom.profileAvatarReset = document.getElementById("profile-avatar-reset");
    dom.profileAvatarPreview = document.getElementById("profile-avatar-preview");

    dom.accountEmailValue = document.getElementById("account-email-value");
    dom.accountResetApp = document.getElementById("account-reset-app");

    dom.settingAutoplay = document.getElementById("setting-autoplay");
    dom.settingReduceFlashing = document.getElementById("setting-reduce-flashing");
    dom.accentOptions = document.querySelectorAll(".accent-option");

    dom.navbarAvatarMini = document.querySelector(".profile-avatar-mini");
}

// eventuri deobicei la click
function attachEventListeners() {
    if (dom.loginForm) {
        dom.loginForm.addEventListener("submit", handleLoginSubmit);
    }

    if (dom.goToSignup) {
        dom.goToSignup.addEventListener("click", () =>
            switchAuthView("signup")
        );
    }
    if (dom.goToLogin) {
        dom.goToLogin.addEventListener("click", () =>
            switchAuthView("login")
        );
    }

    if (dom.signupForm) {
        dom.signupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert(
                state.appSettings.language === "ro"
                    ? "Aceasta este doar o interfață de concept. Într-o aplicație reală, înregistrarea ar avea loc pe un server sigur."
                    : "This is just a concept UI. In a real app, registration would be handled on a secure backend."
            );
        });
    }

    dom.profileCards.forEach((card) => {
        card.addEventListener("click", () => {
            const name =
                card.getAttribute("data-profile-name") || "Profile";
            state.currentProfile = name;
            saveState();
            updateProfileLabel();
            showMainApp();
        });
    });

    if (dom.manageProfiles) {
        dom.manageProfiles.addEventListener("click", () => {
            alert(
                state.appSettings.language === "ro"
                    ? "Gestionarea completă a profilurilor este doar parte a conceptului în acest prototip."
                    : "Full profile management is part of the concept only in this prototype."
            );
        });
    }

    dom.navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const page = link.getAttribute("data-page");
            if (page) {
                setActivePage(page);
            }
            dom.mobileMenu.classList.remove("open");
        });
    });

    if (dom.mobileMenuToggle) {
        dom.mobileMenuToggle.addEventListener("click", () => {
            dom.mobileMenu.classList.toggle("open");
        });
    }

    if (dom.languageSelect) {
        dom.languageSelect.addEventListener("change", () => {
            state.appSettings.language = dom.languageSelect.value;
            saveState();
            applyTranslations();
            setupHero(); // mic fix aici, era buguit
            renderRows();
            renderAllMoviesGrid();
            renderMyList();
        });
    }

    if (dom.profileMenuToggle) {
        dom.profileMenuToggle.addEventListener("click", () => {
            dom.profileMenu.classList.toggle("open");
        });
    }

    document.addEventListener("click", (event) => {
        if (
            dom.profileMenu &&
            !dom.profileMenu.contains(event.target) &&
            !dom.profileMenuToggle.contains(event.target)
        ) {
            dom.profileMenu.classList.remove("open");
        }
    });

    if (dom.logoutButton) {
        dom.logoutButton.addEventListener("click", handleLogout);
    }

    if (dom.searchInput) {
        dom.searchInput.addEventListener("input", handleSearchInput);
    }

    if (dom.heroPlay) {
        dom.heroPlay.addEventListener("click", () => {
            const movie = getHeroMovie();
            if (movie) {
                openPlayer(movie);
            }
        });
    }

    if (dom.heroMoreInfo) {
        dom.heroMoreInfo.addEventListener("click", () => {
            const movie = getHeroMovie();
            if (movie) {
                openMovieModal(movie.id);
            }
        });
    }

    if (dom.modalClose) {
        dom.modalClose.addEventListener("click", closeMovieModal);
    }
    if (dom.modalOverlay) {
        dom.modalOverlay.addEventListener("click", (event) => {
            if (event.target === dom.modalOverlay) {
                closeMovieModal();
            }
        });
    }

    if (dom.modalPlay) {
        dom.modalPlay.addEventListener("click", () => {
            const movieId = dom.modalOverlay.getAttribute("data-movie-id");
            const movie = findMovieById(movieId);
            if (movie) {
                openPlayer(movie);
            }
        });
    }

    if (dom.modalToggleList) {
        dom.modalToggleList.addEventListener("click", () => {
            const movieId = dom.modalOverlay.getAttribute("data-movie-id");
            toggleMyList(movieId);
            updateModalMyListButton(movieId);
            renderMyList();
            renderAllMovieCardsForMyList();
        });
    }

    // TODO: asigura-te ca nu se face overlap
    if (dom.menuManageProfiles) {
        dom.menuManageProfiles.addEventListener("click", () => {
            dom.profileMenu.classList.remove("open");
            showProfilesView();
        });
    }
    if (dom.menuAccount) {
        dom.menuAccount.addEventListener("click", () => {
            dom.profileMenu.classList.remove("open");
            openSettingsOverlay("account");
        });
    }
    if (dom.menuSettings) {
        dom.menuSettings.addEventListener("click", () => {
            dom.profileMenu.classList.remove("open");
            openSettingsOverlay("profile");
        });
    }

    // eventuri pt setari
    if (dom.settingsClose) {
        dom.settingsClose.addEventListener("click", closeSettingsOverlay);
    }
    if (dom.settingsOverlay) {
        dom.settingsOverlay.addEventListener("click", (event) => {
            if (event.target === dom.settingsOverlay) {
                closeSettingsOverlay();
            }
        });
    }

    dom.settingsTabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const tab = btn.getAttribute("data-settings-tab");
            switchSettingsTab(tab);
        });
    });

    if (dom.profileDisplayNameInput) {
        dom.profileDisplayNameInput.addEventListener("input", () => {
            const profileKey = state.currentProfile;
            if (!profileKey) return;
            const value =
                dom.profileDisplayNameInput.value.trim() || profileKey;
            if (!state.profileSettings[profileKey]) {
                state.profileSettings[profileKey] = {
                    ...DEFAULT_PROFILE_SETTINGS[profileKey]
                };
            }
            state.profileSettings[profileKey].displayName = value;
            saveState();
            updateProfileLabel();
            refreshProfileVisuals();
        });
    }

    if (dom.profileKidToggle) {
        dom.profileKidToggle.addEventListener("change", () => {
            const profileKey = state.currentProfile;
            if (!profileKey) return;
            if (!state.profileSettings[profileKey]) {
                state.profileSettings[profileKey] = {
                    ...DEFAULT_PROFILE_SETTINGS[profileKey]
                };
            }
            state.profileSettings[profileKey].isKid =
                dom.profileKidToggle.checked;
            saveState();
        });
    }

    if (dom.profileAvatarUpload) {
        dom.profileAvatarUpload.addEventListener("change", handleAvatarUpload);
    }

    if (dom.profileAvatarReset) {
        dom.profileAvatarReset.addEventListener("click", () => {
            const profileKey = state.currentProfile;
            if (!profileKey) return;
            if (!state.profileSettings[profileKey]) {
                state.profileSettings[profileKey] = {
                    ...DEFAULT_PROFILE_SETTINGS[profileKey]
                };
            }
            state.profileSettings[profileKey].avatarUrl = null;
            saveState();
            applyProfileAvatar(profileKey);
            updateAvatarPreview(profileKey);
        });
    }

    if (dom.accountResetApp) {
        dom.accountResetApp.addEventListener("click", () => {
            const confirmed = confirm(
                state.appSettings.language === "ro"
                    ? "Aceasta este doar o interfață demo. Datele nu se salvează între sesiuni."
                    : "This is only a demo interface. Data is not persisted between sessions."
            );
            // (STERS) NU MAI FOLOSESC LOCAL STORAGE CA IMI MANANCA CREIERIIIIIIIIIIII
        });
    }


    if (dom.settingAutoplay) {
        dom.settingAutoplay.addEventListener("change", () => {
            state.appSettings.autoplayNext = dom.settingAutoplay.checked;
            saveState();
        });
    }

    if (dom.settingReduceFlashing) {
        dom.settingReduceFlashing.addEventListener("change", () => {
            state.appSettings.reduceFlashing =
                dom.settingReduceFlashing.checked;
            applyReduceFlashing();
            saveState();
        });
    }

    dom.accentOptions.forEach((btn) => {
        btn.addEventListener("click", () => {
            const value = btn.getAttribute("data-accent");
            state.appSettings.themeAccent = value;
            saveState();
            applyThemeAccent(value);
            updateAccentButtons();
        });
    });

    // player event pana mea
    if (dom.playerClose) {
        dom.playerClose.addEventListener("click", closePlayer);
    }
    if (dom.playerOverlay) {
        dom.playerOverlay.addEventListener("click", (event) => {
            if (event.target === dom.playerOverlay) {
                closePlayer();
            }
        });
    }
}

// login fals, doar frontend
function handleLoginSubmit(event) {
    event.preventDefault();
    const email = dom.loginEmail.value.trim();
    const password = dom.loginPassword.value.trim();

    dom.loginError.textContent = "";

    if (!email || !password) {
        dom.loginError.textContent =
            state.appSettings.language === "ro"
                ? "Te rog completează emailul și parola."
                : "Please fill in both email and password.";
        return;
    }

    if (!validateEmail(email)) {
        dom.loginError.textContent =
            state.appSettings.language === "ro"
                ? "Te rog introdu o adresă de email validă."
                : "Please enter a valid email address.";
        return;
    }

    setLoginButtonLoading(true);

    setTimeout(() => {
        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
            state.isLoggedIn = true;
            saveState();
            playIntroAnimation(() => {
                showProfilesView();
            });
        } else {
            dom.loginError.textContent =
                state.appSettings.language === "ro"
                    ? "Email sau parolă incorecte."
                    : "Invalid email or password.";
        }
        setLoginButtonLoading(false);
    }, 800);
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function setLoginButtonLoading(isLoading) {
    if (!dom.loginButton) return;
    if (isLoading) {
        dom.loginButton.classList.add("btn-loading");
        dom.loginButton.disabled = true;
    } else {
        dom.loginButton.classList.remove("btn-loading");
        dom.loginButton.disabled = false;
    }
}

// intro
function playIntroAnimation(onDone) {
    if (!dom.introOverlay) {
        onDone && onDone();
        return;
    }
    dom.introOverlay.classList.add("open");
    dom.introOverlay.setAttribute("aria-hidden", "false");
    setTimeout(() => {
        dom.introOverlay.classList.add("fade-out");
    }, 800);
    setTimeout(() => {
        dom.introOverlay.classList.remove("open", "fade-out");
        dom.introOverlay.setAttribute("aria-hidden", "true");
        onDone && onDone();
    }, 1350);
}

// navigatie
function switchAuthView(view) {
    dom.loginView.classList.remove("active-view");
    dom.signupView.classList.remove("active-view");
    if (view === "login") {
        dom.loginView.classList.add("active-view");
    } else {
        dom.signupView.classList.add("active-view");
    }
}

function showProfilesView() {
    dom.loginView.classList.remove("active-view");
    dom.signupView.classList.remove("active-view");
    dom.profilesView.classList.add("active-view");
    dom.appShell.classList.remove("active-view");
}

function showMainApp() {
    dom.profilesView.classList.remove("active-view");
    dom.loginView.classList.remove("active-view");
    dom.signupView.classList.remove("active-view");
    dom.appShell.classList.add("active-view");
    setActivePage("home");
    updateProfileLabel();
    refreshProfileVisuals();
    renderRows();
    renderAllMoviesGrid();
    renderMyList();
}

function updateInitialView() {
    if (!state.isLoggedIn) {
        switchAuthView("login");
        return;
    }
    // daca deja esti logat, teoretic ar trebui sa te bage in main app.
    // NEVERMIND: am eliminat linia asta pt ca se buguieste in cache.
    if (!state.currentProfile) {
        showProfilesView();
    } else {
        showMainApp();
    }
}

function setActivePage(page) {
    state.currentPage = page;
    const pages = {
        home: dom.pageHome,
        movies: dom.pageMovies,
        mylist: dom.pageMyList
    };
    Object.values(pages).forEach((section) =>
        section.classList.remove("active-page")
    );
    if (pages[page]) {
        pages[page].classList.add("active-page");
    }

    dom.navLinks.forEach((link) => {
        if (link.parentElement.classList.contains("navbar-links")) {
            const linkPage = link.getAttribute("data-page");
            if (linkPage === page) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
}

function handleLogout() {
    // resetam in memory state
    state.isLoggedIn = false;
    state.currentProfile = null;
    state.myList = [];
    state.searchQuery = "";
    state.currentPage = "home";
    state.profileSettings = JSON.parse(JSON.stringify(DEFAULT_PROFILE_SETTINGS));
    state.appSettings = { ...DEFAULT_APP_SETTINGS };

    if (dom.searchInput) dom.searchInput.value = "";
    if (dom.searchResultsSection) dom.searchResultsSection.classList.add("hidden");

    switchAuthView("login");
    dom.appShell.classList.remove("active-view");
    dom.profilesView.classList.remove("active-view");
}


// ELIMINAT
function hydrateStateFromStorage() {
    // nu mai folosesc asta pentru ca se buguieste la refresh
}

function saveState() {
    // nu mai salvez nimic bag picioarele, efectiv nu se mai incarca lista de filme, de ce javascript trebuie sa fie asa de instabil uneori....
}

function updateProfileLabel() {
    if (!dom.currentProfileLabel) return;
    const profileKey = state.currentProfile;
    if (!profileKey) {
        dom.currentProfileLabel.textContent = "Profile";
        return;
    }
    const settings = state.profileSettings[profileKey];
    dom.currentProfileLabel.textContent =
        (settings && settings.displayName) || profileKey;
    applyProfileAvatar(profileKey);
}

// traduceri
function applyTranslations() {
    const lang = state.appSettings.language || "ro";
    if (dom.languageSelect) {
        dom.languageSelect.value = lang;
    }

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const text = dict[key];
        if (!text) return;
        el.textContent = text;
    });

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            const text = dict[key];
            if (!text) return;
            el.setAttribute("placeholder", text);
        });
}

// aplicam setarile pe UI
function applySettingsToUI() {
    if (dom.languageSelect && state.appSettings.language) {
        dom.languageSelect.value = state.appSettings.language;
    }

    applyThemeAccent(state.appSettings.themeAccent || "flag");
    updateAccentButtons();

    if (dom.settingAutoplay) {
        dom.settingAutoplay.checked = !!state.appSettings.autoplayNext;
    }
    if (dom.settingReduceFlashing) {
        dom.settingReduceFlashing.checked =
            !!state.appSettings.reduceFlashing;
    }
    applyReduceFlashing();

    refreshProfileVisuals();
}

// tema, culori chestii, multumesc ww3school ca mi ai dat asta
function applyThemeAccent(accent) {
    const root = document.documentElement;
    if (accent === "red") {
        root.style.setProperty("--accent-red", "#ff3b3b");
        root.style.setProperty("--accent-yellow", "#ff9f43");
        root.style.setProperty("--accent-blue", "#ff4b6e");
    } else if (accent === "blue") {
        root.style.setProperty("--accent-red", "#4a7cff");
        root.style.setProperty("--accent-yellow", "#58c5ff");
        root.style.setProperty("--accent-blue", "#71a3ff");
    } else {
        root.style.setProperty("--accent-red", "#ff4242");
        root.style.setProperty("--accent-yellow", "#ffd54a");
        root.style.setProperty("--accent-blue", "#4a7cff");
    }
}

function updateAccentButtons() {
    dom.accentOptions.forEach((btn) => {
        const value = btn.getAttribute("data-accent");
        if (value === state.appSettings.themeAccent) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// nu merge oricum cum trebuie
function applyReduceFlashing() {
    document.body.classList.toggle(
        "reduce-flashing",
        !!state.appSettings.reduceFlashing
    );
}

// avatar helper
function refreshProfileVisuals() {
    dom.profileCards.forEach((card) => {
        const key = card.getAttribute("data-profile-name");
        const nameEl = card.querySelector(".profile-name");
        const avatarEl = card.querySelector(".profile-avatar");
        const settings =
            state.profileSettings[key] || DEFAULT_PROFILE_SETTINGS[key];

        if (nameEl && settings) {
            nameEl.textContent = settings.displayName;
        }
        if (avatarEl) {
            if (settings && settings.avatarUrl) {
                avatarEl.style.backgroundImage = `url("${settings.avatarUrl}")`;
                avatarEl.classList.add("custom-avatar");
            } else {
                avatarEl.style.backgroundImage = "";
                avatarEl.classList.remove("custom-avatar");
            }
        }
    });

    if (state.currentProfile) {
        applyProfileAvatar(state.currentProfile);
        updateAvatarPreview(state.currentProfile);
        applyProfileSettingsToForm(state.currentProfile);
    }
}

function applyProfileAvatar(profileKey) {
    const settings =
        state.profileSettings[profileKey] ||
        DEFAULT_PROFILE_SETTINGS[profileKey];

    if (dom.navbarAvatarMini) {
        if (settings && settings.avatarUrl) {
            dom.navbarAvatarMini.style.backgroundImage = `url("${settings.avatarUrl}")`;
            dom.navbarAvatarMini.classList.add("custom-avatar");
        } else {
            dom.navbarAvatarMini.style.backgroundImage = "";
            dom.navbarAvatarMini.classList.remove("custom-avatar");
        }
    }
}

function updateAvatarPreview(profileKey) {
    if (!dom.profileAvatarPreview) return;
    const settings =
        state.profileSettings[profileKey] ||
        DEFAULT_PROFILE_SETTINGS[profileKey];
    if (settings && settings.avatarUrl) {
        dom.profileAvatarPreview.style.backgroundImage = `url("${settings.avatarUrl}")`;
    } else {
        dom.profileAvatarPreview.style.backgroundImage = "";
    }
}

function applyProfileSettingsToForm(profileKey) {
    const settings =
        state.profileSettings[profileKey] ||
        DEFAULT_PROFILE_SETTINGS[profileKey];
    if (dom.profileDisplayNameInput && settings) {
        dom.profileDisplayNameInput.value = settings.displayName;
    }
    if (dom.profileKidToggle) {
        dom.profileKidToggle.checked = !!settings.isKid;
    }
}

// handler pt avatar, se ia local storage pt poza
function handleAvatarUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
        alert(
            state.appSettings.language === "ro"
                ? "Te rog alege un fișier de tip imagine."
                : "Please select an image file."
        );
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        const profileKey = state.currentProfile;
        if (!profileKey) return;
        if (!state.profileSettings[profileKey]) {
            state.profileSettings[profileKey] = {
                ...DEFAULT_PROFILE_SETTINGS[profileKey]
            };
        }
        state.profileSettings[profileKey].avatarUrl = reader.result;
        saveState();
        applyProfileAvatar(profileKey);
        updateAvatarPreview(profileKey);
        refreshProfileVisuals();
    };
    reader.readAsDataURL(file);
}

// scroll pt navigatie
function setupNavbarScroll() {
    if (!dom.navbar) return;
    const onScroll = () => {
        if (window.scrollY > 10) {
            dom.navbar.classList.add("navbar-scrolled");
        } else {
            dom.navbar.classList.remove("navbar-scrolled");
        }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
}

// cap
function setupHero() {
    const heroMovie = getHeroMovie();
    if (!heroMovie) return;

    dom.heroBgImage.style.backgroundImage = `url("${heroMovie.backgroundUrl}")`;
    dom.heroTitle.textContent = heroMovie.title;
    dom.heroYear.textContent = heroMovie.year;
    dom.heroDuration.textContent = heroMovie.duration;
    dom.heroRating.textContent = heroMovie.rating.toFixed(1) + " IMDb";
    dom.heroDescription.textContent = getMovieDescription(heroMovie);

    dom.heroTags.innerHTML = "";
    heroMovie.categories.slice(0, 3).forEach((tag) => {
        const span = document.createElement("span");
        span.className = "tag-pill";
        span.textContent = tag;
        dom.heroTags.appendChild(span);
    });
}

function getHeroMovie() {
    return MOVIES.find((m) => m.id === state.heroMovieId) || MOVIES[0];
}

function getMovieDescription(movie) {
    if (state.appSettings.language === "ro") {
        return movie.descriptionRo || movie.description;
    }
    return movie.description;
}

// loader, pt skeleton
function setupSkeletonLoading() {
    setTimeout(() => {
        if (dom.skeletonRows) dom.skeletonRows.classList.add("hidden");
        if (dom.rowsContainer) dom.rowsContainer.classList.remove("hidden");
        renderRows();
    }, 800);
}

// carusele si randuri
function renderRows() {
    if (!dom.rowsContainer) return;
    dom.rowsContainer.innerHTML = "";

    ROW_DEFINITIONS.forEach((rowDef) => {
        const movies = MOVIES.filter(rowDef.filter);
        if (!movies.length) return;

        const rowEl = document.createElement("section");
        rowEl.className = "row fade-in";

        const titleEl = document.createElement("h2");
        titleEl.className = "row-title";
        titleEl.textContent = rowDef.title;
        rowEl.appendChild(titleEl);

        const cardsWrapper = document.createElement("div");
        cardsWrapper.className = "row-cards";
        cardsWrapper.setAttribute("data-row-id", rowDef.id);

        movies.forEach((movie) => {
            const cardHtml = createMovieCardHtml(movie);
            const temp = document.createElement("div");
            temp.innerHTML = cardHtml.trim();
            const cardEl = temp.firstElementChild;
            cardsWrapper.appendChild(cardEl);
        });

        const arrowLeft = document.createElement("button");
        arrowLeft.className = "row-arrow row-arrow-left";
        arrowLeft.innerHTML = "‹";
        arrowLeft.addEventListener("click", () => {
            cardsWrapper.scrollBy({ left: -300, behavior: "smooth" });
        });

        const arrowRight = document.createElement("button");
        arrowRight.className = "row-arrow row-arrow-right";
        arrowRight.innerHTML = "›";
        arrowRight.addEventListener("click", () => {
            cardsWrapper.scrollBy({ left: 300, behavior: "smooth" });
        });

        rowEl.appendChild(arrowLeft);
        rowEl.appendChild(arrowRight);
        rowEl.appendChild(cardsWrapper);
        dom.rowsContainer.appendChild(rowEl);
    });

    attachMovieCardEvents();
}

// html carduri
function createMovieCardHtml(movie) {
    const inMyList = state.myList.includes(movie.id);
    const myListBadge = inMyList
        ? '<span class="mylist-badge">My List</span>'
        : "";

    return `
    <article class="movie-card" data-movie-id="${movie.id}">
      <div class="movie-card-image-wrapper">
        <img src="${movie.posterUrl}" alt="${movie.title} poster" loading="lazy" />
        <div class="movie-card-overlay"></div>
        ${myListBadge}
        <div class="movie-card-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-meta">
            <span>${movie.year}</span>
            <span>•</span>
            <span class="movie-rating-badge">${movie.rating.toFixed(1)}</span>
          </div>
          <div class="movie-quick-actions">
            <button type="button" class="icon-btn js-play" title="Play">▶</button>
            <button type="button" class="icon-btn js-toggle-mylist" title="Add to My List">+</button>
            <button type="button" class="icon-btn js-more" title="More info">i</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function attachMovieCardEvents() {
    const cards = document.querySelectorAll(".movie-card");
    cards.forEach((card) => {
        const movieId = card.getAttribute("data-movie-id");
        const playBtn = card.querySelector(".js-play");
        const moreBtn = card.querySelector(".js-more");
        const toggleListBtn = card.querySelector(".js-toggle-mylist");

        card.addEventListener("click", (event) => {
            if (event.target.closest(".icon-btn")) return;
            openMovieModal(movieId);
        });

        if (playBtn) {
            playBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                const movie = findMovieById(movieId);
                if (movie) {
                    openPlayer(movie);
                }
            });
        }

        if (moreBtn) {
            moreBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                openMovieModal(movieId);
            });
        }

        if (toggleListBtn) {
            toggleListBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                toggleMyList(movieId);
                renderRows();
                renderAllMoviesGrid();
                renderMyList();
            });
        }
    });
}

// bara de cautare
function handleSearchInput(event) {
    state.searchQuery = event.target.value.trim();
    if (!state.searchQuery) {
        dom.searchResultsSection.classList.add("hidden");
        return;
    }
    const queryLower = state.searchQuery.toLowerCase();
    const results = MOVIES.filter((movie) => {
        const inTitle = movie.title.toLowerCase().includes(queryLower);
        const inCategories = movie.categories.some((c) =>
            c.toLowerCase().includes(queryLower)
        );
        return inTitle || inCategories;
    });

    dom.searchResultsSection.classList.remove("hidden");
    dom.searchQueryLabel.textContent = ` "${state.searchQuery}"`;
    dom.searchResultsCards.innerHTML = "";
    dom.searchNoResults.classList.add("hidden");

    if (!results.length) {
        dom.searchNoResults.classList.remove("hidden");
        return;
    }

    results.forEach((movie) => {
        const html = createMovieCardHtml(movie);
        const temp = document.createElement("div");
        temp.innerHTML = html.trim();
        const cardEl = temp.firstElementChild;
        dom.searchResultsCards.appendChild(cardEl);
    });

    attachMovieCardEvents();
}

// pagina de filme
function renderAllMoviesGrid() {
    if (!dom.moviesGrid) return;
    dom.moviesGrid.innerHTML = "";
    MOVIES.forEach((movie) => {
        const html = createMovieCardHtml(movie);
        const temp = document.createElement("div");
        temp.innerHTML = html.trim();
        const cardEl = temp.firstElementChild;
        dom.moviesGrid.appendChild(cardEl);
    });
    attachMovieCardEvents();
}

// list amea
function toggleMyList(movieId) {
    const index = state.myList.indexOf(movieId);
    if (index >= 0) {
        state.myList.splice(index, 1);
    } else {
        state.myList.push(movieId);
    }
    saveState();
}

function renderMyList() {
    if (!dom.myListGrid || !dom.myListEmpty) return;
    dom.myListGrid.innerHTML = "";

    const movies = MOVIES.filter((m) => state.myList.includes(m.id));
    if (!movies.length) {
        dom.myListEmpty.classList.remove("hidden");
        return;
    }
    dom.myListEmpty.classList.add("hidden");

    movies.forEach((movie) => {
        const html = createMovieCardHtml(movie);
        const temp = document.createElement("div");
        temp.innerHTML = html.trim();
        const cardEl = temp.firstElementChild;
        dom.myListGrid.appendChild(cardEl);
    });

    attachMovieCardEvents();
}

// asigura te ca filmele se randeaza in lista mea
function renderAllMovieCardsForMyList() {
    renderRows();
    renderAllMoviesGrid();
}

// POPUP
function openMovieModal(movieId) {
    const movie = findMovieById(movieId);
    if (!movie) return;

    dom.modalOverlay.setAttribute("data-movie-id", movie.id);
    dom.modalBg.style.backgroundImage = `url("${movie.backgroundUrl}")`;
    dom.modalPoster.src = movie.posterUrl;
    dom.modalPoster.alt = `${movie.title} poster`;
    dom.modalTitle.textContent = movie.title;
    dom.modalYear.textContent = movie.year;
    dom.modalDuration.textContent = movie.duration;
    dom.modalRating.textContent = movie.rating.toFixed(1) + " IMDb";
    dom.modalDescription.textContent = getMovieDescription(movie);
    dom.modalDirector.textContent = movie.director;
    dom.modalCast.textContent = movie.cast;

    dom.modalTags.innerHTML = "";
    movie.categories.forEach((tag) => {
        const span = document.createElement("span");
        span.className = "tag-pill";
        span.textContent = tag;
        dom.modalTags.appendChild(span);
    });

    updateModalMyListButton(movie.id);

    dom.modalOverlay.classList.add("open");
    dom.modalOverlay.setAttribute("aria-hidden", "false");
}

function closeMovieModal() {
    dom.modalOverlay.classList.remove("open");
    dom.modalOverlay.setAttribute("aria-hidden", "true");
}

function updateModalMyListButton(movieId) {
    const inMyList = state.myList.includes(movieId);
    dom.modalToggleList.textContent = inMyList ? "✓ In My List" : "+ My List";
}

// setari overlay
function openSettingsOverlay(defaultTab) {
    dom.settingsOverlay.classList.add("open");
    dom.settingsOverlay.setAttribute("aria-hidden", "false");
    switchSettingsTab(defaultTab || "profile");
    if (state.currentProfile) {
        applyProfileSettingsToForm(state.currentProfile);
        updateAvatarPreview(state.currentProfile);
    }
}

function closeSettingsOverlay() {
    dom.settingsOverlay.classList.remove("open");
    dom.settingsOverlay.setAttribute("aria-hidden", "true");
}

function switchSettingsTab(tabId) {
    dom.settingsTabButtons.forEach((btn) => {
        const tab = btn.getAttribute("data-settings-tab");
        if (tab === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    dom.settingsPanels.forEach((panel) => {
        if (panel.id === "settings-" + tabId) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });
}

// folosim timpul real html5 al filmarii mp4 ca sa se randeze in bara de loading
let videoDurationSeconds = 0;

// deschide playeru pt sync
function openPlayer(movie) {
    if (!dom.playerOverlay || !dom.playerVideo || !dom.playerVideoSource) return;

    const prefix =
        state.appSettings.language === "ro" ? "Se redă:" : "Playing:";
    dom.playerTitle.textContent = `${prefix} ${movie.title}`;

    // setam video source
    const videoUrl = movie.videoUrl || "assets/videos/placeholder-trailer.mp4";

    // Reset stare video
    dom.playerVideo.pause();
    dom.playerVideo.currentTime = 0;

    dom.playerVideoSource.src = videoUrl;
    dom.playerVideo.load();

    // mini bar cu metadata filled din data.js
    if (dom.npTitle) {
        dom.npTitle.textContent = `${movie.title} · ${movie.duration}`;
    }

    dom.playerOverlay.classList.add("open");
    dom.playerOverlay.setAttribute("aria-hidden", "false");

    if (dom.nowPlayingBar) {
        dom.nowPlayingBar.classList.add("visible");
    }

    // cand metadata clipului e incarcata stim exact cat dureaza
    dom.playerVideo.onloadedmetadata = function () {
        // durata e in secunde, folosim float
        if (isFinite(dom.playerVideo.duration)) {
            videoDurationSeconds = dom.playerVideo.duration;
        } else {
            videoDurationSeconds = 0;
        }

        // initializam bara la float 0
        updateNowPlayingTime(0, videoDurationSeconds);
    };

    // updatam minibaru constant bazat pe secundele din clip
    dom.playerVideo.ontimeupdate = function () {
        const current = dom.playerVideo.currentTime || 0;
        const total =
            videoDurationSeconds || dom.playerVideo.duration || 0;
        updateNowPlayingTime(current, total);
    };

    // cand videou se termina las bara de load la maxim??
    dom.playerVideo.onended = function () {
        const total =
            videoDurationSeconds || dom.playerVideo.duration || 0;
        updateNowPlayingTime(total, total);
        // Optional: stefan daca vezi asta sa stergi comentariu daca vrei sa se ascunda bara la final de clip.
        // if (dom.nowPlayingBar) dom.nowPlayingBar.classList.remove("visible");
        // doar elmini cele 2 slashuri la linia din mijloc
    };

    // incearca autoplay fortat desi pe edge e buguit pe chrome merge perfect
    dom.playerVideo
        .play()
        .catch(() => {
            // playback
        });
}

function closePlayer() {
    if (!dom.playerOverlay || !dom.playerVideo) return;

    dom.playerOverlay.classList.remove("open");
    dom.playerOverlay.setAttribute("aria-hidden", "true");

    // opreste si reseteaza video
    dom.playerVideo.pause();
    dom.playerVideo.currentTime = 0;
    dom.playerVideo.onloadedmetadata = null;
    dom.playerVideo.ontimeupdate = null;
    dom.playerVideo.onended = null;

    // reseteaza minibaru
    if (dom.nowPlayingBar) {
        dom.nowPlayingBar.classList.remove("visible");
    }
    videoDurationSeconds = 0;
    updateNowPlayingTime(0, 0);
}

// updateaza minibaru bazat pe timestampu clipului
function updateNowPlayingTime(currentSeconds, totalSeconds) {
    if (!dom.npTime || !dom.npProgressInner) return;

    const total = totalSeconds > 0 ? totalSeconds : 0;
    const current = Math.min(currentSeconds, total);

    let percent = 0;
    if (total > 0) {
        percent = (current / total) * 100;
    }

    dom.npProgressInner.style.width = `${percent}%`;

    const currentLabel = formatTime(current);
    const totalLabel = total > 0 ? formatTime(total) : "00:00";
    dom.npTime.textContent = `${currentLabel} / ${totalLabel}`;
}

// formateaza secundele sau ore bazat pe cat de lung e vid
function formatTime(seconds) {
    const total = Math.floor(seconds);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;

    const mm = String(m).padStart(2, "0");
    const ss = String(s).padStart(2, "0");

    if (h > 0) {
        const hh = String(h).padStart(2, "0");
        return `${hh}:${mm}:${ss}`;
    }
    return `${mm}:${ss}`;
}



// helper
function findMovieById(id) {
    return MOVIES.find((m) => m.id === id);
}
