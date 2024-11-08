import $ from 'jquery'

window.$ = window.jQuery = $
const jQuery = $

import 'nanogallery2'

$(function () {
    console.log('Page was loaded.')

    $('#ng2').nanogallery2({
        items: [],
    })
})
