(function (a) {
    a.jInvertScroll = function (f, c) {
        var g = {
            width: "auto",
            height: "auto",
            onScroll: function (h) { }
        };
        var b = a.extend(g, c);
        if (typeof f === "Object" && f.length > 0) {
            return
        }
        var e = [];
        var d = 0;
        a.each(f, function (h, j) {
            a(j).each(function (k) {
                var i = {
                    width: a(this).width(),
                    height: a(this).height(),
                    el: a(this)
                };
                e.push(i);
                if (d < i.width) {
                    d = i.width
                }
            })
        });
        if (b.width == "auto") {
            b.width = d
        }
        if (b.height == "auto") {
            b.height = d
        }
        a("body").css("height", b.height + "px");
        a(window).on("scroll resize", function (m) {
            var k = a(this).scrollTop();
            var l = a(document).height();
            var j = a(this).height();
            var i = a(this).width();
            var h = (k / (l - j)).toFixed(4);
            if (typeof b.onScroll === "function") {
                b.onScroll.call(this, h)
            }
            a.each(e, function (n, o) {
                var p = Math.floor((o.width - i) * h) * -1;
                o.el.css("left", p)
            })
        })
    }
}(jQuery));