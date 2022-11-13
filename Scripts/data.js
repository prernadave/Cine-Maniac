var latestOriginals = [
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/1478x832.webp",
        genre: "DRAMA",
        title: "Causeway",
        desc: "Jennifer Lawrence as a soldier struggling to adjust back home after an injury."
    },

    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/1478x832.webp",
        genre: "DOCUMENTRY",
        title: "My Mind & Me",
        desc: "Follow Selena's six-year journey from darkness into a new light",

    },

    {
        image: "https://is4-ssl.mzstatic.com/image/thumb/QSr2iwSvH8UiozdTcESa-w/1478x832.webp",
        genre: "THRILLER",
        title: "The Mosquito Coast",
        desc: "The truth about the fox family comes to light in the shocking second season",
    },

    {
        image: " https://is1-ssl.mzstatic.com/image/thumb/r85VE266WcKhz9SdLwhb0A/1478x832.webp",
        genre: "KIDS & FAMILY",
        title: "Slumberkins",
        desc: "Cozy creatuers learn how to handle complex feelings.",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/RcgPZ5VHFSmr43fk1fjuMw/1478x832.webp",
        genre: "DOCUMENTRY",
        title: "Louis Armstrong's BLack & Blues ",
        desc: "Experience an unprecedented look into the life of the founding father of jazz.",
    },

    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/_vkF4kzNiSCdmWsVNp0gjw/1478x832.webp",
        genre: "DRAMA",
        title: "Raymond & Ray",
        desc: "Two half brothers leran their deceased, estranged father them to dig his grave.",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/1478x832.webp",
        genre: "COMEDY",
        title: "Acapulco",
        desc: "Maximo is determined to dream even bigger in the sparkling second season",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/nTZk4gGUlYYK1YMyQ0mPow/1478x832.webp",
        genre: "KIDS & FAMILY",
        title: "Ghostwriter",
        desc: "A group of friends embarks on a series of adventueres.",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/1478x832.webp",
        genre: "DRAMA",
        title: "Shanataram",
        desc: "Charlie Hunnam is Lin Ford, a wanted criminal looking for redemption in 1980s India",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/nnWkHXH4wyIt0sZovHx0tA/1478x832.webp",
        genre: "COMEDY",
        title: "The Problem With Jon Stewart",
        desc: "Jon stewart brings people together to highlight solutions for a problem.",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/SkY2_XvaEOUkIvuglXtmAQ/1478x832.webp",
        genre: "KIDS & FAMILY",
        title: "Hello,Jack! The Kindness Show",
        desc: "One small act of kindness can start a chain of many more.",
    },

    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/vkRecJ7JSiYQecCMWMmzOA/1478x832.webp",
        genre: "DRAMA",
        title: "The Graetest Beer Run Ever",
        desc: "Zac Efron as a man who personally brongs beer to his friends fighting in Vietnam.",
    }

];
latestOriginals.map(function (element) {



    var div = document.createElement("div");
    div.setAttribute("class", "card");



    var img = document.createElement("img");
    img.setAttribute("class", "card-dp");
    img.setAttribute("src", element.image);

    var contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "contentDivlatest");

    var genre = document.createElement("p");
    genre.innerText = element.genre;
    genre.setAttribute("class", "genre");

    var title = document.createElement("p");
    title.innerText = element.title;
    title.setAttribute("class", "title");

    var desc = document.createElement("p");
    desc.innerText = element.desc;
    desc.setAttribute("class", "description");

    contentDiv.append(genre, title, desc);

    div.append(img, contentDiv);

    document.querySelector("#latestOriginal .glider").append(div);
});

new Glider(document.querySelector("#latestOriginal .glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: {
        prev: "#latestOriginal .glid-prev",
        next: "#latestOriginal .glider-next",
    },
    responsive: [
        {
            // screens greater than >= 0px
            breakpoint: 0,
            settings: {
                slidesToShow: "1",
                slidesToScroll: "1",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 480px
            breakpoint: 481,
            settings: {
                slidesToShow: "1",
                slidesToScroll: "1",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 775px
            breakpoint: 769,
            settings: {
                slidesToShow: "2",
                slidesToScroll: "2",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 1280px
            breakpoint: 1280,
            settings: {
                slidesToShow: "3",
                slidesToScroll: "3",
                itemWidth: 150,
                duration: 0.25,
            },
        },
    ],


});


var entireSeason = [
    // 1
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp",
        link: "./videopages/Dickinson.html"

    },
    // 2
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/738x416.webp",
        link: "./videopages/badsis.html"
    },
    // 3
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
        link: "./videopages/morningshow.html"
    },
    // 4
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
        link: "./videopages/sev.html"
    },
    // 5
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
        link: "./videopages/loot.html"
    },
    // 6
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/738x416.webp",
        link: ""
    },
    // 7
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/738x416.webp",
        link: ""
    },
    // 8
    {
        image: "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
        link: ""
    },
    // 9
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/dbEKo7rp5RGNNDrCbA7AUQ/738x416.webp",
        image: "https://is2-ssl.mzstatic.com/image/thumb/dbEKo7rp5RGNNDrCbA7AUQ/738x416.webp",
        link: ""
    },
    // 10
    {
        image: "https://is4-ssl.mzstatic.com/image/thumb/fiTyznFr4Rsvd25TNhffww/738x416.webp",
        link: ""
    },
    // 11
    {
        image: "https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/738x416.webp",
        link: ""
    },
    // 12
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/le6mxqLNaXH47MHIH7stzw/738x416.webp",
        link: ""
    },
    // 13
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
        link: ""
    },
    // 14
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/738x416.webp",
        link: ""
    },
    // 15
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/738x416.webp",
        link: ""
    },
    // 16
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/6tJakyTEtS0vrgdc9POZpg/738x416.webp",
        link: ""
    },
    // 17
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/IryLNqf3vJszRupPX70Elg/738x416.webp",
        link: ""
    },
    // 18
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/IryLNqf3vJszRupPX70Elg/738x416.webp",
        link: ""
    },
    // 19
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp",
        link: ""
    },
    // 20
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/QokNbEVUoWjrCk67bJjQUw/738x416.webp",
        link: ""
    },
    // 21
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/738x416.webp",
        link: ""
    },
    // 22
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/738x416.webp",
        link: ""
    },
    // 23
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
        link: ""
    },
    // 24
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp",
        link: ""
    },
    // 25
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/f5MpOY_Tglwyv9W9lwutqg/738x416.webp",
        link: ""
    },


];
entireSeason.map(function (element) {
    var link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", element.link);
    link.setAttribute("class", "innerLinks");
    link.style.textDecoration = "none";

    var div = document.createElement("div");
    div.setAttribute("class", "card");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", element.image);
    div.append(img);
    link.append(div)
    document.querySelector("#entireSeason .glider").append(link);
});
new Glider(document.querySelector("#entireSeason .glider"), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    arrows: {
        prev: "#entireSeason .glid-prev",
        next: "#entireSeason .glider-next",
    },
    responsive: [
        {
            // screens greater than >= 0px
            breakpoint: 0,
            settings: {
                slidesToShow: "2",
                slidesToScroll: "2",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 480px
            breakpoint: 481,
            settings: {
                slidesToShow: "3",
                slidesToScroll: "3",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 775px
            breakpoint: 769,
            settings: {
                slidesToShow: "4",
                slidesToScroll: "4",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 1280px
            breakpoint: 1280,
            settings: {
                slidesToShow: "5",
                slidesToScroll: "5",
                itemWidth: 150,
                duration: 0.25,
            },
        },
    ],
});







var videoDiv = [
    {
        image:
            "https://is3-ssl.mzstatic.com/image/thumb/Features116/v4/e6/b0/50/e6b05061-aa13-0a76-1066-51f970093756/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtU2V2ZXJlbmNlLWxhbmc9ZW5fQVUrZW5fR0IrZW5fQ0ErZW5fVVMubHNy.lsr/558x314sr.webp",
        title: "Severance",
        link: "./Inner Pages/severance.html",
    },
    {
        image:
            "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/dc/5d/e3/dc5de388-3b75-2bea-0438-3e91d10772b1/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmVfU2VlLWxhbmc9ZW5fQVUrZW5fR0IrZW5fQ0ErZW5fVVMubHNy.lsr/558x314sr.webp",
        title: "See",
        link: "./Inner Pages/see.html",
    },

    {
        image:
            "https://is5-ssl.mzstatic.com/image/thumb/Features116/v4/02/45/c8/0245c8b7-1577-ce11-b941-bcd6231f287a/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtRm9yX0FsbF9NYW5raW5kLmxzcg.lsr/558x314sr.webp",
        title: "For All Mankind",
        link: "./Inner Pages/forAllMankind.html",
    },

    {
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/23/3f/15/233f15de-5bd5-b3a0-c15c-b040273c7b04/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtRmluY2gtbGFuZz1lbl9BVStlbl9HQitlbl9DQStlbl9VUy5sc3I.lsr/558x314sr.webp",
        title: "Finch",
        link: "",
    },

    {
        image:
            "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/e3/64/23/e3642370-4b8a-adae-8f39-b4bd563878cf/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtSW52YXNpb24tbGFuZz1kZV9DSCtoZV9JTCtkYV9ESytlbl9BVStmcl9GUitmcl9DQStlbl9HQitub19OTytlbl9DQStmaV9GSStzdl9TRStpdF9JVCtubF9OTCthcl9TQStlbl9VUy5sc3I.lsr/558x314sr.webp",
        title: "Invasion",
        link: "",
    },
    {
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/ed/17/1d/ed171d27-6511-516b-7914-4a272017e8ec/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtU3dhbl9Tb25nLWxhbmc9ZW5fQVUrZW5fR0IrZW5fQ0ErZW5fVVMubHNy.lsr/558x314sr.webp",
        title: "Swan Song",
        link: "",
    },
    {
        image:
            "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/ba/c6/83/bac6838e-a97f-e0cf-a173-c062a750fa00/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtRHJfQnJhaW4tbGFuZz1lbl9BVStlbl9HQitlbl9DQStlbl9VUy5sc3I.lsr/558x314sr.webp",
        title: "Dr. Brain",
        link: "",
    },
];


var comingSoon = [
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/29/f7/63/29f76314-647d-3ed3-14e7-72f327faf761/1c91a9ed-a073-4335-aefc-82c2adf399ac.lsr/1478x832fe.webp",

    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/2e/c9/d7/2ec9d7f4-8f1b-1228-290d-8d7af37160f3/de0ecc4e-e3e0-4523-b166-3248cb62f41a.lsr/1478x832fe.webp",
        details: "New Film Premiers November 18",
    },

    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/20/6d/f0/206df084-3e4c-9008-cdc8-1fd18e3ff0ee/415485be-a8a3-4b83-b601-e79c71a58376.lsr/1478x832fe.webp",
        details: "New Season Premiers Friday",
    },

    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/dc/b6/d4/dcb6d406-8455-4750-d566-edcb128af448/a5197078-557b-4bd2-b716-4c46c1eb2342.lsr/1478x832fe.webp",
        details: "New Film Premiers December 9",
    },

    {
        image: "https://is4-ssl.mzstatic.com/image/thumb/Features112/v4/b1/8c/86/b18c8645-59f1-fd06-dbe2-8f82984987db/4fc8b538-3cc3-425e-ac45-1b9b73391e97.lsr/1478x832fe.webp",
        details: "New Season Premiers December 2",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/8c/3a/9d/8c3a9dad-c8f8-617e-672c-01998dbf77e4/69250172-4947-43bb-b192-a0d8b5663fdd.lsr/1478x832fe.webp",
        details: "New Season Premiers January 13",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/b2/96/de/b296debf-1169-3ace-7aec-80628119b96a/405c6111-43d2-4261-be77-f3a90a9de6fb.lsr/1478x832fe.webp",
        details: "New Film Premiers February 17",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/9c/dd/38/9cdd38d5-4315-8b32-76bd-1912997647c1/e93c1854-79fc-4846-bc05-0bdba1216dd4.lsr/1478x832fe.webp",
        details: "New Series Premiers November 23",
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/9e/2e/51/9e2e512a-70a1-477f-1cac-71ba25639535/98b34724-b7e1-468e-867b-4697dd602183.lsr/1478x832fe.webp",
        details: "New Season Premiers December 9",
    },

    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/15/d4/8b/15d48bbd-c670-0059-4893-7869731c44cb/44d7d0a6-f9fe-4c0a-9137-836dce69ee54.lsr/1478x832fe.webp",
        details: "New Series Premieres Friday"
    },

    {
        image: "https://is4-ssl.mzstatic.com/image/thumb/Features112/v4/00/e8/9e/00e89e43-b7f3-1652-b657-f9b450422c07/75674339-bc89-49ef-bf21-b719da0669a9.lsr/1478x832fe.webp",
        details: "New Series Premiers November 18"
    }

];
comingSoon.map(function (element) {
    var div = document.createElement("div");
    div.setAttribute("class", "card");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", element.image);
    div.append(img);
    document.querySelector("#comingSoon .glider").append(div);
});
new Glider(document.querySelector("#comingSoon .glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: {
        prev: "#comingSoon .glid-prev",
        next: "#comingSoon .glider-next",
    },
    responsive: [
        {
            // screens greater than >= 0px
            breakpoint: 0,
            settings: {
                slidesToShow: "1",
                slidesToScroll: "1",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 480px
            breakpoint: 481,
            settings: {
                slidesToShow: "1",
                slidesToScroll: "1",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 775px
            breakpoint: 769,
            settings: {
                slidesToShow: "2",
                slidesToScroll: "2",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 1280px
            breakpoint: 1280,
            settings: {
                slidesToShow: "3",
                slidesToScroll: "3",
                itemWidth: 150,
                duration: 0.25,
            },
        },
    ],

});


var RemarkableWomen = [


    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp"
    },

    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/D1SCGzM1ESBh-SIkHwcvUQ/738x416.webp"
    },


    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/738x416.webp"
    },

    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/738x416.webp"
    },

    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp"

    },

    {
        image: "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp"

    },

    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/IryLNqf3vJszRupPX70Elg/738x416.webp"

    },

    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/PzRfPYv8-A3pM1Uafiv1qQ/738x416.webp"

    },

];



RemarkableWomen.map(function (element) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", element.image);
    div.append(img);
    document.querySelector("#RemarkableWomen .glider").append(div);
});
new Glider(document.querySelector("#RemarkableWomen .glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: {
        prev: "#RemarkableWomen .glider-prev",
        next: "#RemarkableWomen .glider-next",
    },
});



var boss = [
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/QokNbEVUoWjrCk67bJjQUw/738x416.webp"
    },

    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/738x416.webp"
    },

    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp"
    },

    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/lN-bUPh0Botn7U7jKgbnFg/738x416.webp"
    },

    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp"
    },

    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp"
    },

    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/738x416.webp"
    },

    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp"
    },

    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/738x416.webp"
    },
];

boss.map(function (element) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", element.image);
    div.append(img);
    document.querySelector("#boss .glider").append(div);
});
new Glider(document.querySelector("#boss .glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: {
        prev: "#boss .glider-prev",
        next: "#boss .glider-next",
    },
});

var nailBiting = [

    { img: "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp" },
    { img: "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp" },
    { img: "https://is1-ssl.mzstatic.com/image/thumb/oANBVngpEJDvHRhdyozySA/738x416.webp" },
    { img: "https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/738x416.webp" },
    { img: "https://is4-ssl.mzstatic.com/image/thumb/C7vq4me467uKBCWL8QZA6g/738x416.webp" },
    { img: "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp" },
    {
        img: "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp"
    },
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp"
    },

];


var mystry = [
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/xEt4MZZlgE0IeQMnUSG65Q/738x416.webp"
    },
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/nTZk4gGUlYYK1YMyQ0mPow/738x416.webp"
    },
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/BXmR2-KFYGt0UOGwMaocBg/738x416.webp"
    },
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/f5RNUG1IgsopLqB-Oy2mQw/738x416.webp"
    },
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/3gwPKd4h15ZXDprBfJqYPg/738x416.webp"
    },
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/_Kq-GgPdDxxqWtSZ9GbHug/738x416.webp"
    },
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/StRHuSLsy2WhrdoPNZ07xQ/738x416.webp"
    },
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/fwOVLEMoZhr-wkppMR12XA/738x416.webp"
    },
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/738x416.webp"
    },

];
mystry.map(function (element) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", element.image);
    div.append(img);
    document.querySelector("#mystry .glider").append(div);
});
new Glider(document.querySelector("#mystry .glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: {
        prev: "#mystry .glider-prev",
        next: "#mystry .glider-next",
    },
});

var bigScreen = [
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/f_J3XYl-N5gtdfvenzkvpg/999x562sr.webp"
    },
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/4xE0klM5kEICmPtBf3b3rA/999x562sr.webp"
    },
    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/eB2u8w1L3ZB3CzQ5zhTubQ/999x562sr.webp"
    },
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/rV4S9xWc5p3ow4CuIZ5sTg/999x562sr.webp"
    },
];

bigScreen.map(function (element) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("class", "card-image");
    img.setAttribute("src", element.image);
    div.append(img);
    document.querySelector("#bigScreen .glider").append(div);
});
new Glider(document.querySelector("#bigScreen .glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
        prev: "#bigScreen .glider-prev",
        next: "#bigScreen .glider-next",
    },
});


var extraOrd = [
    {
        image:
            "https://is4-ssl.mzstatic.com/image/thumb/qth_eNoJqMWbjMUyn16jpA/1478x832.webp",
        genre: "DOCUMENTARY",
        title: "Becoming You",
        desc: "Olivia Colman narratesthis docuseries about how kids grow in their first five years.",
    },
    {
        image:
            "https://is2-ssl.mzstatic.com/image/thumb/qAk-30MspnyIG9hVKJ1qKQ/1478x832.webp",
        genre: "DOCUMENTARY",
        title: "Dear...",
        desc: "Profiles of 10 game-changing icons and those whose lives they've inspired.",
    },
    {
        image:
            "https://is5-ssl.mzstatic.com/image/thumb/uBU112xIP48X2tW5EbpGGQ/1478x832.webp",
        genre: "DOCUMENTARY",
        title: "The Me You Can't See",
        desc: "Oprah and Prince Harry guide honest discussions about mental health.",
    },
    {
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/1hOcr3gchtyju9nzwvFcAg/1478x832.webp",
        genre: "DOCUMENTARY",
        title: "Home",
        desc: "Discover the stories and ideas behind the world's most imaginative dwellings.",
    },
    {
        image:
            "https://is5-ssl.mzstatic.com/image/thumb/RMn-3IiFm6XMOJZT3tP8fA/1478x832.webp",
        genre: "DOCUMENTARY",
        title: "Visible Out On Television",
        desc: "Explore the history of the LGBTQ movement through the lens of TV.",
    },
    {
        image:
            "https://is2-ssl.mzstatic.com/image/thumb/jER5ceAuuLVFije5LmLVLw/1478x832.webp",
        genre: "DOCUMENTARY",
        title: "Greatness Code",
        desc: "Seven iconic athletes reveal the pivotal career moment they touched greatness.",
    },
    {
        image:
            "https://is3-ssl.mzstatic.com/image/thumb/6MFkEmAhzwoAZfThq0xWHA/1478x832.webp",
        genre: "TALK SHOW",
        title: "The Oprah Conversation",
        desc: "Intimate discussions with newsmakers, thought leaders, and masters of craft.",
    },
    {
        image:
            "https://is5-ssl.mzstatic.com/image/thumb/QYnchKIdrKG_b0lkikPUSw/1478x832.webp",
        genre: "DOCUMENTARY",
        title: "Dads",
        desc: "Bryce Dallas Howard's doc is a joyful, star- studded look at being dad today.",
    },
];
extraOrd.map(function (element) {



    var div = document.createElement("div");
    div.setAttribute("class", "card");



    var img = document.createElement("img");
    img.setAttribute("class", "card-dp");
    img.setAttribute("src", element.image);

    var contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "contentDivlatest");

    var genre = document.createElement("p");
    genre.innerText = element.genre;
    genre.setAttribute("class", "genre");

    var title = document.createElement("p");
    title.innerText = element.title;
    title.setAttribute("class", "title");

    var desc = document.createElement("p");
    desc.innerText = element.desc;
    desc.setAttribute("class", "desc");

    contentDiv.append(genre, title, desc);

    div.append(img, contentDiv);

    document.querySelector("#nailBiting .glider").append(div);
});

new Glider(document.querySelector("#nailBiting .glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: {
        prev: "#nailBiting .glid-prev",
        next: "#nailBiting .glider-next",
    },
    responsive: [
        {
            // screens greater than >= 0px
            breakpoint: 0,
            settings: {
                slidesToShow: "1",
                slidesToScroll: "1",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 480px
            breakpoint: 481,
            settings: {
                slidesToShow: "1",
                slidesToScroll: "1",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 775px
            breakpoint: 769,
            settings: {
                slidesToShow: "2",
                slidesToScroll: "2",
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 1280px
            breakpoint: 1280,
            settings: {
                slidesToShow: "3",
                slidesToScroll: "3",
                itemWidth: 150,
                duration: 0.25,
            },
        },
    ],


});




var mythic = [

    {
        image: "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/64/55/f2/6455f286-211a-6b8f-234b-19f338149c46/aa9af5e8-a94e-45f1-b7fc-7001290bacba.lsr/998x562fe.webp"
    },
    {
        image: "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/c0/92/6a/c0926af4-8b56-442e-9c48-cf7eed2b2053/11ccb293-2a86-4928-95a6-ff952267df68.lsr/998x562fe.webp"
    },
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/c2/8b/ad/c28bad4f-16ea-59b4-4d64-ad27d50503af/888dacc8-7cac-4446-bcb7-70a70cfbe26e.lsr/998x562fe.webp"
    },
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/12/5c/7b/125c7b42-4c7e-9c71-e391-1048923aa74b/c93dad9e-caf2-4bad-91f0-27fb3dc46b82.lsr/998x562fe.webp"
    },
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/aa/03/0c/aa030c49-7cd7-8d78-843c-f0548ee19c0a/d8174b76-16fd-48b2-9c1a-8b9b5bf5ddec.lsr/998x562fe.webp"
    }
];

mythic.map(function (element) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("class", "card-images");
    img.setAttribute("src", element.image);
    div.append(img);
    document.querySelector("#mythic .glider").append(div);
});
new Glider(document.querySelector("#mythic .glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
        prev: "#mythic .glider-prev",
        next: "#mythic .glider-next",
    },
});

var comSeries = [
    {
        image:
            " https://is4-ssl.mzstatic.com/image/thumb/I6UAhe-RRHaTB3hCQdQXCQ/738x416.webp",
    },
    {
        image:
            "https://is2-ssl.mzstatic.com/image/thumb/dbEKo7rp5RGNNDrCbA7AUQ/738x416.webp ",
    },
    {
        image:
            "https://is4-ssl.mzstatic.com/image/thumb/rZ34KsuVSjdutVP-0HO95A/738x416.webp ",
    },
    {
        image:
            "https://is3-ssl.mzstatic.com/image/thumb/_VWBeTzPLn6LeyUjlTaSiQ/738x416.webp ",
    },
    {
        image:
            "https://is2-ssl.mzstatic.com/image/thumb/le6mxqLNaXH47MHIH7stzw/738x416.webp ",
    },
    {
        image:
            "https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/738x416.webp ",
    },
    {
        image:
            " https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    },
    {
        image:
            "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp ",
    },
    {
        image:
            "https://is3-ssl.mzstatic.com/image/thumb/D8bOyY8jg5hymGMxt1LSZg/738x416.webp ",
    },
    {
        image:
            "https://is3-ssl.mzstatic.com/image/thumb/eGnsZyr_h0ivXT0r4jbaew/738x416.webp ",
    },
    {
        image:
            " https://is4-ssl.mzstatic.com/image/thumb/jdSxJnPbX9kKPTfMKUHvww/738x416.webp",
    },
];
comSeries.map(function (element) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", element.image);
    div.append(img);
    document.querySelector("#comSeries .glider").append(div);
});
new Glider(document.querySelector("#comSeries .glider"), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    arrows: {
        prev: "#comSeries .glider-prev",
        next: "#comSeries.glider-next",
    },
});





