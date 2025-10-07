import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
// ...
const config = {
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
};
export default config;