

const MOVIES = [
    {
        id: "dale-carnavalului",
        title: "D-ale carnavalului",
        year: 1958,
        description:
            "A classic Romanian comedy about confusion, disguise and small town gossip that spirals out of control.",
        descriptionRo:
            "O comedie românească clasică despre încurcături, deghizări și bârfe de mahala care scapă de sub control.",
        posterUrl: "assets/posters/dale-carnavalului.jpg",
        backgroundUrl: "assets/backgrounds/dale-carnavalului-bg.jpg",
        categories: ["Comedy", "Classic"],
        duration: "1h 10m",
        rating: 7.4,
        isTrending: false,
        isNew: false,
        director: "Geo Saizescu",
        cast: "Grigore Vasiliu Birlic, Marcel Anghelescu",
        videoUrl: "assets/videos/carnavalului.mp4"
    },
    {
        id: "cucoana-chirita",
        title: "Cucoana Chirița",
        year: 1986,
        description:
            "An adaptation of the beloved Chirița character, following her snobbish attempts to climb the social ladder.",
        descriptionRo:
            "O adaptare după celebra Chirița, urmărind încercările sale snoabe de a urca pe scara socială.",
        posterUrl: "assets/posters/cucoana-chirita.jpg",
        backgroundUrl: "assets/backgrounds/cucoana-chirita-bg.jpg",
        categories: ["Comedy", "Classic"],
        duration: "1h 40m",
        rating: 7.1,
        isTrending: false,
        isNew: false,
        director: "Mircea Drăgan",
        cast: "Draga Olteanu Matei, Dem Rădulescu",
        videoUrl: "assets/videos/cucoana.mp4"
    },
    {
        id: "pup-o-ma",
        title: "Pup-o, mă!",
        year: 2018,
        description:
            "A modern countryside comedy where three friends get tangled in old traditions and chaotic love stories.",
        descriptionRo:
            "O comedie rurală modernă în care trei prieteni se trezesc prinși între tradiții vechi și iubiri haotice.",
        posterUrl: "assets/posters/pup-o-ma.jpg",
        backgroundUrl: "assets/backgrounds/pup-o-ma-bg.jpg",
        categories: ["Comedy", "Modern"],
        duration: "1h 25m",
        rating: 6.2,
        isTrending: true,
        isNew: true,
        director: "Camache",
        cast: "Alex Velea, Alin Panc",
        videoUrl: "assets/videos/pupoma.mp4"
    },
    {
        id: "ticalosii",
        title: "Ticăloșii",
        year: 2007,
        description:
            "A political drama about power, manipulation and backroom deals that shape the fate of the country.",
        descriptionRo:
            "O dramă politică despre putere, manipulare și jocuri de culise care influențează destinul țării.",
        posterUrl: "assets/posters/ticalosii.jpg",
        backgroundUrl: "assets/backgrounds/ticalosii-bg.jpg",
        categories: ["Drama", "Modern"],
        duration: "1h 52m",
        rating: 7.8,
        isTrending: true,
        isNew: false,
        director: "Șerban Marinescu",
        cast: "Ion Dichiseanu, Ștefan Iordache",
        videoUrl: "assets/videos/ticalosii.mp4"
    },
    {
        id: "be-my-cat",
        title: "Be My Cat: A Film for Anne",
        year: 2015,
        description:
            "A disturbing found-footage style thriller about a Romanian actor obsessed with making a film for Anne Hathaway.",
        descriptionRo:
            "Un thriller tulburător filmat în stil found footage despre un actor român obsedat să facă un film pentru Anne Hathaway.",
        posterUrl: "assets/posters/be-my-cat.jpg",
        backgroundUrl: "assets/backgrounds/be-my-cat-bg.jpg",
        categories: ["Horror", "Thriller", "Festival"],
        duration: "1h 31m",
        rating: 6.6,
        isTrending: true,
        isNew: false,
        director: "Adrian Țofei",
        cast: "Adrian Țofei, Sonia Teodoriu",
        videoUrl: "assets/videos/bemycat.mp4"
    },
    {
        id: "figurantii",
        title: "Figuranții",
        year: 1987,
        description:
            "A warm and slightly ironic look at people who dream of the spotlight while remaining in the background.",
        descriptionRo:
            "O privire caldă și ușor ironică asupra oamenilor care visează la lumina reflectoarelor, deși rămân în plan secund.",
        posterUrl: "assets/posters/figurantii.jpg",
        backgroundUrl: "assets/backgrounds/figurantii-bg.jpg",
        categories: ["Drama", "Classic"],
        duration: "1h 38m",
        rating: 7.2,
        isTrending: false,
        isNew: false,
        director: "M. Dulea",
        cast: "Mircea Diaconu, Tora Vasilescu",
        videoUrl: "assets/videos/dale-carnavalului.mp4"
    },
    {
        id: "fratii-jderi",
        title: "Frații Jderi",
        year: 1974,
        description:
            "A historical epic about loyalty, courage and family in the time of medieval Moldavia.",
        descriptionRo:
            "O epopee istorică despre loialitate, curaj și familie în vremurile Moldovei medievale.",
        posterUrl: "assets/posters/fratii-jderi.jpg",
        backgroundUrl: "assets/backgrounds/fratii-jderi-bg.jpg",
        categories: ["Historical", "Classic"],
        duration: "2h 10m",
        rating: 7.9,
        isTrending: false,
        isNew: false,
        director: "Mircea Drăgan",
        cast: "Gheorghe Cozorici, Sebastian Papaiani",
        videoUrl: "assets/videos/dale-carnavalului.mp4"
    },
    {
        id: "doing-money",
        title: "Doing Money",
        year: 2018,
        description:
            "A powerful TV drama based on real events, following a young Romanian woman trapped in a trafficking network.",
        descriptionRo:
            "O dramă TV puternică, inspirată din fapte reale, despre o tânără româncă prinsă într-o rețea de trafic.",
        posterUrl: "assets/posters/doing-money.jpg",
        backgroundUrl: "assets/backgrounds/doing-money-bg.jpg",
        categories: ["Drama", "True Story", "International"],
        duration: "1h 27m",
        rating: 7.5,
        isTrending: true,
        isNew: true,
        director: "Lynsey Miller",
        cast: "Anca Dumitra (character), real case inspiration",
        videoUrl: "assets/videos/dale-carnavalului.mp4"
    },
    {
        id: "scurtcircuit",
        title: "Fault Condition (Scurtcircuit)",
        year: 2017,
        description:
            "An ensemble drama where a tragic incident in a hospital reveals fragile systems and human vulnerability.",
        descriptionRo:
            "O dramă de ansamblu în care un incident tragic într-un spital scoate la iveală sisteme fragile și vulnerabilitatea oamenilor.",
        posterUrl: "assets/posters/scurtcircuit.jpg",
        backgroundUrl: "assets/backgrounds/scurtcircuit-bg.jpg",
        categories: ["Drama", "Festival"],
        duration: "1h 55m",
        rating: 6.9,
        isTrending: false,
        isNew: false,
        director: "Cătălin Saizescu",
        cast: "Dan Chișu, Ioana Flora",
        videoUrl: "assets/videos/dale-carnavalului.mp4"
    },
    {
        id: "moara-cu-noroc",
        title: "La 'Moara cu noroc'",
        year: 1957,
        description:
            "A classic adaptation of Ioan Slavici's novella, following an innkeeper consumed by greed and moral conflict.",
        descriptionRo:
            "O adaptare clasică după nuvela lui Ioan Slavici, despre un cârciumar mistuit de lăcomie și conflicte morale.",
        posterUrl: "assets/posters/moara-cu-noroc.jpg",
        backgroundUrl: "assets/backgrounds/moara-cu-noroc-bg.jpg",
        categories: ["Drama", "Classic"],
        duration: "1h 48m",
        rating: 8.1,
        isTrending: true,
        isNew: false,
        director: "Victor Iliu",
        cast: "Constantin Codrescu, Ioana Bulcă",
        videoUrl: "assets/videos/moaracunoroc.mp4"
    }
];

// randuri pagina principala, se ia bazat pe datele de aici cumva
const ROW_DEFINITIONS = [
    {
        id: "row-popular",
        title: "Popular în România",
        filter: function (m) {
            return m.isTrending;
        }
    },
    {
        id: "row-new",
        title: "Noutăți pe ROFLIX",
        filter: function (m) {
            return m.isNew;
        }
    },
    {
        id: "row-classic",
        title: "Filme Clasice Românești",
        filter: function (m) {
            return m.categories.indexOf("Classic") !== -1;
        }
    },
    {
        id: "row-drama",
        title: "Dramă Românească",
        filter: function (m) {
            return m.categories.indexOf("Drama") !== -1;
        }
    },
    {
        id: "row-festival",
        title: "Selecții de Festival",
        filter: function (m) {
            return m.categories.indexOf("Festival") !== -1;
        }
    }
];
