export function setup(helper) {
  if(!helper.markdownIt) { return; }

  helper.registerOptions((opts, siteSettings) => {
    opts.features["mark"] = !!siteSettings.mark_enabled;
  });

  helper.whiteList([
    'mark'
  ]);

  helper.registerPlugin(window.markdownitMark);
}
