$(document).ready(function () {
    setInterval(function () {
        if (!$("#mycontent:visible").length) {
            window.location.href = "https://longkool1102.blogspot.com/"
        }
    }, 3000)
});
window.onload = function () {
    var a = document.getElementById("mycontent");
    a.setAttribute("href", "https://longkool1102.blogspot.com/");
    a.setAttribute("rel", "dofollow");
    a.setAttribute("title", "LongKool’s Blog");
    a.setAttribute("style", "display: inline-block!important; font-size: inherit!important; color: #0be6af!important; visibility: visible!important;z-index:99!important; opacity: 1!important;");
    a.innerHTML = "LongKool1102"
};
$(function () {
    $("#main-menu").each(function () {
        var b = $(this).find(".LinkList ul > li").children("a"),
            _0x613bx3 = b.length;
        for (var c = 0; c < _0x613bx3; c++) {
            var d = b.eq(c),
                _0x613bx6 = d.text();
            if (_0x613bx6.charAt(0) !== "_") {
                var e = b.eq(c + 1),
                    _0x613bx8 = e.text();
                if (_0x613bx8.charAt(0) === "_") {
                    var f = d.parent();
                    f.append("<ul class=\"sub-menu m-sub\"/>")
                }
            };
            if (_0x613bx6.charAt(0) === "_") {
                d.text(_0x613bx6.replace("_", ""));
                d.parent().appendTo(f.children(".sub-menu"))
            }
        };
        for (var c = 0; c < _0x613bx3; c++) {
            var g = b.eq(c),
                _0x613bxb = g.text();
            if (_0x613bxb.charAt(0) !== "_") {
                var h = b.eq(c + 1),
                    _0x613bxd = h.text();
                if (_0x613bxd.charAt(0) === "_") {
                    var i = g.parent();
                    i.append("<ul class=\"sub-menu2 m-sub\"/>")
                }
            };
            if (_0x613bxb.charAt(0) === "_") {
                g.text(_0x613bxb.replace("_", ""));
                g.parent().appendTo(i.children(".sub-menu2"))
            }
        };
        $("#main-menu ul li ul").parent("li").addClass("has-sub");
        $("#main-menu-nav > li > a").each(function () {
            var a = $(this),
                _0x613bx10 = a.attr("href").trim().toLowerCase();
            if (_0x613bx10 == "homepage") {
                a.attr("href", "/").parent("li").addClass("li-home")
            }
        });
        $("#main-menu .widget").addClass("show-menu")
    });
    $("#main-menu-nav").clone().appendTo(".mobile-menu");
    $(".mobile-menu .has-sub").append("<div class=\"submenu-toggle\"/>");
    $(".mobile-menu ul > li a").each(function () {
        var a = $(this),
            _0x613bx11 = a.attr("href").trim(),
            _0x613bx12 = _0x613bx11.toLowerCase(),
            _0x613bx13 = _0x613bx11.split("/"),
            _0x613bx14 = _0x613bx13[0];
        if (_0x613bx12.match("mega-menu")) {
            a.attr("href", "/search/label/" + _0x613bx14 + "?&max-results=" + postPerPage)
        }
    });
    $(".slide-menu-toggle").on("click", function () {
        $("body").toggleClass("nav-active")
    });
    $(".mobile-menu ul li .submenu-toggle").on("click", function (a) {
        if ($(this).parent().hasClass("has-sub")) {
            a.preventDefault();
            if (!$(this).parent().hasClass("show")) {
                $(this).parent().addClass("show").children(".m-sub").slideToggle(170)
            } else {
                $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170)
            }
        }
    });
    $(".show-search, .show-mobile-search").on("click", function () {
        $("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()
    });
    $(".hide-search, .hide-mobile-search").on("click", function () {
        $("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()
    });
    $(".Label a, a.b-label").attr("href", function (a, b) {
        return b.replace(b, b + "?&max-results=" + postPerPage)
    });
    $(".avatar-image-container img").attr("src", function (a, b) {
        b = b.replace("/s35-c/", "/s45-c/");
        b = b.replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png");
        return b
    });
    $(".index-post .post-image-link img").attr("src", function (a, b) {
        b = b.replace("https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png", noThumbnail);
        return b
    });
    $(".author-description a").each(function () {
        $(this).attr("target", "_blank")
    });
    $(".post-nav").each(function () {
        var c = $("a.prev-post-link").attr("href"),
            _0x613bx17 = $("a.next-post-link").attr("href");
        $.ajax({
            url: c,
            type: "get",
            success: function (a) {
                var b = $(a).find(".blog-post h1.post-title").text();
                $(".post-prev a .post-nav-inner p").text(b)
            }
        });
        $.ajax({
            url: _0x613bx17,
            type: "get",
            success: function (a) {
                var b = $(a).find(".blog-post h1.post-title").text();
                $(".post-next a .post-nav-inner p").text(b)
            }
        })
    });
    $(".post-body strike").each(function () {
        var a = $(this),
            _0x613bx12 = a.text();
        if (_0x613bx12.match("left-sidebar")) {
            a.replaceWith("<style>.item #main-wrapper{float:right;padding:0 0 0 25px}.item #sidebar-wrapper{float:left}</style>")
        };
        if (_0x613bx12.match("right-sidebar")) {
            a.replaceWith("<style>.item #main-wrapper{float:left;padding:0 25px 0 0}.item #sidebar-wrapper{float:right}</style>")
        };
        if (_0x613bx12.match("full-width")) {
            a.replaceWith("<style>.item #main-wrapper{width:100%;padding:0}.item #sidebar-wrapper{display:none}</style>")
        }
    });
    $("#main-wrapper, #sidebar-wrapper").each(function () {
        if (fixedSidebar == true) {
            $(this).theiaStickySidebar({
                additionalMarginTop: 25,
                additionalMarginBottom: 25
            })
        }
    });
    $(".back-top").each(function () {
        var a = $(this);
        $(window).on("scroll", function () {
            $(this).scrollTop() >= 100 ? a.fadeIn(250) : a.fadeOut(250)
        }), a.click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 500)
        })
    });
    $("#main-menu #main-menu-nav li").each(function () {
        var a = $(this),
            _0x613bx11 = a.find("a").attr("href").trim(),
            _0x613bxf = a,
            _0x613bx12 = _0x613bx11.toLowerCase(),
            _0x613bx13 = _0x613bx11.split("/"),
            _0x613bx14 = _0x613bx13[0];
        _0x613bx34(_0x613bxf, _0x613bx12, 5, _0x613bx14)
    });
    $("#hot-section .widget-content").each(function () {
        var a = $(this),
            _0x613bx11 = a.text().trim(),
            _0x613bx12 = _0x613bx11.toLowerCase(),
            _0x613bx13 = _0x613bx11.split("/"),
            _0x613bx14 = _0x613bx13[0];
        _0x613bx34(a, _0x613bx12, 5, _0x613bx14)
    });
    $(".featured-posts .widget-content").each(function () {
        var a = $(this),
            _0x613bx11 = a.text().trim(),
            _0x613bx12 = _0x613bx11.toLowerCase(),
            _0x613bx13 = _0x613bx11.split("/");
        if (_0x613bx12.match("feat-big")) {
            var b = 5,
                _0x613bx14 = _0x613bx13[0]
        } else {
            b = _0x613bx13[0], _0x613bx14 = _0x613bx13[1]
        };
        _0x613bx34(a, _0x613bx12, b, _0x613bx14)
    });
    $(".common-widget .widget-content").each(function () {
        var a = $(this),
            _0x613bx11 = a.text().trim(),
            _0x613bx12 = _0x613bx11.toLowerCase(),
            _0x613bx13 = _0x613bx11.split("/"),
            _0x613bx1c = _0x613bx13[0],
            _0x613bx14 = _0x613bx13[1];
        _0x613bx34(a, _0x613bx12, _0x613bx1c, _0x613bx14)
    });
    $(".related-ready").each(function () {
        var a = $(this),
            _0x613bx14 = a.find(".related-tag").data("label");
        _0x613bx34(a, "related", 3, _0x613bx14)
    });

    function _0x613bx1d(a, b) {
        for (var c = 0; c < a[b].link.length; c++) {
            if (a[b].link[c].rel == "alternate") {
                var d = a[b].link[c].href;
                break
            }
        };
        return d
    }

    function _0x613bx21(a, b, c) {
        var d = a[b].title["$t"],
            _0x613bx23 = "<a href=\"" + c + "\">" + d + "</a>";
        return _0x613bx23
    }

    function _0x613bx24(a, b) {
        var c = a[b].author[0].name["$t"],
            _0x613bx23 = "<span class=\"post-author\">" + c + " </span>";
        return _0x613bx23
    }

    function _0x613bx25(a, b) {
        var c = a[b].published["$t"],
            _0x613bx27 = c.substring(0, 4),
            _0x613bx28 = c.substring(5, 7),
            _0x613bx29 = c.substring(8, 10),
            _0x613bx2a = monthFormat[parseInt(_0x613bx28, 10) - 1] + " " + _0x613bx29 + ", " + _0x613bx27,
            _0x613bx23 = "<span class=\"post-date\">" + _0x613bx2a + "</span>";
        return _0x613bx23
    }

    function _0x613bx2b(a, b) {
        var c = a[b].title["$t"],
            _0x613bx2c = a[b].content["$t"];
        if ("media$thumbnail" in a[b]) {
            var d = a[b]["media$thumbnail"].url,
                _0x613bx2e = d.replace("/s72-c", "/w640"),
                _0x613bx2f = d.replace("/s72-c", "/w280"),
                _0x613bx30 = d.replace("/s72-c", "/w100");
            if (d.match("img.youtube.com")) {
                _0x613bx2e = d.replace("/default.", "/hqdefault.");
                _0x613bx2f = d.replace("/default.", "/mqdefault.");
                _0x613bx30 = d
            }
        } else {
            _0x613bx2e = noThumbnail;
            _0x613bx2f = noThumbnail.replace("/s680", "/w280");
            _0x613bx30 = noThumbnail.replace("/s680", "/w100")
        };
        var e = "<img class=\"post-thumb\" alt=\"" + c + "\" src=\"" + _0x613bx2e + "\"/>",
            _0x613bx7 = "<img class=\"post-thumb\" alt=\"" + c + "\" src=\"" + _0x613bx2f + "\"/>",
            _0x613bxa = "<img class=\"post-thumb\" alt=\"" + c + "\" src=\"" + _0x613bx30 + "\"/>",
            _0x613bx23 = [e, _0x613bx7, _0x613bxa];
        return _0x613bx23
    }

    function _0x613bx31(a, b) {
        var c = a[b].content["$t"],
            _0x613bx32 = $("<div>").html(c),
            _0x613bx33 = _0x613bx32.text().trim().substr(0, 86),
            _0x613bx23 = "<p class=\"post-snippet\">" + _0x613bx33 + "…</p>";
        return _0x613bx23
    }

    function _0x613bx34(i, j, k, l) {
        if (j.match("mega-menu") || j.match("hot-posts") || j.match("feat-big") || j.match("col-left") || j.match("col-right") || j.match("grid-small") || j.match("grid-big") || j.match("post-list") || j.match("related")) {
            var m = "";
            if (l == "recent") {
                m = "/feeds/posts/default?alt=json-in-script&max-results=" + k
            } else 
               (l == "random") {
                m = "/feeds/posts/default/-/" + l + "?alt=json-in-script&max-results=" + k
                }
            ;
            $.ajax({
                url: m,
                type: "get",
                dataType: "jsonp",
                beforeSend: function () {
                    if (j.match("hot-posts")) {
                        i.html("<div class=\"hot-loader\"/>").parent().addClass("show-hot")
                    }
                },
                success: function (c) {
                    if (j.match("mega-menu")) {
                        var d = "<ul class=\"mega-menu-inner\">"
                    } else {
                        if (j.match("hot-posts")) {
                            var d = "<ul class=\"hot-posts\">"
                        } else {
                            if (j.match("feat-big")) {
                                var d = "<ul class=\"feat-big\">"
                            } else {
                                if (j.match("col-right") || j.match("col-left")) {
                                    var d = "<ul class=\"feat-col\">"
                                } else {
                                    if (j.match("grid-small")) {
                                        var d = "<ul class=\"grid-small\">"
                                    } else {
                                        if (j.match("grid-big")) {
                                            var d = "<ul class=\"grid-big\">"
                                        } else {
                                            if (j.match("post-list")) {
                                                var d = "<ul class=\"custom-widget\">"
                                            } else {
                                                if (j.match("related")) {
                                                    var d = "<ul class=\"related-posts\">"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                    var e = c.feed.entry;
                    if (e != undefined) {
                        for (var f = 0, _0x613bx1e = e; f < _0x613bx1e.length; f++) {
                            var g = _0x613bx1d(_0x613bx1e, f),
                                _0x613bx19 = _0x613bx21(_0x613bx1e, f, g),
                                _0x613bx3a = _0x613bx2b(_0x613bx1e, f),
                                _0x613bx3b = _0x613bx24(_0x613bx1e, f),
                                _0x613bx3c = _0x613bx25(_0x613bx1e, f),
                                _0x613bx3d = _0x613bx31(_0x613bx1e, f);
                            var h = "";
                            if (j.match("mega-menu")) {
                                h += "<div class=\"mega-item item-" + f + "\"><div class=\"mega-content\"><div class=\"post-image-wrap\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[1] + "</a></div><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3c + "</div></div></div>"
                            } else {
                                if (j.match("hot-posts")) {
                                    if (f == 0) {
                                        h += "<li class=\"hot-item item-" + f + "\"><div class=\"hot-item-inner\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[0] + "</a><div class=\"post-info\"><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3b + "<span class=\"separator\">-</span>" + _0x613bx3c + "</div></div></div></li>"
                                    } else {
                                        if (f == 1) {
                                            h += "<li class=\"hot-item item-" + f + "\"><div class=\"hot-item-inner\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[0] + "</a><div class=\"post-info\"><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3b + "<span class=\"separator\">-</span>" + _0x613bx3c + "</div></div></div></li>"
                                        } else {
                                            h += "<li class=\"hot-item item-" + f + "\"><div class=\"hot-item-inner\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[0] + "</a><div class=\"post-info\"><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3c + "</div></div></div></li>"
                                        }
                                    }
                                } else {
                                    if (j.match("feat-big")) {
                                        if (f == 0) {
                                            h += "<li class=\"feat-item item-big item-" + f + "\"><div class=\"feat-inner\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[0] + "</a><div class=\"post-info\"><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3b + "<span class=\"separator\">-</span>" + _0x613bx3c + "</div>" + _0x613bx3d + "</div></div></li>"
                                        } else {
                                            h += "<li class=\"feat-item item-small item-" + f + "\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[1] + "</a><div class=\"post-info\"><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3c + "</div></div></li>"
                                        }
                                    } else {
                                        if (j.match("col-left") || j.match("col-right")) {
                                            if (f == 0) {
                                                h += "<li class=\"feat-item item-big item-" + f + "\"><div class=\"feat-inner\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[0] + "</a><div class=\"post-info\"><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3b + "<span class=\"separator\">-</span>" + _0x613bx3c + "</div>" + _0x613bx3d + "</div></div></li>"
                                            } else {
                                                h += "<li class=\"feat-item item-small item-" + f + "\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[2] + "</a><div class=\"post-info\"><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3c + "</div></div></li>"
                                            }
                                        } else {
                                            if (j.match("grid-small")) {
                                                h += "<li class=\"feat-item item-small item-" + f + "\"><div class=\"post-image-wrap\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[1] + "</a></div><div class=\"post-info\"><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3c + "</div></div></li>"
                                            } else {
                                                if (j.match("grid-big")) {
                                                    h += "<li class=\"feat-item item-big item-" + f + "\"><div class=\"feat-inner\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[0] + "</a><div class=\"post-info\"><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3b + "<span class=\"separator\">-</span>" + _0x613bx3c + "</div></div></div></li>"
                                                } else {
                                                    if (j.match("post-list")) {
                                                        h += "<li class=\"item-" + f + "\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[2] + "</a><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3c + "</div></div></li>"
                                                    } else {
                                                        if (j.match("related")) {
                                                            h += "<li class=\"related-item item-" + f + "\"><div class=\"post-image-wrap\"><a class=\"post-image-link\" href=\"" + g + "\">" + _0x613bx3a[1] + "</a></div><h2 class=\"post-title\">" + _0x613bx19 + "</h2><div class=\"post-meta\">" + _0x613bx3c + "</div></li>"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            d += h
                        };
                        d += "</ul>"
                    } else {
                        d = "<ul class=\"no-posts\">Error: No Posts Found <i class=\"fa fa-frown-o\"/></ul>"
                    };
                    if (j.match("mega-menu")) {
                        i.addClass("has-sub mega-menu").append(d);
                        i.find("a:first").attr("href", function (a, b) {
                            if (l == "recent" || l == "random") {
                                b = b.replace(b, "/search/?&max-results=" + postPerPage)
                            } else {
                                b = b.replace(b, "/search/label/" + l + "?&max-results=" + postPerPage)
                            };
                            return b
                        })
                    } else {
                        if (j.match("hot-posts")) {
                            i.html(d).parent().addClass("show-hot")
                        } else {
                            if (j.match("feat-big") || j.match("col-left") || j.match("col-right") || j.match("grid-small") || j.match("grid-big")) {
                                i.parent().find(".widget-title").append("<a class=\"view-all\" href=\"/search/label/" + l + "?&max-results=" + postPerPage + "\">" + messages.viewAll + "</a>");
                                if (j.match("col-left") || j.match("col-right")) {
                                    if (j.match("col-right")) {
                                        i.parent().addClass("col-right")
                                    };
                                    i.parent().addClass("col-width")
                                };
                                i.html(d).parent().addClass("show-widget")
                            } else {
                                i.html(d)
                            }
                        }
                    }
                }
            })
        }
    }
    $(".blog-post-comments").each(function () {
        var b = commentsSystem,
            _0x613bx40 = disqus_blogger_current_url,
            _0x613bx41 = "<div id=\"disqus_thread\"/>",
            _0x613bx42 = $(location).attr("href"),
            _0x613bx43 = "<div class=\"fb-comments\" data-width=\"100%\" data-href=\"" + _0x613bx42 + "\" data-numposts=\"5\"></div>",
            _0x613bx44 = "comments-system-" + b;
        if (b == "blogger") {
            $(this).addClass(_0x613bx44).show()
        } else {
            if (b == "disqus") {
                (function () {
                    var a = document.createElement("script");
                    a.type = "text/javascript";
                    a.async = true;
                    a.src = "//" + disqusShortname + ".disqus.com/embed.js";
                    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a)
                })();
                $("#comments, #gpluscomments").remove();
                $(this).append(_0x613bx41).addClass(_0x613bx44).show()
            } else {
                if (b == "facebook") {
                    $("#comments, #gpluscomments").remove();
                    $(this).append(_0x613bx43).addClass(_0x613bx44).show()
                } else {
                    if (b == "hide") {
                        $(this).hide()
                    } else {
                        $(this).addClass("comments-system-default").show()
                    }
                }
            }
        }
    })
})
