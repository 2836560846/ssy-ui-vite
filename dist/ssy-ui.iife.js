var SSYUI = (function(exports, vue) {
  "use strict";
  const SButton = vue.defineComponent({
    name: "SButton",
    render() {
      return vue.h("button", null, "Sbutton");
    }
  });
  const _sfc_main = {
    name: "SFCButton"
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "SFC Button");
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const TSXButton = /* @__PURE__ */ vue.defineComponent({
    name: "TSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("TSX Button")]);
    }
  });
  const entry = {
    install(app) {
      app.component(SButton.name, SButton);
      app.component(SFCButton.name, SFCButton);
      app.component(TSXButton.name, TSXButton);
    }
  };
  exports.SButton = SButton;
  exports.SFCButton = SFCButton;
  exports.TSXButton = TSXButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
})({}, Vue);
