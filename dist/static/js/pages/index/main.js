global.webpackJsonp([2],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swipe_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bba8473a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swipe_vue__ = __webpack_require__(121);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bba8473a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swipe_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bba8473a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swipe_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\swiper\\swipe.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swipe.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bba8473a", Component.options)
  } else {
    hotAPI.reload("data-v-bba8473a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        imgs: Array
    }

});

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": "true",
      "indicator-active-color": "#FF800A",
      "autoplay": "true",
      "interval": "4000",
      "circular": "true"
    }
  }, _vm._l((_vm.imgs), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('div', {
      staticClass: "swiper-box"
    }, [_c('div', {
      staticClass: "swiper-desc"
    }, [_vm._v(_vm._s(item.desc))]), _vm._v(" "), _c('image', {
      staticClass: "swiper-pic",
      attrs: {
        "src": item.img
      }
    })])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bba8473a", esExports)
  }
}

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiperTouch_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2627bf90_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiperTouch_vue__ = __webpack_require__(125);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2627bf90"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiperTouch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2627bf90_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiperTouch_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\swiper\\swiperTouch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swiperTouch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2627bf90", Component.options)
  } else {
    hotAPI.reload("data-v-2627bf90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        swiperContent: Array,
        loadingMore: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        showMore: function showMore() {
            this.$emit('showMore');
            // console.log(this.swiperContent,22222222)
        }
    }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "swiper-right"
  }, [_c('scroll-view', {
    staticClass: "swiper",
    attrs: {
      "scroll-x": "true"
    }
  }, [_vm._l((_vm.swiperContent), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-item"
    }, [_c('div', {
      staticClass: "swiper-content"
    }, [_c('div', {
      staticClass: "swiper-content-img"
    }, [_c('img', {
      staticClass: "content-img-pic",
      attrs: {
        "src": item.img,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "swiper-content-text"
    }, [_c('span', {
      staticClass: "content-text-title"
    }, [_vm._v(_vm._s(item.title) + "  ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.desc))])])])])
  }), _vm._v(" "), (_vm.loadingMore) ? _c('div', {
    staticClass: "swiper-more"
  }, [_c('div', {
    staticClass: "more-text",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showMore()
      }
    }
  }, [_c('span', [_vm._v("查看更多 >")])])]) : _vm._e()], 2)], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-left"
  }, [_c('img', {
    staticClass: "swiper-left-pic",
    attrs: {
      "src": "../../../static/images/touch-title.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2627bf90", esExports)
  }
}

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HotPlays_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fbee6dc2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_HotPlays_vue__ = __webpack_require__(130);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(127)
  __webpack_require__(128)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fbee6dc2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HotPlays_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fbee6dc2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_HotPlays_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\HotPlays\\HotPlays.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HotPlays.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fbee6dc2", Component.options)
  } else {
    hotAPI.reload("data-v-fbee6dc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        isNotFun: true;
    },

    props: {
        plays: Array
    },
    methods: {
        deletePlay: function deletePlay(index) {
            // console.log(index)
            this.$emit('deletePlay', index);
        },
        play: function play(index) {
            var id = this.plays[index].id;
            this.$emit('playTV', id);
        }
    }
});

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "plays-container"
  }, _vm._l((_vm.plays), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "play-item",
      attrs: {
        "data-id": "item.id",
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.play(index)
        }
      }
    }, [_c('div', [_c('div', {
      staticClass: "play-img"
    }, [_c('div', {
      staticClass: "play-img-title"
    }, [_c('img', {
      staticClass: "play-img-pic",
      attrs: {
        "src": item.imgUrl,
        "alt": ""
      }
    })]), _vm._v(" "), (item.imgSign) ? _c('div', {
      staticClass: "play-img-sign"
    }, [_c('i', {
      staticClass: "iconfont icon-vip"
    })], 1) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "play-update"
    }, [_c('span', [_vm._v(_vm._s(item.update))])])]), _vm._v(" "), _c('div', {
      staticClass: "play-content"
    }, [_c('div', {
      staticClass: "play-title"
    }, [_c('span', [_vm._v(_vm._s(item.playTitle))])]), _vm._v(" "), _c('div', {
      staticClass: "play-desc"
    }, [_c('div', [_c('span', [_vm._v(_vm._s(item.playDesc))])]), _vm._v(" "), _c('div', {
      staticClass: "play-desc-img",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.deletePlay(index)
        }
      }
    }, [_c('img', {
      staticClass: "play-desc-pic",
      attrs: {
        "src": "../../../static/images/points.png",
        "alt": ""
      }
    })])])])])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fbee6dc2", esExports)
  }
}

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexTitle_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d570586_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexTitle_vue__ = __webpack_require__(160);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d570586"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexTitle_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d570586_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexTitle_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\title\\indexTitle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] indexTitle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d570586", Component.options)
  } else {
    hotAPI.reload("data-v-2d570586", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_scrollview_scrollview__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_input_input__ = __webpack_require__(156);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    hasToast: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      navs: ["精选", "世界杯", "夜现场", "pp中超", "剧集", "综艺", "少儿", "电影", "直播", "精选", "世界杯"]
    };
  },

  components: {
    scrollview: __WEBPACK_IMPORTED_MODULE_1__components_scrollview_scrollview__["a" /* default */],
    'yk-input': __WEBPACK_IMPORTED_MODULE_2__components_input_input__["a" /* default */]
  },
  mounted: function mounted() {
    console.log(this.props, this.hasToast, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(this.hasToast));
  }
});

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scrollview_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5a65fddf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_scrollview_vue__ = __webpack_require__(155);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(153)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a65fddf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scrollview_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5a65fddf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_scrollview_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\scrollview\\scrollview.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] scrollview.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a65fddf", Component.options)
  } else {
    hotAPI.reload("data-v-5a65fddf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        navs: Array
    },
    data: function data() {
        return {
            changeNav: 0
        };
    },

    methods: {
        chooseTitle: function chooseTitle(index) {
            // console.log(index)
            this.changeNav = index;
            // wx.navigateTo({
            //     url: ''
            // })
        }
    }
});

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "header-nav",
    attrs: {
      "scroll-x": "true"
    }
  }, [_c('div', {
    staticClass: "nav-list"
  }, _vm._l((_vm.navs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "nav-item",
      class: {
        'active': _vm.changeNav == index
      },
      attrs: {
        "data-nav": index,
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.chooseTitle(index)
        }
      }
    }, [_vm._v("\n            " + _vm._s(item) + "\n        ")])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a65fddf", esExports)
  }
}

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7450eff5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(157)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7450eff5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_input_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7450eff5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\input\\input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7450eff5", Component.options)
  } else {
    hotAPI.reload("data-v-7450eff5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            model: ''
        };
    },

    methods: {
        searchTitle: function searchTitle(model) {
            wx.showToast({
                title: '暂不支持',
                icon: 'success',
                duration: 2000
            });
        }
    }
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "yk-input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    staticClass: "yk-input-search",
    attrs: {
      "type": "text",
      "placeholder": "这就是世界波",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.model)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.model = $event.target.value
      }, function($event) {
        _vm.searchTitle(_vm.model)
      }]
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.model.length),
      expression: "!model.length"
    }],
    staticClass: "yk-input-img"
  }, [_c('img', {
    staticClass: "yk-input-pic",
    attrs: {
      "src": "../../../static/images/yk-search.png",
      "alt": ""
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7450eff5", esExports)
  }
}

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "header-title"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "header-title-right"
  }, [_c('scrollview', {
    attrs: {
      "navs": _vm.navs,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "header-content"
  }, [_c('yk-input', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "hd-message box"
  }, [_c('i', {
    staticClass: "iconfont icon-download"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "hd-download box"
  }, [_c('i', {
    staticClass: "iconfont icon-download"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "hd-toast box",
    class: {
      toast: _vm.hasToast
    }
  }, [_c('i', {
    staticClass: "iconfont icon-download"
  })], 1)], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header-title-left"
  }, [_c('img', {
    staticClass: "header-title-pic",
    attrs: {
      "src": "../../../static/images/yk-search.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d570586", esExports)
  }
}

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('v-title', {
    attrs: {
      "hasToast": "true",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "swiper-content"
  }, [_c('v-swiper', {
    attrs: {
      "imgs": _vm.imgs,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('swiper-touch', {
    attrs: {
      "swiperContent": _vm.swiperContent,
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "showMore": function($event) {
        _vm.showMore()
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "plays"
  }, [_vm._m(0), _vm._v(" "), _c('hot-plays', {
    attrs: {
      "plays": _vm.plays,
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "deletePlay": _vm.deletePlay,
      "playTV": _vm.playTV
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "plays-change"
  }, [_c('div', {
    staticClass: "btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.getMorePlays()
      }
    }
  }, [_c('span', [_vm._v("更多热播")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "inline-block"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-vip"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.changePlays()
      }
    }
  }, [_c('span', [_vm._v("换一换")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "inline-block"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-vip"
  })], 1)])])], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "play-title"
  }, [_c('div', {
    staticClass: "title-img"
  }, [_c('img', {
    staticClass: "title-pic",
    attrs: {
      "src": "../../../static/images/hot.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title-content"
  }, [_c('span', [_vm._v("正在热播")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ba0021e", esExports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(96);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5ba0021e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5ba0021e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5ba0021e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ba0021e", Component.options)
  } else {
    hotAPI.reload("data-v-5ba0021e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_swiper_swipe__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_swiper_swiperTouch__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HotPlays_HotPlays__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_title_indexTitle__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_fly__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_config__ = __webpack_require__(163);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      imgs: [],
      swiperContent: [],
      plays: [],
      scroll: ''
    };
  },

  components: {
    'v-swiper': __WEBPACK_IMPORTED_MODULE_1__components_swiper_swipe__["a" /* default */],
    swiperTouch: __WEBPACK_IMPORTED_MODULE_2__components_swiper_swiperTouch__["a" /* default */],
    HotPlays: __WEBPACK_IMPORTED_MODULE_3__components_HotPlays_HotPlays__["a" /* default */],
    'v-title': __WEBPACK_IMPORTED_MODULE_4__components_title_indexTitle__["a" /* default */]
  },
  methods: {
    playTV: function playTV(id) {
      console.log(id);
      wx.navigateTo({
        url: '/pages/discover/main?id=id',
        success: function success(res) {
          console.log("success");
        }
      });
    },
    deletePlay: function deletePlay(index) {
      var _this = this;

      console.log(index, 222);
      wx.showModal({
        title: '提示',
        content: '是否不感兴趣',
        success: function success(res) {
          if (res.confirm) {
            if (_this.plays.length <= 6) {
              _this.$http.get('swiper#!method=get').then(function (res) {
                var _plays;

                (_plays = _this.plays).push.apply(_plays, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.data.data.plays));
                _this.plays.length = 6;
              });
              _this.plays.splice(index, 1);
            }
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    _getSwiper: function _getSwiper() {
      var _this2 = this;

      wx.showLoading({
        title: '加载中'
      });
      this.$http.get('swiper#!method=get').then(function (res) {
        if (res.status = __WEBPACK_IMPORTED_MODULE_6__utils_config__["a" /* default */]) {
          _this2.imgs = res.data.data.imgs;
          _this2.plays = res.data.data.plays;
          wx.hideLoading();
        }
      }).catch(function (e) {
        console.log(e);
      });
    },
    _getSwiperTouch: function _getSwiperTouch() {
      var _this3 = this;

      wx.showLoading({
        title: '加载中'
      });
      this.$http.get('swiperTouch#!method=get').then(function (res) {
        if (res.status = __WEBPACK_IMPORTED_MODULE_6__utils_config__["a" /* default */]) {
          _this3.swiperContent = res.data.data.swiperContent;
          wx.hideLoading();
        }
      }).catch(function (e) {
        console.log(e);
      });
    },
    showMore: function showMore() {
      var _this4 = this;

      this.$http.get('swiperTouch#!method=get').then(function (res) {
        if (res.status = __WEBPACK_IMPORTED_MODULE_6__utils_config__["a" /* default */]) {
          var _swiperContent;

          (_swiperContent = _this4.swiperContent).push.apply(_swiperContent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.data.data.swiperContent));
        }
      });
    },
    getMorePlays: function getMorePlays() {},
    changePlays: function changePlays() {
      var _this5 = this;

      wx.showLoading({
        title: '加载中'
      });
      this.$http.get('playsMore#!method=get').then(function (res) {
        if (res.status = __WEBPACK_IMPORTED_MODULE_6__utils_config__["a" /* default */]) {
          _this5.plays = res.data.data.plays;
          wx.hideLoading();
        }
      }).catch(function (e) {
        console.log(e);
      });
    }
  },
  created: function created() {
    this._getSwiper();
    this._getSwiperTouch();
  }
});

/***/ })

},[95]);
//# sourceMappingURL=main.js.map