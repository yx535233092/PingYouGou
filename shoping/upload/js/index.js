window.addEventListener('load', function () {
    var arrowl = this.document.querySelector('.arrow-l');
    var arrowr = this.document.querySelector('.arrow-r');
    var focus = this.document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function () {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        timer = setInterval(function () {
            arrowr.click();
        },2000)
    })

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //移动图片

            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    arrowr.addEventListener('click', function () {
        num++;
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        animate(ul, -num * focusWidth);
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current'
    })
    arrowl.addEventListener('click', function () {
        num--;
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = focusWidth * -num + 'px';

        }
        animate(ul, -num * focusWidth);
        circle--;
        if (circle <0) {
            circle = ol.children.length - 1;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current'
    })
    var timer = this.setInterval(function () {
        arrowr.click();
    },2000)
})