import { defineComponent, h, createElementBlock, openBlock, createVNode, createTextVNode } from "vue";
const SButton = defineComponent({
  name: "SButton",
  render() {
    return h("button", null, "Sbutton");
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
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const TSXButton = /* @__PURE__ */ defineComponent({
  name: "TSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("TSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(SButton.name, SButton);
    app.component(SFCButton.name, SFCButton);
    app.component(TSXButton.name, TSXButton);
  }
};
export {
  SButton,
  SFCButton,
  TSXButton,
  entry as default
};
