/* Rule Id: 3200250 */
/* Rule Id: 3200051 */
function addStyle(styles) {

    /* Create style element */
    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet)
        css.styleSheet.cssText = styles;
    else
        css.appendChild(document.createTextNode(styles));

    /* Append style to the head element */
    document.getElementsByTagName("head")[0].appendChild(css);
}

var styles = ".covid19-modal-container div.logo-image { background: transparent url(https://ihg.scene7.com/is/image/ihg/uhf_ihg_logo@2x-1?fmt=png-alpha) no-repeat left center; background-size: 90px 36px; height: 90px; }";
styles += ".covid19-modal-container div.attention { color: #d96932; font-weight: bold; font-size: 20px; padding: 0 0 20px 0px;}";
styles += ".covid19-modal-container p.reason { font-weight: bold; }";
styles += "div.covid19-modal-container { color: gray; padding: 20px; font-family: 'Graphik', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px;}";
styles += ".covid19-modal-container li a { color: #d96932; }";
styles += ".covid19-modal-container li { margin: 10px 0;}";

if (window.innerWidth > 900) {
    styles += ".featherlight .featherlight-content{margin-left:10px;margin-right:10px;max-height:98%;padding:10px 10px 0;border-bottom:10px solid transparent;width: 50%;}";
}

addStyle(styles);


try {

    var htmlTxt = "";

    if (typeof jQuery !== 'undefined') {
        setTimeout(function () {

            // Featherlight JS
            // https://github.com/noelboss/featherlight
            if (typeof jQuery.featherlight === 'undefined') {

                ! function (a) {
                    "use strict";

                    function b(a, c) {
                        if (!(this instanceof b)) {
                            var d = new b(a, c);
                            return d.open(), d
                        }
                        this.id = b.id++, this.setup(a, c), this.chainCallbacks(b._callbackChain)
                    }
                    if ("undefined" == typeof a) return void ("console" in window && window.console.info("Too much lightness, Featherlight needs jQuery."));
                    var c = [],
                        d = function (b) {
                            return c = a.grep(c, function (a) {
                                return a !== b && a.$instance.closest("body").length > 0
                            })
                        },
                        e = function (a, b) {
                            var c = {},
                                d = new RegExp("^" + b + "([A-Z])(.*)");
                            for (var e in a) {
                                var f = e.match(d);
                                if (f) {
                                    var g = (f[1] + f[2].replace(/([A-Z])/g, "-$1")).toLowerCase();
                                    c[g] = a[e]
                                }
                            }
                            return c
                        },
                        f = {
                            keyup: "onKeyUp",
                            resize: "onResize"
                        },
                        g = function (c) {
                            a.each(b.opened().reverse(), function () {
                                return c.isDefaultPrevented() || !1 !== this[f[c.type]](c) ? void 0 : (c.preventDefault(), c.stopPropagation(), !1)
                            })
                        },
                        h = function (c) {
                            if (c !== b._globalHandlerInstalled) {
                                b._globalHandlerInstalled = c;
                                var d = a.map(f, function (a, c) {
                                    return c + "." + b.prototype.namespace
                                }).join(" ");
                                a(window)[c ? "on" : "off"](d, g)
                            }
                        };
                    b.prototype = {
                        constructor: b,
                        namespace: "featherlight",
                        targetAttr: "data-featherlight",
                        variant: null,
                        resetCss: !1,
                        background: null,
                        openTrigger: "click",
                        closeTrigger: "click",
                        filter: null,
                        root: "body",
                        openSpeed: 250,
                        closeSpeed: 250,
                        closeOnClick: "background",
                        closeOnEsc: !0,
                        closeIcon: "&#10005;",
                        loading: "",
                        persist: !1,
                        otherClose: null,
                        beforeOpen: a.noop,
                        beforeContent: a.noop,
                        beforeClose: a.noop,
                        afterOpen: a.noop,
                        afterContent: a.noop,
                        afterClose: a.noop,
                        onKeyUp: a.noop,
                        onResize: a.noop,
                        type: null,
                        contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
                        setup: function (b, c) {
                            "object" != typeof b || b instanceof a != !1 || c || (c = b, b = void 0);
                            var d = a.extend(this, c, {
                                target: b
                            }),
                                e = d.resetCss ? d.namespace + "-reset" : d.namespace,
                                f = a(d.background || ['<div class="' + e + "-loading " + e + '">', '<div class="' + e + '-content">', '<span class="' + e + "-close-icon " + d.namespace + '-close">', d.closeIcon, "</span>", '<div class="' + d.namespace + '-inner">' + d.loading + "</div>", "</div>", "</div>"].join("")),
                                g = "." + d.namespace + "-close" + (d.otherClose ? "," + d.otherClose : "");
                            return d.$instance = f.clone().addClass(d.variant), d.$instance.on(d.closeTrigger + "." + d.namespace, function (b) {
                                var c = a(b.target);
                                ("background" === d.closeOnClick && c.is("." + d.namespace) || "anywhere" === d.closeOnClick || c.closest(g).length) && (d.close(b), b.preventDefault())
                            }), this
                        },
                        getContent: function () {
                            if (this.persist !== !1 && this.$content) return this.$content;
                            var b = this,
                                c = this.constructor.contentFilters,
                                d = function (a) {
                                    return b.$currentTarget && b.$currentTarget.attr(a)
                                },
                                e = d(b.targetAttr),
                                f = b.target || e || "",
                                g = c[b.type];
                            if (!g && f in c && (g = c[f], f = b.target && e), f = f || d("href") || "", !g)
                                for (var h in c) b[h] && (g = c[h], f = b[h]);
                            if (!g) {
                                var i = f;
                                if (f = null, a.each(b.contentFilters, function () {
                                    return g = c[this], g.test && (f = g.test(i)), !f && g.regex && i.match && i.match(g.regex) && (f = i), !f
                                }), !f) return "console" in window && window.console.error("Featherlight: no content filter found " + (i ? ' for "' + i + '"' : " (no target specified)")), !1
                            }
                            return g.process.call(b, f)
                        },
                        setContent: function (b) {
                            var c = this;
                            return (b.is("iframe") || a("iframe", b).length > 0) && c.$instance.addClass(c.namespace + "-iframe"), c.$instance.removeClass(c.namespace + "-loading"), c.$instance.find("." + c.namespace + "-inner").not(b).slice(1).remove().end().replaceWith(a.contains(c.$instance[0], b[0]) ? "" : b), c.$content = b.addClass(c.namespace + "-inner"), c
                        },
                        open: function (b) {
                            var d = this;
                            if (d.$instance.hide().appendTo(d.root), !(b && b.isDefaultPrevented() || d.beforeOpen(b) === !1)) {
                                b && b.preventDefault();
                                var e = d.getContent();
                                if (e) return c.push(d), h(!0), d.$instance.fadeIn(d.openSpeed), d.beforeContent(b), a.when(e).always(function (a) {
                                    d.setContent(a), d.afterContent(b)
                                }).then(d.$instance.promise()).done(function () {
                                    d.afterOpen(b)
                                })
                            }
                            return d.$instance.detach(), a.Deferred().reject().promise()
                        },
                        close: function (b) {
                            var c = this,
                                e = a.Deferred();
                            return c.beforeClose(b) === !1 ? e.reject() : (0 === d(c).length && h(!1), c.$instance.fadeOut(c.closeSpeed, function () {
                                c.$instance.detach(), c.afterClose(b), e.resolve()
                            })), e.promise()
                        },
                        resize: function (a, b) {
                            if (a && b) {
                                this.$content.css("width", "").css("height", "");
                                var c = Math.max(a / parseInt(this.$content.parent().css("width"), 10), b / parseInt(this.$content.parent().css("height"), 10));
                                c > 1 && this.$content.css("width", "" + a / c + "px").css("height", "" + b / c + "px")
                            }
                        },
                        chainCallbacks: function (b) {
                            for (var c in b) this[c] = a.proxy(b[c], this, a.proxy(this[c], this))
                        }
                    }, a.extend(b, {
                        id: 0,
                        autoBind: "[data-featherlight]",
                        defaults: b.prototype,
                        contentFilters: {
                            jquery: {
                                regex: /^[#.]\w/,
                                test: function (b) {
                                    return b instanceof a && b
                                },
                                process: function (b) {
                                    return this.persist !== !1 ? a(b) : a(b).clone(!0)
                                }
                            },
                            image: {
                                regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,
                                process: function (b) {
                                    var c = this,
                                        d = a.Deferred(),
                                        e = new Image,
                                        f = a('<img src="' + b + '" alt="" class="' + c.namespace + '-image" />');
                                    return e.onload = function () {
                                        f.naturalWidth = e.width, f.naturalHeight = e.height, d.resolve(f)
                                    }, e.onerror = function () {
                                        d.reject(f)
                                    }, e.src = b, d.promise()
                                }
                            },
                            html: {
                                regex: /^\s*<[\w!][^<]*>/,
                                process: function (b) {
                                    return a(b)
                                }
                            },
                            ajax: {
                                regex: /./,
                                process: function (b) {
                                    var c = a.Deferred(),
                                        d = a("<div></div>").load(b, function (a, b) {
                                            "error" !== b && c.resolve(d.contents()), c.fail()
                                        });
                                    return c.promise()
                                }
                            },
                            iframe: {
                                process: function (b) {
                                    var c = new a.Deferred,
                                        d = a("<iframe/>").hide().attr("src", b).css(e(this, "iframe")).on("load", function () {
                                            c.resolve(d.show())
                                        }).appendTo(this.$instance.find("." + this.namespace + "-content"));
                                    return c.promise()
                                }
                            },
                            text: {
                                process: function (b) {
                                    return a("<div>", {
                                        text: b
                                    })
                                }
                            }
                        },
                        functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
                        readElementConfig: function (b, c) {
                            var d = this,
                                e = new RegExp("^data-" + c + "-(.*)"),
                                f = {};
                            return b && b.attributes && a.each(b.attributes, function () {
                                var b = this.name.match(e);
                                if (b) {
                                    var c = this.value,
                                        g = a.camelCase(b[1]);
                                    if (a.inArray(g, d.functionAttributes) >= 0) c = new Function(c);
                                    else try {
                                        c = a.parseJSON(c)
                                    } catch (h) { }
                                    f[g] = c
                                }
                            }), f
                        },
                        extend: function (b, c) {
                            var d = function () {
                                this.constructor = b
                            };
                            return d.prototype = this.prototype, b.prototype = new d, b.__super__ = this.prototype, a.extend(b, this, c), b.defaults = b.prototype, b
                        },
                        attach: function (b, c, d) {
                            var e = this;
                            "object" != typeof c || c instanceof a != !1 || d || (d = c, c = void 0), d = a.extend({}, d);
                            var f, g = d.namespace || e.defaults.namespace,
                                h = a.extend({}, e.defaults, e.readElementConfig(b[0], g), d);
                            return b.on(h.openTrigger + "." + h.namespace, h.filter, function (g) {
                                var i = a.extend({
                                    $source: b,
                                    $currentTarget: a(this)
                                }, e.readElementConfig(b[0], h.namespace), e.readElementConfig(this, h.namespace), d),
                                    j = f || a(this).data("featherlight-persisted") || new e(c, i);
                                "shared" === j.persist ? f = j : j.persist !== !1 && a(this).data("featherlight-persisted", j), i.$currentTarget.blur(), j.open(g)
                            }), b
                        },
                        current: function () {
                            var a = this.opened();
                            return a[a.length - 1] || null
                        },
                        opened: function () {
                            var b = this;
                            return d(), a.grep(c, function (a) {
                                return a instanceof b
                            })
                        },
                        close: function (a) {
                            var b = this.current();
                            return b ? b.close(a) : void 0
                        },
                        _onReady: function () {
                            var b = this;
                            b.autoBind && (a(b.autoBind).each(function () {
                                b.attach(a(this))
                            }), a(document).on("click", b.autoBind, function (c) {
                                c.isDefaultPrevented() || "featherlight" === c.namespace || (c.preventDefault(), b.attach(a(c.currentTarget)), a(c.target).trigger("click.featherlight"))
                            }))
                        },
                        _callbackChain: {
                            onKeyUp: function (b, c) {
                                return 27 === c.keyCode ? (this.closeOnEsc && a.featherlight.close(c), !1) : b(c)
                            },
                            onResize: function (a, b) {
                                return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), a(b)
                            },
                            afterContent: function (a, b) {
                                var c = a(b);
                                return this.onResize(b), c
                            }
                        }
                    }), a.featherlight = b, a.fn.featherlight = function (a, c) {
                        return b.attach(this, a, c)
                    }, a(document).ready(function () {
                        b._onReady()
                    })
                }(jQuery);


            }

            var cookieExpDate = new Date(Date.now() + 86400000 * 30);
            var cookieVal = Bootstrapper.Cookies.get('customer_care_message') ? Bootstrapper.Cookies.get('customer_care_message') : "";
            if (cookieVal !== 'true') {
                jQuery('head').append("<style type='text/css'>@media all{.featherlight{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483647;text-align:center;white-space:nowrap;cursor:pointer;background:#333;background:rgba(0,0,0,0)}.featherlight:last-of-type{background:rgba(0,0,0,.8)}.featherlight:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-.25em}.featherlight .featherlight-content{position:relative;text-align:left;vertical-align:middle;display:inline-block;overflow:auto;padding:25px 25px 0;border-bottom:25px solid transparent;margin-left:5%;margin-right:5%;max-height:95%;background:#fff;cursor:auto;white-space:normal}.featherlight .featherlight-inner{display:block}.featherlight .featherlight-close-icon{position:absolute;z-index:9999;top:0;right:0;line-height:40px;width:50px;cursor:pointer;text-align:center;font-family:Arial,sans-serif;background:#fff;background:rgba(255,255,255,.3);color:#000;padding:5px 10px;font-size:30px;}.featherlight .featherlight-image{width:100%}.featherlight-iframe .featherlight-content{border-bottom:0;padding:0}.featherlight iframe{border:0}}@media only screen and (max-width:1024px){.featherlight .featherlight-content{margin-left:10px;margin-right:10px;max-height:98%;padding:10px 10px 0;border-bottom:10px solid transparent}}</style>");


                var attentionText = "Attention!";
                /*
                var reasonText = "Due to the volume of calls to our Global Reservation & Customer Care teams we are unfortunately experiencing extended hold times.";
                var requestText = "To help support all our guests in a timely manner we ask that you:";
        
                var listitem1 = "Modify or cancel your reservation online at <a href='https://www.ihg.com/hotels/us/en/stay-mgmt/ManageYourStay'><font color='d96932'>Manage Your Stay</font></a> or on the IHG app";
                var listitem2 = "Call the team only if your travel is <b>within the next 72 hours</b> and you are not able to modify or cancel your reservation online or via the IHG app";
                var listitem3 = "Please use this <a href='https://www.ihg.com/hotels/us/en/customer-care/forms/comment'><font color='d96932'>comment form</font></a> if your request is not urgent or to report an issue and our Reservations & Customer Care team will respond in due course"; */


                var reasonText = "Due to the volume of calls to our Global Reservations & Customer Care teams we are unfortunately experiencing extended hold times. To help support all our guests in a timely manner you can modify or cancel your reservation online at <a href='https://www.ihg.com/hotels/us/en/stay-mgmt/ManageYourStay'><font color='d96932'>Manage Your Stay</font></a> or on the IHG app.";

                var requestText = "Please continue to visit the <a href='https://www.ihg.com/content/us/en/customer-care/travel-advisory'><font color='d96932'>Travel Advisory</font></a> for more real-time information on our updated policies or how to manage a current reservation.";

                jQuery("<div/>").attr('id', 'modal-container-parent').attr('class', 'modal-container-parent').appendTo('body');
                jQuery("<div/>").attr('id', 'modal-container').attr('class', 'covid19-modal-container').appendTo(jQuery('.modal-container-parent'));
                jQuery("#modal-container").append('<div class="logo-image"></div>');
                jQuery("#modal-container").append('<div class="attention">' + attentionText + '</div>');
                // jQuery("#modal-container").append('<p class="reason">' + reasonText + '</p>');
                jQuery("#modal-container").append('<p>' + reasonText + '</p>');
                jQuery("#modal-container").append('<p>' + requestText + '</p>');

                /* jQuery("#modal-container").append('<li>' + listitem1 + '</li>');
                 jQuery("#modal-container").append('<li>' + listitem2 + '</li>');
                 jQuery("#modal-container").append('<li>' + listitem3 + '</li>'); */

                jQuery('.modal-container-parent').hide();

                if (jQuery.featherlight.current() === null) {
                    console.log('Activating customer_care_message customer care message Lightbox.');

                    jQuery.featherlight(jQuery("#modal-container"), {
                        type: 'html',
                        closeOnClick: 'background',
                        closeOnEsc: true,
                        closeIcon: '&#10005;',
                        openSpeed: 250,
                        closeSpeed: 250,
                    });
                    console.log('Setting customer_care_message cookie.');
                    // Bootstrapper.Cookies.set('customer_care_message', 'true', cookieExpDate);
                    Bootstrapper.Cookies.set('customer_care_message', 'true');
                } else {
                    console.log('customer_care_message lightbox already open.');
                }
            } else {
                console.log('customer_care_message not shown, cookie present.');
            }
        }, 3000);


    } else {
        console.log('customer_care_message not loaded jQuery undefined .');
    }
} catch (err) {
    console.error('failed customer_care_message customer care message modal error : ' + err);
}